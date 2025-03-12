
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products"
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
      {/* Modern background pattern with green hue */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=20')] bg-fixed opacity-[0.02] -z-50" />
      
      {/* Subtle grid pattern with green tint */}
      <div className="fixed inset-0 bg-grid-slate-200 bg-[length:20px_20px] opacity-[0.15] -z-40" />
      
      {/* Background gradient overlay with green hue */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-green-50/20 to-lime-50/10 -z-30" />
      
      {/* Animated green orbs */}
      <div className="fixed top-1/4 right-1/3 w-96 h-96 rounded-full bg-green-100/30 blur-3xl -z-20 animate-pulse-slow" />
      <div className="fixed bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-lime-100/20 blur-3xl -z-20 animate-pulse-slow animation-delay-700" />
      
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
}

export default Index;
