'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-[600ms] px-10 lg:px-20 ${
        scrolled 
          ? 'py-4 lg:py-6 bg-[#FFFEF9]/95 backdrop-blur-[30px] shadow-sm' 
          : 'py-6 lg:py-10'
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Logo with smooth transition */}
        <Link href="/" className="flex items-center relative z-[1000]">
          {/* Logo for scrolled state */}
          <img 
            src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510164/Transparent_PNG-01_e9sml3.png"
            alt="BEAMAZED"
            className={`h-10 lg:h-12 w-auto absolute top-0 left-0 transition-all duration-500 ${
              scrolled ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Logo for transparent state */}
          <img 
            src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761512188/Transparent_PNG-02_biiug9.png"
            alt="BEAMAZED"
            className={`h-10 lg:h-12 w-auto transition-all duration-500 brightness-0 invert ${
              scrolled ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-[60px]">
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link 
              href="/products"
              className={`text-[10px] tracking-[3px] uppercase transition-colors duration-500 relative after:absolute after:w-0 after:h-[1px] after:bottom-[-5px] after:left-0 after:transition-all hover:after:w-full ${
                scrolled 
                  ? 'text-[#2C2622] opacity-70 hover:opacity-100 after:bg-[#903C0A]' 
                  : 'text-white opacity-90 hover:opacity-100 after:bg-white'
              } ${productsOpen ? 'after:w-full opacity-100' : ''} ${pathname.startsWith('/products') ? 'opacity-100' : ''}`}
            >
              Collection ↓
            </Link>

            {/* Invisible Bridge voor hover continuïteit */}
            {productsOpen && (
              <div className="absolute top-full left-0 w-full h-8" />
            )}

            {/* Dropdown Menu */}
            {productsOpen && (
              <div className="absolute top-full left-0 mt-8 w-[600px] bg-white border border-[#2C2622]/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-0">
                  {/* Column 1 */}
                  <div className="p-6 border-r border-[#2C2622]/10">
                    <div className="mb-4">
                      <h3 className="text-[9px] tracking-[2px] uppercase text-[#903C0A] mb-3">
                        Authentic Structures
                      </h3>
                      <Link 
                        href="/products/authentic-structures"
                        className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2 font-light"
                      >
                        Bamboo Structures & Pavilions →
                      </Link>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-[9px] tracking-[2px] uppercase text-[#903C0A] mb-3">
                        Stretchtent Solutions
                      </h3>
                      <Link 
                        href="/products/stretchtent-solutions"
                        className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2 font-light"
                      >
                        Printed Covers & Sidewalls →
                      </Link>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[9px] tracking-[2px] uppercase text-[#903C0A] mb-3">
                        Glamping Solutions
                      </h3>
                      <Link 
                        href="/products/glamping-solutions"
                        className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2 font-light"
                      >
                        Safari Lodges & Pods →
                      </Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-[9px] tracking-[2px] uppercase text-[#903C0A] mb-3">
                        Furniture Solutions
                      </h3>
                      <Link 
                        href="/products/furniture-solutions"
                        className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2 font-light"
                      >
                        Event & Outdoor Furniture →
                      </Link>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[9px] tracking-[2px] uppercase text-[#903C0A] mb-3">
                        Platform Solutions
                      </h3>
                      <Link 
                        href="/products/platform-solutions"
                        className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2 font-light"
                      >
                        Wooden & Bamboo Platforms →
                      </Link>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#2C2622]/10">
                      <Link 
                        href="/products"
                        className="text-[9px] tracking-[2px] uppercase text-[#903C0A] hover:text-[#2C2622] transition-colors"
                      >
                        View All Products →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <Link
            href="/services"
            className={`text-[10px] tracking-[3px] uppercase transition-colors duration-500 relative after:absolute after:w-0 after:h-[1px] after:bottom-[-5px] after:left-0 after:transition-all hover:after:w-full ${
              scrolled 
                ? 'text-[#2C2622] opacity-70 hover:opacity-100 after:bg-[#903C0A]' 
                : 'text-white opacity-90 hover:opacity-100 after:bg-white'
            } ${pathname === '/services' ? 'opacity-100 after:w-full' : ''}`}
          >
            Services
          </Link>

          {/* Projects */}
          <Link
            href="/projects"
            className={`text-[10px] tracking-[3px] uppercase transition-colors duration-500 relative after:absolute after:w-0 after:h-[1px] after:bottom-[-5px] after:left-0 after:transition-all hover:after:w-full ${
              scrolled 
                ? 'text-[#2C2622] opacity-70 hover:opacity-100 after:bg-[#903C0A]' 
                : 'text-white opacity-90 hover:opacity-100 after:bg-white'
            } ${pathname === '/projects' ? 'opacity-100 after:w-full' : ''}`}
          >
            Projects
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`text-[10px] tracking-[3px] uppercase transition-colors duration-500 relative after:absolute after:w-0 after:h-[1px] after:bottom-[-5px] after:left-0 after:transition-all hover:after:w-full ${
              scrolled 
                ? 'text-[#2C2622] opacity-70 hover:opacity-100 after:bg-[#903C0A]' 
                : 'text-white opacity-90 hover:opacity-100 after:bg-white'
            } ${pathname === '/about' ? 'opacity-100 after:w-full' : ''}`}
          >
            About
          </Link>
        </div>
        
        {/* Contact Button */}
        <Link
          href="/contact"
          className={`hidden lg:block text-[10px] tracking-[3px] uppercase transition-all duration-500 px-6 py-3 border ${
            scrolled 
              ? 'text-[#903C0A] border-[#903C0A] hover:bg-[#903C0A] hover:text-white' 
              : 'text-white border-white hover:bg-white hover:text-[#2C2622]'
          }`}
        >
          Contact
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative w-6 h-6 flex flex-col justify-center items-center gap-1.5 z-[1000]"
          aria-label="Toggle menu"
        >
          <span className={`w-full h-[2px] transition-all duration-300 ${
            scrolled ? 'bg-[#2C2622]' : 'bg-white'
          } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-[2px] transition-all duration-300 ${
            scrolled ? 'bg-[#2C2622]' : 'bg-white'
          } ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-[2px] transition-all duration-300 ${
            scrolled ? 'bg-[#2C2622]' : 'bg-white'
          } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[#2C2622]/10 shadow-xl">
          <div className="px-10 py-8 space-y-6">
            {/* Products */}
            <div>
              <div className="text-[9px] tracking-[2px] uppercase text-[#903C0A] mb-3">
                Collection
              </div>
              <div className="space-y-2 pl-4">
                <Link 
                  href="/products/authentic-structures"
                  className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2"
                >
                  Authentic Structures →
                </Link>
                <Link 
                  href="/products/stretchtent-solutions"
                  className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2"
                >
                  Stretchtent Solutions →
                </Link>
                <Link 
                  href="/products/glamping-solutions"
                  className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2"
                >
                  Glamping Solutions →
                </Link>
                <Link 
                  href="/products/furniture-solutions"
                  className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2"
                >
                  Furniture Solutions →
                </Link>
                <Link 
                  href="/products/platform-solutions"
                  className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors py-2"
                >
                  Platform Solutions →
                </Link>
                <Link 
                  href="/products"
                  className="block text-xs text-[#903C0A] hover:text-[#2C2622] transition-colors py-2 uppercase tracking-[2px]"
                >
                  View All →
                </Link>
              </div>
            </div>

            {/* Other Links */}
            <Link
              href="/services"
              className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors uppercase tracking-[2px]"
            >
              Services →
            </Link>
            
            <Link
              href="/projects"
              className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors uppercase tracking-[2px]"
            >
              Projects →
            </Link>
            
            <Link
              href="/about"
              className="block text-sm text-[#2C2622] hover:text-[#903C0A] transition-colors uppercase tracking-[2px]"
            >
              About →
            </Link>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="block text-center text-[10px] tracking-[3px] uppercase px-6 py-3 border border-[#903C0A] text-[#903C0A] hover:bg-[#903C0A] hover:text-white transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}