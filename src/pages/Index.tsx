
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Star, Package, Truck, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-gold-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to SR Traders
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Your trusted partner for quality products and exceptional service in
            Bangalore
          </p>
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors animate-fade-in"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose SR Traders?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Products",
                description:
                  "We source only the finest products for our customers.",
              },
              {
                title: "Fast Delivery",
                description:
                  "Quick and reliable delivery service across Bangalore.",
              },
              {
                title: "Customer Support",
                description:
                  "24/7 customer support to assist you with your needs.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-scale"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gold-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-primary mb-4" />,
                title: "Choose Products",
                description: "Browse our premium selection of quality products.",
              },
              {
                icon: <Package className="h-8 w-8 text-primary mb-4" />,
                title: "Place Order",
                description: "Easy ordering via WhatsApp with instant confirmation.",
              },
              {
                icon: <Truck className="h-8 w-8 text-primary mb-4" />,
                title: "Fast Delivery",
                description: "Quick delivery to your doorstep in Bangalore.",
              },
              {
                icon: <Phone className="h-8 w-8 text-primary mb-4" />,
                title: "Support",
                description: "24/7 customer support for any queries.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "500+", label: "Products Delivered" },
              { number: "50+", label: "Product Categories" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gold-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Regular Customer",
                comment: "Excellent quality products and prompt delivery. Very satisfied with their service.",
              },
              {
                name: "Priya Sharma",
                role: "Business Owner",
                comment: "Best wholesale supplier in Bangalore. Their products are always in high demand.",
              },
              {
                name: "Mohammed Ali",
                role: "Retailer",
                comment: "Great customer service and competitive prices. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gold-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest products, offers, and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary flex-grow max-w-md"
            />
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our wide range of products and experience exceptional service.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default Index;
