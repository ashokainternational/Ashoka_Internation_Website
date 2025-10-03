
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-ashoka-blue mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-ashoka-dark mb-4">Page Not Found</h2>
        <p className="text-ashoka-gray mb-8">
          The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
        </p>
        <Button className="bg-ashoka-blue hover:bg-ashoka-dark text-white" asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
