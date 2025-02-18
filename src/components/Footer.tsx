
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SR Traders</h3>
            <p className="text-gray-600">
              Your trusted partner for quality products and exceptional service.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-primary">
                Home
              </Link>
              <Link
                to="/products"
                className="block text-gray-600 hover:text-primary"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <MapPin className="mr-2 h-4 w-4" />
                MS Palya, Jamia Masjid, Bangalore
              </p>
              <p className="flex items-center text-gray-600">
                <Phone className="mr-2 h-4 w-4" />
                +91 1234567890
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="mr-2 h-4 w-4" />
                contact@srtraders.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} SR Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
