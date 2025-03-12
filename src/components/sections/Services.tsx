
import { AnimatedCard } from "../ui/AnimatedCard";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";

export function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Modern background elements with teal hue */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/50 to-white -z-20" />
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=30')] opacity-[0.03] mix-blend-overlay -z-20" />
      
      {/* Animated background shapes with teal/cyan colors */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute top-2/3 left-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl -z-10 animate-pulse-slow animation-delay-500" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl -z-10 animate-pulse-slow animation-delay-700" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedCard>
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden border border-gray-100 shadow-xl bg-gradient-to-tr from-white to-teal-50">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Insurance services"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-40 h-40 bg-teal-100 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/4 -left-10 z-10">
                  <AnimatedCard direction="left" delay={300}>
                    <GlassCard className="px-6 py-4 max-w-xs shadow-lg">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full p-2">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Enterprise Security</p>
                          <p className="text-xs text-gray-500">SOC 2 Type II Compliant</p>
                        </div>
                      </div>
                    </GlassCard>
                  </AnimatedCard>
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="order-1 lg:order-2">
            <AnimatedCard direction="right">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-200 text-blue-800 font-medium text-sm mb-4">
                Resources
              </div>
            </AnimatedCard>
            
            <AnimatedCard direction="right" delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-cyan-600">
                Specialized Services for Insurance Leaders
              </h2>
            </AnimatedCard>
            
            <AnimatedCard direction="right" delay={400}>
              <p className="text-lg text-gray-600 mb-8">
                We partner with industry leaders to provide tailored solutions that address the unique challenges faced by insurance companies.
              </p>
            </AnimatedCard>
            
            <AnimatedCard direction="right" delay={600}>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Claims Processing Automation",
                    description: "Streamline claims with AI-powered document processing and validation."
                  },
                  {
                    title: "Risk Assessment Tools",
                    description: "Advanced analytics for accurate underwriting and risk evaluation."
                  },
                  {
                    title: "Customer Experience Platforms",
                    description: "Enhance client satisfaction with intuitive self-service portals."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-100 to-cyan-200 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
            
            <AnimatedCard direction="right" delay={800}>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">Read More</Button>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
