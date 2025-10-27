export default function Footer() {
  return (
    <footer className="py-20 px-10 lg:px-20 bg-[#1a1a1a] text-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-20 mb-20">
          <div>
            {/* Gebruik de witte transparante logo */}
            <img 
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761512188/Transparent_PNG-02_biiug9.png"
              alt="BEAMAZED"
              className="h-12 w-auto mb-8"
            />
            <p className="text-gray-400 leading-relaxed max-w-[400px]">
              Luxury tent experiences rooted in nature, soul and story. 
              Creating unforgettable moments in extraordinary settings since 2012.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase mb-8 text-[#D49D43]">Collections</h4>
            {['Safari Lodges', 'Stretch Pavilions', 'Bamboo Architecture', 'Custom Projects'].map(item => (
              <a key={item} href="#" className="block text-gray-400 mb-4 text-sm transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase mb-8 text-[#D49D43]">Company</h4>
            {['About', 'Philosophy', 'Sustainability', 'Press'].map(item => (
              <a key={item} href="#" className="block text-gray-400 mb-4 text-sm transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase mb-8 text-[#D49D43]">Connect</h4>
            <a href="mailto:hello@beamazed.nl" className="block text-gray-400 mb-4 text-sm transition-colors hover:text-white">
              hello@beamazed.nl
            </a>
            <a href="tel:+310123456789" className="block text-gray-400 mb-4 text-sm transition-colors hover:text-white">
              +31 (0) 123 456 789
            </a>
            <p className="text-gray-400 mb-4 text-sm">Geesteren, NL</p>
            <a href="#" className="block text-gray-400 mb-4 text-sm transition-colors hover:text-white">
              Book Consultation
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2024 BEAMAZED - All Rights Reserved</p>
          <div className="flex gap-8">
            {['Instagram', 'Pinterest', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-[11px] tracking-[2px] uppercase text-gray-600 transition-colors hover:text-white">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}