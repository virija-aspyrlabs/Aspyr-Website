
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Our Solutions", href: "#services" },
  { name: "Resources", href: "#products" },
  // { name: "About", href: "#about" },
  // { name: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-8xl w-full mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="h-10 mr-2 ml-16">
            <img
              src="/lovable-uploads/logo.png"
              alt="Aspyr Logo"
              className="h-full"
            />
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8 mr-10">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            Contact Us
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-in border-t border-gray-100">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 py-2 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
