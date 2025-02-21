
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import ThemeToggle from "../components/ThemeToggle";
import { Star, Package, Truck, Phone, Cloud } from "lucide-react";
import { useEffect, useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5;
        heroRef.current.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-black dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[80vh] pt-24 pb-12 px-4 overflow-hidden animate-bg-fade"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay with fade effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-white/50 dark:from-black/90 dark:via-transparent dark:to-black/50 backdrop-blur-sm transition-colors duration-300" />
        
        {/* Animated Clouds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-cloud absolute top-[10%] opacity-20">
            <Cloud className="w-32 h-32 text-white" />
          </div>
          <div className="animate-cloud-slow absolute top-[30%] opacity-15">
            <Cloud className="w-48 h-48 text-white" />
          </div>
          <div className="animate-cloud-slower absolute top-[60%] opacity-10">
            <Cloud className="w-40 h-40 text-white" />
          </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-[#D4AF37] to-white bg-300% animate-gradient">
              Welcome to SR Traders
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-on-scroll opacity-0">
              Your trusted partner for quality products and exceptional service in
              Bangalore
            </p>
            <div className="space-x-4 animate-on-scroll opacity-0">
              <Link
                to="/products"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:text-[#D4AF37] transition-all duration-300 font-semibold hover:bg-opacity-90 transform hover:-translate-y-1 dark:bg-black dark:text-white"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 font-semibold transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient Transition */}
        <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent transition-colors duration-300" />
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
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
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-blue-500 mb-4" />,
                title: "Choose Products",
                description: "Browse our premium selection of quality products.",
              },
              {
                icon: <Package className="h-8 w-8 text-blue-500 mb-4" />,
                title: "Place Order",
                description: "Easy ordering via WhatsApp with instant confirmation.",
              },
              {
                icon: <Truck className="h-8 w-8 text-blue-500 mb-4" />,
                title: "Fast Delivery",
                description: "Quick delivery to your doorstep in Bangalore.",
              },
              {
                icon: <Phone className="h-8 w-8 text-blue-500 mb-4" />,
                title: "Support",
                description: "24/7 customer support for any queries.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "500+", label: "Products Delivered" },
              { number: "50+", label: "Product Categories" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h2>
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
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover our wide range of products and experience exceptional service.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
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
