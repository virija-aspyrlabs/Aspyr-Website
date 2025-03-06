
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all elements with the reveal class
    document.querySelectorAll('.reveal:not(.animate-fade-in)').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Cleanup observer on component unmount
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Modern background pattern */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=20')] bg-fixed opacity-[0.02] -z-50" />
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-grid-slate-200 bg-[length:20px_20px] opacity-[0.15] -z-40" />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50/10 to-white -z-30" />
      
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
