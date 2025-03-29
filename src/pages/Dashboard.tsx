
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BarChart, ChevronRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Campus Placement Tracker
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Analyze resumes and placement data to make data-driven placement decisions for your institution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glassmorphism overflow-hidden">
          <CardHeader className="pb-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Resume Analysis</CardTitle>
            <CardDescription>
              Upload student resumes and get AI-powered insights and predictions.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-secondary/30 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-1">Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Parse resume content automatically</li>
                <li>• Identify key skills and qualifications</li>
                <li>• Predict job compatibility</li>
                <li>• Generate improvement suggestions</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/resume-analysis" className="w-full">
              <Button className="w-full group">
                Analyze Resumes
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="glassmorphism overflow-hidden">
          <CardHeader className="pb-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Placement Analysis</CardTitle>
            <CardDescription>
              Upload placement data records to generate insights and visualization.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-secondary/30 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-1">Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Visualize placement trends</li>
                <li>• Compare department performance</li>
                <li>• Identify key placement factors</li>
                <li>• Generate custom reports</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/placement-analysis" className="w-full">
              <Button className="w-full group">
                Analyze Placement Data
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
