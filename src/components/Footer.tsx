
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-400 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#D4AF37]">SR Traders</h3>
            <p className="text-blue-100/90">
              Your trusted partner for quality products and exceptional service.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-blue-100/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link
                to="/products"
                className="block text-blue-100/80 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="block text-blue-100/80 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-blue-100/90">
                <MapPin className="mr-2 h-4 w-4" />
                MS Palya, Jamia Masjid, Bangalore
              </p>
              <p className="flex items-center text-blue-100/90">
                <Phone className="mr-2 h-4 w-4" />
                +91 9632777768 / 7892530382
              </p>
              <p className="flex items-center text-blue-100/90">
                <Mail className="mr-2 h-4 w-4" />
                SRTRDRSBSNS92@GMAIL.COM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-500/30 text-center text-blue-100/80">
          <p>&copy; {new Date().getFullYear()} SR Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
