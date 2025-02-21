
import { Mail, MessageCircle, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingContact = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
      <button
        onClick={() => setIsDark(!isDark)}
        className={`p-3 rounded-full transition-all shadow-lg hover:scale-110 transform duration-200 ${
          isDark 
            ? 'bg-gray-800 text-white hover:bg-gray-700' 
            : 'bg-white text-black hover:bg-gray-100'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>
      <a
        href="https://wa.me/1234567890?text=Hello%20SR%20Traders%2C%20I%20am%20interested%20in%20your%20products.%20Location%3A%20MS%20Palya%20Jamia%20Masjid%2C%20Bangalore"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-lg hover:scale-110 transform duration-200"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="mailto:contact@srtraders.com"
        className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:scale-110 transform duration-200"
        aria-label="Send email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
