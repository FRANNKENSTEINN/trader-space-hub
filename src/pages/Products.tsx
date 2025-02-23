
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

const products = [
  {
    id: 1,
    name: "Cotton Waste",
    description: "High-quality cotton waste material with mixed colors.",
    price: "₹Contact for Price",
    image: "/lovable-uploads/3303f777-99f6-4300-94f6-6803388432c9.png",
  },
  {
    id: 2,
    name: "Baniyan Waste",
    description: "Premium baniyan waste material in vibrant colors.",
    price: "₹Contact for Price",
    image: "/lovable-uploads/ee9dcde6-e402-468c-9117-d0fc9dc2169f.png",
  },
  {
    id: 3,
    name: "Packed Waste (Cotton and Baniyan)",
    description: "Professionally packed cotton and baniyan waste material.",
    price: "₹Contact for Price",
    image: "/lovable-uploads/bb9597cf-5186-4922-9603-56bbba64fdd7.png",
  },
  {
    id: 4,
    name: "Bulk",
    description: "Large quantity packages available for bulk orders.",
    price: "₹Contact for Price",
    image: "/lovable-uploads/e14105a7-0390-4b18-89f5-7d4d36dcb993.png", // Updated with first new bulk image
  },
  {
    id: 5,
    name: "Cloth Waste",
    description: "Mixed cloth waste material suitable for various applications.",
    price: "₹Contact for Price",
    image: "/lovable-uploads/3303f777-99f6-4300-94f6-6803388432c9.png",
  },
  {
    id: 6,
    name: "White Textured Waste",
    description: "Premium white textured waste material for specific needs.",
    price: "₹Contact for Price",
    image: "/lovable-uploads/ee9dcde6-e402-468c-9117-d0fc9dc2169f.png",
  }
];

const Products = () => {
  const createWhatsAppLink = (product: typeof products[0]) => {
    const message = `Hello SR Traders, I am interested in ${product.name}. Location: MS Palya Jamia Masjid, Bangalore`;
    return `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-xl overflow-hidden hover-scale"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
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
