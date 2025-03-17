
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center glass-panel p-12 rounded-lg max-w-md w-full animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-kartify-black-light">
            <AlertTriangle className="w-10 h-10 text-kartify-neon-pink" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-kartify-neon-blue">404</h1>
          <p className="text-xl text-white mb-8">Oops! Page not found</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-kartify-neon-blue text-black font-medium transition-all duration-300 hover:bg-kartify-neon-green"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
