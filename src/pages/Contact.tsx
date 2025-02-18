
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <MapPin className="mr-3 h-5 w-5 text-primary" />
                    MS Palya, Jamia Masjid, Bangalore
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    +91 1234567890
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    contact@srtraders.com
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Location</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8876544806087!2d77.59747317574714!3d13.047155513508547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b1e918611d%3A0x9c78fefe15c8ee0e!2sMS%20Palya%2C%20Bengaluru%2C%20Karnataka%20560054!5e0!3m2!1sen!2sin!4v1709913357035!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/CKfbad4wbaBF9bQu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Directions
                </a>
              </div>
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
