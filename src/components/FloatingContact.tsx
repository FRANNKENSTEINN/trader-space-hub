
import { Mail, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
      <a
        href="https://wa.me/1234567890?text=Hello%20SR%20Traders%2C%20I%20am%20interested%20in%20your%20products.%20Location%3A%20MS%20Palya%20Jamia%20Masjid%2C%20Bangalore"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 md:p-2 sm:p-1.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-lg hover:scale-110 transform duration-200"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />
      </a>
      <a
        href="mailto:contact@srtraders.com"
        className="p-3 md:p-2 sm:p-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:scale-110 transform duration-200"
        aria-label="Send email"
      >
        <Mail className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4" />
      </a>
    </div>
  );
};

export default FloatingContact;
