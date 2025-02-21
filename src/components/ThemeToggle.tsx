
import { Moon, Sun, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
      <Link
        to="/"
        className={`p-2.5 rounded-lg transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:bg-gray-700' 
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        <Home className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-800'}`} />
      </Link>
      
      <button
        onClick={toggleTheme}
        className={`p-2.5 rounded-lg transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:bg-gray-700' 
            : 'bg-white hover:bg-gray-100'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-white" />
        ) : (
          <Moon className="w-5 h-5 text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
