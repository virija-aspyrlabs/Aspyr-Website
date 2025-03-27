import React, { useState } from "react";
import { GlassCard } from "../ui/GlassCard";
import { AnimatedCard } from "../ui/AnimatedCard";

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string;
}

const ProductCard: React.FC<CardProps> = ({ id, title, description, imageUrl, fullDescription }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-80 h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatedCard className="w-full h-full">
          <div className="w-full h-3/4 bg-cover bg-center rounded-t-2xl" style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className={`absolute bottom-0 w-full bg-white rounded-b-2xl transition-transform duration-300 ease-in-out ${isHovered ? '-translate-y-12' : ''}`}>
            <div className="p-5 pb-0">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <div className={`flex justify-between p-5 transition-opacity duration-300 mt-2 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              {/* Know More Button */}
              <button
                className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
                onClick={() => setIsModalOpen(true)}
              >
                Know More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Contact Us Button */}
              <button className="px-5 py-2 border border-blue-500 text-blue-500 font-semibold rounded-lg text-sm hover:bg-blue-500 hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </AnimatedCard>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <GlassCard className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full flex animate-slide-in" >
            <div className="w-3/5 bg-cover bg-center rounded-l-2xl" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="w-2/5 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button className="text-gray-500 hover:text-gray-700 text-2xl" onClick={() => setIsModalOpen(false)}>
                  &times;
                </button>
              </div>
              <div className="flex-grow overflow-y-auto">
                <p className="text-gray-600">{fullDescription}</p>
              </div>
              <div className="mt-6">
                <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors" onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </>
  );
};

export function Products() {
  const products = [
    {
      id: 1,
      title: "Product Design",
      description: "Custom design solutions for your business needs.",
      imageUrl: "/ai.png",
      fullDescription: "Our product design services offer comprehensive solutions tailored to your specific business requirements. We combine functionality with aesthetics to create products that not only look great but also deliver exceptional user experiences. Our team of experienced designers works closely with you from concept to implementation, ensuring that your vision is realized with precision and creativity."
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building responsive and modern websites.",
      imageUrl: "/data.png",
      fullDescription: "Our web development team creates cutting-edge, responsive websites that work seamlessly across all devices. We focus on user experience, performance, and scalability to deliver websites that not only look beautiful but also function perfectly. Using the latest technologies and frameworks, we build custom solutions that align with your business goals."
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Strategies to boost your online presence.",
      imageUrl: "/auto.png",
      fullDescription: "Our digital marketing services are designed to increase your online visibility and drive meaningful engagement with your target audience. We develop comprehensive strategies that incorporate SEO, content marketing, social media, and paid advertising to create a cohesive approach to your digital presence."
    },
    {
      id: 4,
      title: "Product Design",
      description: "Custom design solutions for your business needs.",
      imageUrl: "/enterprise.png",
      fullDescription: "Our product design services offer comprehensive solutions tailored to your specific business requirements. We combine functionality with aesthetics to create products that not only look great but also deliver exceptional user experiences. Our team of experienced designers works closely with you from concept to implementation, ensuring that your vision is realized with precision and creativity."
    },
    // {
    //   id: 5,
    //   title: "Web Development",
    //   description: "Building responsive and modern websites.",
    //   imageUrl: "/api/placeholder/350/300",
    //   fullDescription: "Our web development team creates cutting-edge, responsive websites that work seamlessly across all devices. We focus on user experience, performance, and scalability to deliver websites that not only look beautiful but also function perfectly. Using the latest technologies and frameworks, we build custom solutions that align with your business goals."
    // },
    // {
    //   id: 6,
    //   title: "Digital Marketing",
    //   description: "Strategies to boost your online presence.",
    //   imageUrl: "/api/placeholder/350/300",
    //   fullDescription: "Our digital marketing services are designed to increase your online visibility and drive meaningful engagement with your target audience. We develop comprehensive strategies that incorporate SEO, content marketing, social media, and paid advertising to create a cohesive approach to your digital presence."
    // }
  ];

  return (
    // <div className="relative">
    <div className="overflow-x-auto  bg-blue-50">

      {/* Background Gradients */}
      {/* <div className=" top-0 inset-x-0 h-40 bg-gradient-to-b from-green-50 to-transparent -z-10" />
      <div className=" bottom-0 inset-x-0 h-40 bg-gradient-to-t from-green-50 to-transparent -z-10" /> */}
      <div className="container mx-auto px-2 lg:px-4 ">
        {/* <div className="container mx-auto px-4 lg:px-8"> */}
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <AnimatedCard>
            <div className="inline-block px-4 py-1.5 rounded-full bg-saas-100 mt-16 text-saas-800 font-medium text-sm mb-4">
              Our Services
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Accelerate Development with Our Solutions
            </h2>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <p className="text-xl text-gray-600">
              Powerful tools designed to streamline your workflow and boost productivity.
            </p>
          </AnimatedCard>
        </div>

        {/* Product Cards with Equal Spacing */}
        <div className="grid grid-cols-4 gap-4 p-4 ">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              fullDescription={product.fullDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
