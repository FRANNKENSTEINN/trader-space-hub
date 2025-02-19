
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { Building2, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">About SR Traders</h1>
              <p className="text-xl text-gray-600">
                Building trust through quality products and exceptional service since 2010
              </p>
            </div>

            {/* Company Story */}
            <div className="glass-card p-8 rounded-xl mb-12">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-blue-500 mr-4" />
                <h2 className="text-2xl font-semibold">Our Story</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Founded in 2010, SR Traders has grown from a small local business to become
                one of Bangalore's most trusted wholesale suppliers. Our journey began with
                a simple mission: to provide quality products at competitive prices while
                maintaining the highest standards of customer service.
              </p>
              <p className="text-gray-700">
                Today, we serve hundreds of businesses and individual customers across
                Bangalore, building lasting relationships based on trust and reliability.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-blue-500 mr-4" />
                  <h2 className="text-2xl font-semibold">Our Mission</h2>
                </div>
                <p className="text-gray-700">
                  To be the most trusted supplier in Bangalore by consistently delivering
                  quality products and exceptional service to our customers.
                </p>
              </div>
              <div className="glass-card p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-blue-500 mr-4" />
                  <h2 className="text-2xl font-semibold">Our Values</h2>
                </div>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Quality Above All</li>
                  <li>Customer First</li>
                  <li>Integrity & Transparency</li>
                  <li>Reliable Service</li>
                </ul>
              </div>
            </div>

            {/* Team */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-blue-500 mr-4" />
                <h2 className="text-2xl font-semibold">Our Team</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Our dedicated team of professionals works tirelessly to ensure that we
                meet and exceed our customers' expectations. With years of experience in
                the industry, we understand the importance of reliable service and
                maintaining strong relationships with our clients.
              </p>
              <p className="text-gray-700">
                From our sales representatives to our delivery team, every member is
                committed to providing you with the best possible service experience.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default About;
