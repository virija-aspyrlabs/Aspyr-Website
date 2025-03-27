
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
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent -z-10" /> */}

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-slate-200/60 bg-[length:40px_40px] -z-10 opacity-20" />

      {/* Background blur effect */}
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl -z-10 animate-pulse-slow animation-delay-500" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E1F1F6] to-[#DFF5E3] -z-10" />

      <div className="max-w-8xl mb-36 m-16 ml-48  px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center ">
          <div className={`space-y-8 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
            <AnimatedCard delay={100} animateOnScroll={false}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4 mt-28">
                Accelerate Your Development Process
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300} animateOnScroll={false}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Modern Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3a9d42] to-[#a4d65e]">
                  Faster Development
                </span>

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
                <a href="#contact">
                  {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Contact Us
                  </Button> */}
                  <div className="flex items-center justify-center p-4">
                    <button className="relative group inline-flex items-center 
        bg-blue-600 text-white font-semibold py-3 px-6 rounded-sm 
        shadow-md border border-blue-600 
        transition-all duration-300 ease-in-out
        hover:bg-blue-700
        transform hover:translate-x-0.5 w-48">

                      {/* Button Text */}
                      <span className="z-10 relative pr-8">
                        Contact Us
                      </span>

                      {/* Green Slanted Strip (Slanting Right) */}
                      <div className="absolute right-[10%] top-[-10%] bottom-[-10%] 
          transform -skew-x-12 origin-right
          group-hover:translate-x-1
          transition-transform duration-300">
                        <div className="h-[100%] w-12 bg-green-500 
            flex items-center justify-center 
            relative -mr-2">
                          <span className="text-white text-2xl transform rotate-0">
                            ➝
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </a>
                {/* <Button 
      variant="outline" 
      size="lg"
      className="border-green-200 text-green-700 hover:bg-green-50"
    >
      Book a Demo
    </Button> */}
              </div>
            </AnimatedCard>

            {/* <AnimatedCard delay={900} animateOnScroll={false}>
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
            </AnimatedCard> */}
          </div>

          <div className="relative">
            {/* <AnimatedCard
              direction="right"
              delay={500}
              animateOnScroll={false}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-200/50 to-teal-100/30 transform rotate-2 scale-105 blur-sm" />
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
            </AnimatedCard> */}

            <div className="absolute -bottom-10 -left-10 transform rotate-6 scale-[0.85] z-0 hidden lg:block">
              {/* <AnimatedCard
                direction="left"
                delay={800}
                animateOnScroll={false}
              >
                <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="w-64 space-y-3">
                    <div className="h-4 bg-blue-100 rounded-full w-3/4" />
                    <div className="h-4 bg-blue-100 rounded-full w-full" />
                    <div className="h-4 bg-blue-100 rounded-full w-2/3" />
                  </div>
                </div>
              </AnimatedCard> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="relative overflow-hidden pt-24 pb-20 min-h-[90vh] flex items-center">
    //   {/* Background gradient */}
    //   <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent -z-10" />

    //   {/* Background grid */}
    //   <div className="absolute inset-0 bg-grid-slate-200/60 bg-[length:40px_40px] -z-10 opacity-20" />

    //   {/* Background blur effect */}
    //   <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl -z-10 animate-pulse-slow" />
    //   <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl -z-10 animate-pulse-slow animation-delay-500" />

    //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    //       <div className={`space-y-8 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
    //         <AnimatedCard delay={100} animateOnScroll={false}>
    //           <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
    //             Accelerate Your Development Process
    //           </div>
    //         </AnimatedCard>

    //         <AnimatedCard delay={300} animateOnScroll={false}>
    //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
    //             Modern Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-[#00c0ff]">Faster Development</span>
    //           </h1>
    //         </AnimatedCard>

    //         <AnimatedCard delay={500} animateOnScroll={false}>
    //           <p className="text-lg text-gray-600 md:text-xl max-w-xl">
    //             Empower your team with cutting-edge AI agents, low code tools, and config pages
    //             designed to streamline your workflow and boost productivity.
    //           </p>
    //         </AnimatedCard>

    //         <AnimatedCard delay={700} animateOnScroll={false}>
    //           <div className="flex flex-col sm:flex-row gap-4 pt-2">
    //             <a href="#contact">
    //               <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
    //                 Contact Us
    //               </Button>
    //             </a>
    //           </div>
    //         </AnimatedCard>
    //       </div>

    //       <div className="relative">
    //         <AnimatedCard
    //           direction="right"
    //           delay={500}
    //           animateOnScroll={false}
    //           className="relative z-10"
    //         >
    //           <div className="relative">
    //             <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-200/50 to-teal-100/30 transform rotate-2 scale-105 blur-sm" />
    //             <div className="relative bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden">
    //               <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center space-x-1 px-4">
    //                 <div className="w-3 h-3 rounded-full bg-red-400" />
    //                 <div className="w-3 h-3 rounded-full bg-yellow-400" />
    //                 <div className="w-3 h-3 rounded-full bg-green-400" />
    //               </div>
    //               <div className="p-4">
    //                 <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
    //                   <img
    //                     src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    //                     alt="Dashboard preview"
    //                     className="w-full h-full object-cover"
    //                   />
    //                 </div>
    //                 <div className="mt-4 space-y-2">
    //                   <div className="h-4 bg-gray-100 rounded-full w-3/4" />
    //                   <div className="h-4 bg-gray-100 rounded-full w-1/2" />
    //                   <div className="h-4 bg-gray-100 rounded-full w-5/6" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </AnimatedCard>

    //         <div className="absolute -bottom-10 -left-10 transform rotate-6 scale-[0.85] z-0 hidden lg:block">
    //           <AnimatedCard direction="left" delay={800} animateOnScroll={false}>
    //             <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
    //               <div className="w-64 space-y-3">
    //                 <div className="h-4 bg-blue-100 rounded-full w-3/4" />
    //                 <div className="h-4 bg-blue-100 rounded-full w-full" />
    //                 <div className="h-4 bg-blue-100 rounded-full w-2/3" />
    //               </div>
    //             </div>
    //           </AnimatedCard>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
