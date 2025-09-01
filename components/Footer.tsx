import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sand border-t border-stone/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl font-semibold text-ink">Jolart US</span>
            <span className="text-xs text-stone uppercase tracking-wider">NEW YORK</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/jolartus/"
              className="text-stone hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/joland-pepushaj-614688376/"
              className="text-stone hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-stone">© {currentYear} Jolart US. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
