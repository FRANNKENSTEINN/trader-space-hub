
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
                <p>We are committed to delivering your orders promptly and securely:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Free delivery within Bangalore city limits</li>
                  <li>Same-day delivery for orders placed before 2 PM</li>
                  <li>Next-day delivery for orders placed after 2 PM</li>
                  <li>Delivery tracking available via WhatsApp</li>
                  <li>Special handling for bulk orders</li>
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
                  <li>7-day exchange window from delivery date</li>
                  <li>Product must be unused and in original packaging</li>
                  <li>Exchange subject to stock availability</li>
                  <li>Free pickup for exchange items</li>
                  <li>Quality check required before exchange approval</li>
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
                <p>Our refund process is designed to be fair and transparent:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full refunds available within 7 days of delivery</li>
                  <li>Refund processed within 3-5 business days</li>
                  <li>Original payment method will be refunded</li>
                  <li>Damaged or defective items eligible for immediate refund</li>
                  <li>Return shipping costs covered for defective items</li>
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
