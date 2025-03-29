
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/shared/FileUpload";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const PlacementAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleAnalyze = () => {
    if (!file) {
      toast.error("Please upload a CSV file first.");
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast("Add ML models to analyze.", {
        description: "This is a frontend-only application. Add ML models for actual analysis.",
      });
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
          Placement Data Analysis
        </h1>
        <p className="text-muted-foreground">
          Upload placement records CSV to visualize trends and generate insights.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <FileUpload
            title="Upload Placement Data"
            subtitle="Upload CSV files containing placement records"
            acceptedFileTypes=".csv"
            maxFileSizeMB={10}
            onFileSelect={handleFileSelect}
          />

          <Button 
            onClick={handleAnalyze}
            disabled={!file || isProcessing}
            className="w-full"
          >
            {isProcessing ? "Processing..." : "Analyze Placement Data"}
          </Button>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              This is a frontend-only application. Backend analysis models need to be integrated
              for actual data processing and visualization functionality.
            </AlertDescription>
          </Alert>
        </div>

        <div className="glassmorphism rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Analysis Results</h3>
          
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-muted-foreground/70" />
            </div>
            <h4 className="text-lg font-medium mb-2">No Analysis Available</h4>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Upload a CSV file and click "Analyze Placement Data" to generate insights. 
              Backend analysis models need to be integrated for actual analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementAnalysis;
