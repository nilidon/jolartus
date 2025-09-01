"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled)
    }
  }, [isScrolled])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        isScrolled ? "backdrop-blur-md bg-cream/90 border-b border-sand" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-xs text-stone uppercase tracking-wider">NEW YORK</span>
            <span className="font-serif text-2xl font-semibold text-ink">Jolart US</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection("about")}
              className="text-stone hover:text-ink transition-colors focus:outline-none focus:text-gold"
              aria-label="Go to About section"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-stone hover:text-ink transition-colors focus:outline-none focus:text-gold"
              aria-label="Go to Services section"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-stone hover:text-ink transition-colors focus:outline-none focus:text-gold"
              aria-label="Go to Gallery section"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-stone hover:text-ink transition-colors focus:outline-none focus:text-gold"
              aria-label="Go to Contact section"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gold hover:bg-gold-hover text-white gold-glow transition-all duration-300 enhanced-button-glow"
            aria-label="Get a free quote - contact us"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </header>
  )
}
