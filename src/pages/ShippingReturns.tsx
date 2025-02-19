
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Truck, RefreshCcw, BadgeIndianRupee } from "lucide-react";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Shipping & Returns</h1>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Shipping Policy */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Truck className="h-8 w-8 text-blue-500 mr-4" />
                <h2 className="text-2xl font-semibold">Shipping Policy</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We strive to make your delivery experience convenient and reliable:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complimentary delivery service within Bangalore city limits</li>
                  <li>Same-day delivery for orders placed before 2 PM</li>
                  <li>Next-day delivery for orders placed after 2 PM</li>
                  <li>Delivery status updates via SMS or email</li>
                  <li>Special arrangements available for bulk orders</li>
                </ul>
              </div>
            </div>

            {/* Exchange Policy */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <RefreshCcw className="h-8 w-8 text-blue-500 mr-4" />
                <h2 className="text-2xl font-semibold">Exchange Policy</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We want you to be completely satisfied with your purchase:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hassle-free exchanges within 7 days of delivery</li>
                  <li>Simply ensure the product is unused and in original packaging</li>
                  <li>Our team will help you find the right alternative</li>
                  <li>Complimentary pickup service for exchanges</li>
                  <li>Quick processing of exchange requests</li>
                </ul>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <BadgeIndianRupee className="h-8 w-8 text-blue-500 mr-4" />
                <h2 className="text-2xl font-semibold">Refund Policy</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Our refund process is simple and straightforward:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refund requests welcome within 7 days of delivery</li>
                  <li>Quick processing time of 3-5 business days</li>
                  <li>Refunds issued to original payment method</li>
                  <li>Our team is here to assist with any questions</li>
                  <li>Clear communication throughout the process</li>
                </ul>
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

export default ShippingReturns;
