
import { useEffect, useRef, useState } from "react";
import { GlassCard } from "../ui/GlassCard";
import { Brain, Code, Settings } from "lucide-react";
import { AnimatedCard } from "../ui/AnimatedCard";

const products = [
  {
    title: "AI Agents",
    description: "Intelligent automation with customizable AI agents that learn from your business processes.",
    icon: Brain,
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    features: [
      "Natural language processing",
      "Workflow automation",
      "Data analysis and insights",
      "Custom training capabilities"
    ]
  },
  {
    title: "Low Code Tools",
    description: "Build powerful applications without extensive programming knowledge.",
    icon: Code,
    color: "bg-gradient-to-br from-saas-500 to-cyan-500",
    features: [
      "Drag-and-drop interface",
      "Pre-built components",
      "Integration capabilities",
      "Responsive design templates"
    ]
  },
  {
    title: "Config Pages",
    description: "Streamline setup and configuration with intuitive, user-friendly interfaces.",
    icon: Settings,
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    features: [
      "Customizable settings",
      "User role management",
      "Configuration wizards",
      "Real-time validation"
    ]
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent -z-10" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-blue-50 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedCard>
            <div className="inline-block px-4 py-1.5 rounded-full bg-saas-100 text-saas-800 font-medium text-sm mb-4">
              Our Products
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {products.map((product, index) => (
            <AnimatedCard key={product.title} delay={index * 200 + 500}>
              <GlassCard className="h-full" hoverEffect>
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 ${product.color}`}>
                    <product.icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg className="h-5 w-5 text-saas-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
