
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

const products = [
  {
    id: 1,
    name: "Premium Product 1",
    description: "High-quality product with exceptional features.",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: 2,
    name: "Premium Product 2",
    description: "Superior quality with great value.",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
  },
  {
    id: 3,
    name: "Premium Product 3",
    description: "Exclusive product with premium features.",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80",
  },
  {
    id: 4,
    name: "Premium Product 4",
    description: "Top-tier product for discerning customers.",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&q=80",
  },
  {
    id: 5,
    name: "Premium Product 5",
    description: "Luxury product with outstanding quality.",
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
];

const Products = () => {
  const createWhatsAppLink = (product: typeof products[0]) => {
    const message = `Hello SR Traders, I am interested in ${product.name} (${product.price}). Location: MS Palya Jamia Masjid, Bangalore`;
    return `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-xl overflow-hidden hover-scale"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
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
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
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
