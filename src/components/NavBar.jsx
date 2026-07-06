

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },

]

export const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    };

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className=" app-container  flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span
            className="relative z-10"
          >
            <span className="text-glow text-foreground"> ZER0 </span>{" "}
            Portfilio
          </span>

        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((items, key) => (
            <a key={key} href={items.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 ">
              {items.name}
            </a>
          ))}
        </div>

        {/* {Mobile Menu} */}
        <button

          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}

        </button>

        {createPortal(
          <div className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}>
            <div className="flex flex-col space-y-8 text-xl items-center">
              {navItems.map((items, key) => (
                <a key={key} href={items.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {items.name}
                </a>
              ))}
            </div>
          </div>,
          document.body
        )}

      </div>
    </nav>
  )
}