
import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FileUp, X, CheckCircle } from "lucide-react";

interface FileUploadProps {
  title: string;
  subtitle: string;
  acceptedFileTypes: string;
  maxFileSizeMB?: number;
  onFileSelect: (file: File) => void;
}

const FileUpload = ({
  title,
  subtitle,
  acceptedFileTypes,
  maxFileSizeMB = 5,
  onFileSelect,
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    
    if (files.length) {
      validateAndSetFile(files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Check file type
    const fileType = file.name.split(".").pop()?.toLowerCase() || "";
    const acceptedTypes = acceptedFileTypes
      .split(",")
      .map((type) => type.trim().replace(".", ""));
    
    if (!acceptedTypes.includes(fileType)) {
      toast.error(`Invalid file type. Please upload ${acceptedFileTypes} files.`);
      return;
    }

    // Check file size
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > maxFileSizeMB) {
      toast.error(`File size exceeds ${maxFileSizeMB}MB limit.`);
      return;
    }

    setSelectedFile(file);
    onFileSelect(file);
    toast.success("File uploaded successfully!");
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="glassmorphism p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{subtitle}</p>

      {selectedFile ? (
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-primary h-5 w-5" />
              <div>
                <p className="font-medium truncate max-w-[180px] sm:max-w-xs">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClearFile}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/20 hover:border-muted-foreground/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="rounded-full bg-secondary/80 p-3">
              <FileUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">
                Drag & drop or <span className="text-primary">browse files</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Accepted file types: {acceptedFileTypes}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Maximum file size: {maxFileSizeMB}MB
              </p>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept={acceptedFileTypes}
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
