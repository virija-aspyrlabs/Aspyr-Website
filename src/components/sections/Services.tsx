import { useState } from "react";
import { AnimatedCard } from "../ui/AnimatedCard";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Claims Processing Automation",
    description: "Streamline claims with AI-powered document processing and validation."
  },
  {
    image: "https://images.unsplash.com/photo-1521790369902-636116e6adce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Risk Assessment Tools",
    description: "Advanced analytics for accurate underwriting and risk evaluation."
  },
  {
    image: "https://images.unsplash.com/photo-1605902711955-41ee7e8d5d99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Customer Experience Platforms",
    description: "Enhance client satisfaction with intuitive self-service portals."
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Fraud Detection AI",
    description: "Utilize machine learning to detect fraudulent activities in real-time."
  }
];

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent -z-10" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-blue-50 to-transparent -z-10" />
      {/* <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-blue-100 -z-10" /> */}


      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between relative">
        {/* Chevron Left - Hidden on first slide */}
        {currentIndex > 0 && (
          <button onClick={prevSlide} className="absolute left-0 z-10 bg-white shadow-lg p-4 rounded-full text-blue-600 hover:bg-blue-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 19.5-7.5-7.5 7.5-7.5" />
            </svg>
          </button>
        )}

        {/* Slide Content */}
        <div className="relative w-full max-w-5xl flex items-center gap-12">
          {/* Image on Left */}
          <AnimatedCard>
            <div className="relative z-10 rounded-xl overflow-hidden border border-gray-100 shadow-xl bg-gradient-to-tr from-white to-blue-50">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </AnimatedCard>

          {/* Text Content on Right */}
          <div className="max-w-md">
            <AnimatedCard>
              <div className="inline-block px-4 py-1.5 rounded-full bg-saas-100 text-saas-800 font-medium text-sm mb-4">
                Resources
              </div>
            </AnimatedCard>
            <AnimatedCard direction="right">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                {slides[currentIndex].title}
              </h2>
            </AnimatedCard>
            <AnimatedCard direction="right" delay={200}>
              <p className="text-lg text-gray-600 mt-4">{slides[currentIndex].description}</p>
            </AnimatedCard>
            <AnimatedCard direction="right" delay={400}>
              <Button size="lg" className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                Read More
              </Button>
            </AnimatedCard>
          </div>
        </div>

        {/* Chevron Right - Hidden on last slide */}
        {currentIndex < slides.length - 1 && (
          <button onClick={nextSlide} className="absolute right-0 z-10 bg-white shadow-lg p-4 rounded-full text-blue-600 hover:bg-blue-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}