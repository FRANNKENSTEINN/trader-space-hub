
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const ThemeToggle = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Link
        to="/"
        className="p-2.5 md:p-2 sm:p-1.5 rounded-lg bg-white hover:bg-gray-100 transition-all duration-300"
      >
        <Home className="w-5 h-5 md:w-4 md:h-4 sm:w-3.5 sm:h-3.5 text-gray-800" />
      </Link>
    </div>
  );
};

export default ThemeToggle;
