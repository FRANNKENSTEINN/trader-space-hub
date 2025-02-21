
import { Moon, Sun, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
      <Link
        to="/"
        className="p-2.5 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <Home className="w-5 h-5 text-white" />
      </Link>
      
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2.5 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-white" />
        ) : (
          <Moon className="w-5 h-5 text-white" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
