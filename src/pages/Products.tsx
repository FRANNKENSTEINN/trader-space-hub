
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cotton Waste",
    description: "High-quality cotton waste material with mixed colors.",
    price: "₹Contact for Price",
    images: [
      "/lovable-uploads/3303f777-99f6-4300-94f6-6803388432c9.png",
      "/lovable-uploads/3ba1189f-5193-4bc4-90d3-445f0a4cd5d4.png"
    ],
  },
  {
    id: 2,
    name: "Baniyan Waste",
    description: "Premium baniyan waste material in vibrant colors.",
    price: "₹Contact for Price",
    images: [
      "/lovable-uploads/ee9dcde6-e402-468c-9117-d0fc9dc2169f.png",
      "/lovable-uploads/f7d4860e-0eb4-4576-b52c-04f88b87e793.png"
    ],
  },
  {
    id: 3,
    name: "Packed Waste (Cotton and Baniyan)",
    description: "Professionally packed cotton and baniyan waste material.",
    price: "₹Contact for Price",
    images: [
      "/lovable-uploads/bb9597cf-5186-4922-9603-56bbba64fdd7.png",
      "/lovable-uploads/24b20ca4-1ef1-488a-aa48-3b2cdd31d440.png"
    ],
  },
  {
    id: 4,
    name: "Bulk",
    description: "Large quantity packages available for bulk orders.",
    price: "₹Contact for Price",
    images: [
      "/lovable-uploads/e82329e9-b71d-4baa-9289-2d4f17429db0.png",
      "/lovable-uploads/e5a51953-82f1-4c78-b29d-1f31de5ea946.png"
    ],
  },
  {
    id: 5,
    name: "Cloth Waste",
    description: "Mixed cloth waste material suitable for various applications.",
    price: "₹Contact for Price",
    images: [
      "/lovable-uploads/d2d04054-8341-4062-8800-e0561e81fad8.png",
      "/lovable-uploads/e3f0ee5b-e582-4abe-8252-659fb4161259.png"
    ],
  },
  {
    id: 6,
    name: "White Textured Waste",
    description: "Premium white textured waste material for specific needs.",
    price: "₹Contact for Price",
    images: [
      "/lovable-uploads/8ea6ccd4-8a6e-4b34-a5f8-de696aedf003.png",
      "/lovable-uploads/c64ce376-adfd-4342-a051-557c9ff63fa9.png"
    ],
  }
];

const Products = () => {
  const [imageIndexes, setImageIndexes] = useState<{ [key: number]: number }>({});

  const handlePrevImage = (productId: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [productId]: prev[productId] === 0 ? 1 : 0
    }));
  };

  const handleNextImage = (productId: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [productId]: prev[productId] === 1 ? 0 : 1
    }));
  };

  const createWhatsAppLink = (product: (typeof products)[0]) => {
    const message = `Hello SR Traders, I am interested in ${product.name}. Location: MS Palya Jamia Masjid, Bangalore`;
    return `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="w-full bg-blue-50 py-2 overflow-hidden mb-8">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-blue-600 font-medium inline-block px-4">
              ⚠️ Product prices may vary based on quality, quantity, and market conditions. Please contact us for the latest pricing information.
            </span>
          </div>
        </div>

        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-xl overflow-hidden hover-scale"
              >
                <div className="relative">
                  {('images' in product) ? (
                    <>
                      <img
                        src={product.images[imageIndexes[product.id] || 0]}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-opacity duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button
                          onClick={() => handlePrevImage(product.id)}
                          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => handleNextImage(product.id)}
                          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <a
                      href={createWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#7C3AED] hover:text-[#D4AF37] transition-all duration-300 shadow-md text-sm font-medium"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Quality Guarantee</h2>
              <p className="text-gray-600">
                We stand behind the quality of our products. Each item is carefully selected
                and inspected to ensure it meets our high standards.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
              <p className="text-gray-600">
                We offer fast and reliable shipping across Bangalore. Most orders are
                delivered within 24-48 hours. For bulk orders or special delivery
                requirements, please contact us directly.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Premium Collection", "Best Sellers", "New Arrivals"].map((category, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <p className="text-gray-600">
                  Explore our selection of carefully curated products.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default Products;
