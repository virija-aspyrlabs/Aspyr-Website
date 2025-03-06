
import { Button } from "../ui/Button";
import { AnimatedCard } from "../ui/AnimatedCard";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-20 min-h-[90vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent -z-10" />
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-slate-200/60 bg-[length:40px_40px] -z-10 opacity-20" />
      
      {/* Background blur effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-300/30 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl -z-10 animate-pulse-slow animation-delay-500" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className={`space-y-8 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
            <AnimatedCard delay={100} animateOnScroll={false}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-4">
                Accelerate Your Development Process
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={300} animateOnScroll={false}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Modern Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-lime-500">Faster Development</span>
              </h1>
            </AnimatedCard>
            
            <AnimatedCard delay={500} animateOnScroll={false}>
              <p className="text-lg text-gray-600 md:text-xl max-w-xl">
                Empower your team with cutting-edge AI agents, low code tools, and config pages
                designed to streamline your workflow and boost productivity.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={700} animateOnScroll={false}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">Get Started</Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-green-200 text-green-700 hover:bg-green-50"
                >
                  Book a Demo
                </Button>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={900} animateOnScroll={false}>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                        alt="User avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-gray-900">500+</span> happy clients
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="relative">
            <AnimatedCard 
              direction="right" 
              delay={500} 
              animateOnScroll={false}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-green-200/50 to-teal-100/30 transform rotate-2 scale-105 blur-sm" />
                <div className="relative bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden">
                  <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center space-x-1 px-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="p-4">
                    <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                        alt="Dashboard preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-4 bg-gray-100 rounded-full w-3/4" />
                      <div className="h-4 bg-gray-100 rounded-full w-1/2" />
                      <div className="h-4 bg-gray-100 rounded-full w-5/6" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
            
            <div className="absolute -bottom-10 -left-10 transform rotate-6 scale-[0.85] z-0 hidden lg:block">
              <AnimatedCard 
                direction="left" 
                delay={800} 
                animateOnScroll={false}
              >
                <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="w-64 space-y-3">
                    <div className="h-4 bg-green-100 rounded-full w-3/4" />
                    <div className="h-4 bg-green-100 rounded-full w-full" />
                    <div className="h-4 bg-green-100 rounded-full w-2/3" />
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
