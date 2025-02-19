
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-100">SR Traders</h3>
            <p className="text-blue-100/90">
              Your trusted partner for quality products and exceptional service.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-100">Quick Links</h3>
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
            <h3 className="text-lg font-semibold text-blue-100">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-blue-100/90">
                <MapPin className="mr-2 h-4 w-4" />
                MS Palya, Jamia Masjid, Bangalore
              </p>
              <p className="flex items-center text-blue-100/90">
                <Phone className="mr-2 h-4 w-4" />
                +91 1234567890
              </p>
              <p className="flex items-center text-blue-100/90">
                <Mail className="mr-2 h-4 w-4" />
                contact@srtraders.com
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
