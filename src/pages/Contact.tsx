
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Mail, MapPin, Phone } from "lucide-react";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4 page-transition">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                    <p>MS Palya, Jamia Masjid, Bangalore</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-500 mr-3" />
                    <p>+91 1234567890</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-500 mr-3" />
                    <p>contact@srtraders.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/CKfbad4wbaBF9bQu7"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 hover:text-[#D4AF37] transition-all duration-300"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
              </a>
            </div>

            {/* Map Section */}
            <div className="glass-card p-2 rounded-xl h-[500px]">
              <Map />
            </div>
          </div>
        </div>
      </main>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default Contact;
