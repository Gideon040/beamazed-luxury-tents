'use client'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'


export default function Home() {
  const [scrollY, setScrollY] = useState(0)


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  return (
    <>
      <CustomCursor />
      <Header />


{/* Hero Section with LARGE Logo and text above */}
<section id="hero" className="h-screen relative overflow-hidden">
  {/* Background Image with Parallax */}
  <div
    className="absolute inset-0"
    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
  >
    <img
      src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510181/1_wm2dof.jpg"
      alt="Luxury tent in nature"
      className="w-full h-full object-cover"
    />
    {/* DARKER OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/40" />
    <div className="absolute inset-0 bg-[#2C2622]/30" />
  </div>
 
  <div className="relative h-screen flex items-center justify-center text-center z-10">
    <div className="max-w-[1600px] px-10">
      {/* TEXT ABOVE LOGO */}
      <p className="text-[10px] tracking-[5px] uppercase text-white mb-10 opacity-90 animate-fadeInUp drop-shadow-lg">
        Luxury Tents Rooted in Nature, Soul & Story
      </p>
     
      {/* MUCH LARGER LOGO */}
      <div className="mb-16 animate-fadeInUp animation-delay-200">
        <img
          src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761512188/Transparent_PNG-02_biiug9.png"
          alt="BEAMAZED"
          className="w-[500px] lg:w-[900px] xl:w-[800px] h-auto mx-auto drop-shadow-2xl"
        />
      </div>
     
      {/* TAGLINE UNDER LOGO */}
      <p className="text-[12px] tracking-[5px] uppercase text-white mb-12 opacity-90 animate-fadeInUp animation-delay-400 drop-shadow-lg">
        Where unrivalled luxury embraces enchanting ambience
      </p>
     
      <div className="animate-fadeInUp animation-delay-600">
        <button
          onClick={() => smoothScrollTo('collections')}
          className="luxury-button-light"
        >
          <span>Discover The Experience</span>
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Intro Section - Magazine Layout */}
      <section id="philosophy" className="py-44 bg-white">
        <div className="max-w-[1800px] mx-auto px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
          <div className="lg:sticky lg:top-36">
            <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-10">Our Vision</p>
            <h2 className="font-serif text-[clamp(60px,8vw,96px)] font-light leading-[0.9] text-[#2C2622] mb-12 tracking-[-2px]">
              MINDFUL<br/>SPACES
            </h2>
          </div>
         
          <div className="pt-12">
            <p className="text-[clamp(24px,4vw,32px)] leading-[1.4] text-[#2C2622] font-light mb-16">
              "Every tent we create tells a story.
              A story of craft, of moments, of memories
              made under canvas and stars."
            </p>
            <div className="columns-1 lg:columns-2 gap-10 text-base leading-relaxed text-gray-600">
              <p className="mb-6">
                At Beamazed, we believe that true luxury lies not in excess,
                but in the perfect harmony between comfort and nature. Our
                collections are the result of years of experience, passion for
                design, and deep respect for the environment.
              </p>
              <p>
                From intimate glamping experiences to large-scale festivals,
                every project is approached with the same dedication to perfection.
                We select only the finest materials and work with
                craftsmen who understand their trade.
              </p>
            </div>
            <div className="mt-20 w-full h-[600px] lg:h-[800px] relative overflow-hidden">
              <img
                src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510181/1_wm2dof.jpg"
                alt="Luxury tent installation"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mt-6 mb-20">
              Safari Lodge Collection - Where wilderness meets comfort
            </p>
            <div className="w-full lg:w-3/5 h-[300px] lg:h-[400px] ml-auto relative overflow-hidden">
              <img
                src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg"
                alt="Tent detail"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Collections Section - UPDATED TO 5 CATEGORIES */}
      <div id="collections" className="bg-[#FFF8F3]">
        {/* Collection 1 - Authentic Structures and Covers */}
        <div className="min-h-screen flex items-center relative">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-[#E8D4BD] to-transparent" />
          <div className="w-full max-w-[1800px] mx-auto px-10 lg:px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative">
              <span className="font-serif text-[200px] lg:text-[300px] font-light text-[#F5EFE7] absolute -top-[100px] lg:-top-[150px] -left-[30px] lg:-left-[60px] leading-none z-[-1]">
                01
              </span>
             
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                Premium Collection
              </p>
              <h3 className="font-serif text-5xl lg:text-7xl font-light leading-none text-[#2C2622] mb-10 tracking-[-1px]">
                Authentic<br/>Structures<br/>& Covers
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed text-[#2C2622] mb-12 max-w-[500px]">
                Handcrafted architectural masterpieces that blend seamlessly with nature,
                using sustainable materials and traditional techniques.
              </p>
             
              <div className="mb-16">
                <h4 className="text-[11px] tracking-[3px] uppercase text-gray-500 mb-6">Our Collection Includes:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Bamboo Marquees</p>
                    <p className="text-xs text-gray-400">Elegant event spaces</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Bamboo Structures</p>
                    <p className="text-xs text-gray-400">Custom installations</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Pavilion</p>
                    <p className="text-xs text-gray-400">Grand celebrations</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Coco Fiber Sails</p>
                    <p className="text-xs text-gray-400">Natural sun protection</p>
                  </div>
                </div>
              </div>
             
              <button className="luxury-button-dark">
                <span>Explore Structures</span>
              </button>
            </div>
           
            <div className="relative h-[500px] lg:h-[700px]">
              <div className="absolute top-0 right-0 w-[90%] h-[85%] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510181/1_wm2dof.jpg"
                  alt="Bamboo Structure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#D49D43] opacity-20" />
            </div>
          </div>
        </div>


        {/* Collection 2 - Stretchtent Solutions (NEW - Reversed Layout) */}
        <div className="min-h-screen flex items-center relative bg-white">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-[#E8D4BD] to-transparent" />
          <div className="w-full max-w-[1800px] mx-auto px-10 lg:px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative h-[500px] lg:h-[700px] order-2 lg:order-1">
              <div className="absolute top-0 left-0 w-[90%] h-[85%] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510185/2_yk4u0s.jpg"
                  alt="Stretch Tent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#D49D43] opacity-20" />
            </div>
           
            <div className="relative order-1 lg:order-2">
              <span className="font-serif text-[200px] lg:text-[300px] font-light text-[#F5EFE7] absolute -top-[100px] lg:-top-[150px] -left-[30px] lg:-left-[60px] leading-none z-[-1]">
                02
              </span>
             
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                Flexible Solutions
              </p>
              <h3 className="font-serif text-5xl lg:text-7xl font-light leading-none text-[#2C2622] mb-10 tracking-[-1px]">
                Stretchtent<br/>Solutions
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed text-[#2C2622] mb-12 max-w-[500px]">
                Versatile and elegant Bedouin-style tents that adapt to any environment.
                Waterproof, UV-protected, and endlessly customizable.
              </p>
             
              <div className="mb-16">
                <h4 className="text-[11px] tracking-[3px] uppercase text-gray-500 mb-6">Complete System:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Stretch Tents</p>
                    <p className="text-xs text-gray-400">Custom sizes & shapes</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Sidewall System</p>
                    <p className="text-xs text-gray-400">Weather protection</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Printed Cover</p>
                    <p className="text-xs text-gray-400">Custom branding</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Full Installation</p>
                    <p className="text-xs text-gray-400">Professional setup</p>
                  </div>
                </div>
              </div>
             
              <button className="luxury-button-dark">
                <span>View Solutions</span>
              </button>
            </div>
          </div>
        </div>


        {/* Collection 3 - Glamping Solutions (UPDATED) */}
        <div className="min-h-screen flex items-center relative">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-[#E8D4BD] to-transparent" />
          <div className="w-full max-w-[1800px] mx-auto px-10 lg:px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative">
              <span className="font-serif text-[200px] lg:text-[300px] font-light text-[#F5EFE7] absolute -top-[100px] lg:-top-[150px] -left-[30px] lg:-left-[60px] leading-none z-[-1]">
                03
              </span>
             
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                Signature Collection
              </p>
              <h3 className="font-serif text-5xl lg:text-7xl font-light leading-none text-[#2C2622] mb-10 tracking-[-1px]">
                Glamping<br/>Solutions
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed text-[#2C2622] mb-12 max-w-[500px]">
                From safari lodges to dome-shaped wonders, our glamping collection
                offers uncompromised comfort in extraordinary settings.
              </p>
             
              <div className="mb-16">
                <h4 className="text-[11px] tracking-[3px] uppercase text-gray-500 mb-6">Lodge Collection:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Safari Lodges</p>
                    <p className="text-xs text-gray-400">23 unique designs</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Dome Shaped Lodges</p>
                    <p className="text-xs text-gray-400">Geodesic luxury</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Glamping Pods</p>
                    <p className="text-xs text-gray-400">Intimate escapes</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Bamboo Bird's Nest</p>
                    <p className="text-xs text-gray-400">Unique experiences</p>
                  </div>
                </div>
              </div>
             
              <button className="luxury-button-dark">
                <span>Explore Glamping</span>
              </button>
            </div>
           
            <div className="relative h-[500px] lg:h-[700px]">
              <div className="absolute top-0 right-0 w-[90%] h-[85%] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761590091/Samoon_8_obqfrj.jpg"
                  alt="Safari Lodge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#D49D43] opacity-20" />
            </div>
          </div>
        </div>


        {/* Collection 4 - Furniture Solutions (Reversed Layout) */}
        <div className="min-h-screen flex items-center relative bg-white">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-[#E8D4BD] to-transparent" />
          <div className="w-full max-w-[1800px] mx-auto px-10 lg:px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative h-[500px] lg:h-[700px] order-2 lg:order-1">
              <div className="absolute top-0 left-0 w-[90%] h-[85%] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510185/2_yk4u0s.jpg"
                  alt="Glamping Furniture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#D49D43] opacity-20" />
            </div>
           
            <div className="relative order-1 lg:order-2">
              <span className="font-serif text-[200px] lg:text-[300px] font-light text-[#F5EFE7] absolute -top-[100px] lg:-top-[150px] -left-[30px] lg:-left-[60px] leading-none z-[-1]">
                04
              </span>
             
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                Comfort Collection
              </p>
              <h3 className="font-serif text-5xl lg:text-7xl font-light leading-none text-[#2C2622] mb-10 tracking-[-1px]">
                Furniture<br/>Solutions
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed text-[#2C2622] mb-12 max-w-[500px]">
                Curated comfort meets outdoor elegance. From event furniture to
                chill-out lounges, every piece enhances your outdoor experience.
              </p>
             
              <div className="mb-16">
                <h4 className="text-[11px] tracking-[3px] uppercase text-gray-500 mb-6">Furniture Range:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Event Furniture</p>
                    <p className="text-xs text-gray-400">Tables, chairs, bars</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Chill-out Furniture</p>
                    <p className="text-xs text-gray-400">Lounge sets</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Outdoor Decoration</p>
                    <p className="text-xs text-gray-400">Styling elements</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Custom Pieces</p>
                    <p className="text-xs text-gray-400">Bespoke designs</p>
                  </div>
                </div>
              </div>
             
              <button className="luxury-button-dark">
                <span>View Furniture</span>
              </button>
            </div>
          </div>
        </div>


        {/* Collection 5 - Platform Solutions (NEW) */}
        <div className="min-h-screen flex items-center relative">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-[#E8D4BD] to-transparent" />
          <div className="w-full max-w-[1800px] mx-auto px-10 lg:px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            <div className="relative">
              <span className="font-serif text-[200px] lg:text-[300px] font-light text-[#F5EFE7] absolute -top-[100px] lg:-top-[150px] -left-[30px] lg:-left-[60px] leading-none z-[-1]">
                05
              </span>
             
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                Foundation Collection
              </p>
              <h3 className="font-serif text-5xl lg:text-7xl font-light leading-none text-[#2C2622] mb-10 tracking-[-1px]">
                Platform<br/>Solutions
              </h3>
              <p className="text-lg lg:text-xl leading-relaxed text-[#2C2622] mb-12 max-w-[500px]">
                Sustainable foundations that elevate your installations. From wooden
                decking to bamboo platforms, we create the perfect base.
              </p>
             
              <div className="mb-16">
                <h4 className="text-[11px] tracking-[3px] uppercase text-gray-500 mb-6">Platform Types:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Wooden Platforms</p>
                    <p className="text-xs text-gray-400">Durable decking</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Bamboo Platforms</p>
                    <p className="text-xs text-gray-400">Eco-friendly base</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Elevated Decks</p>
                    <p className="text-xs text-gray-400">Multi-level designs</p>
                  </div>
                  <div className="border-l-2 border-[#E8D4BD] pl-4">
                    <p className="text-base text-[#2C2622] mb-1">Custom Foundations</p>
                    <p className="text-xs text-gray-400">Tailored solutions</p>
                  </div>
                </div>
              </div>
             
              <button className="luxury-button-dark">
                <span>Explore Platforms</span>
              </button>
            </div>
           
            <div className="relative h-[500px] lg:h-[700px]">
              <div className="absolute top-0 right-0 w-[90%] h-[85%] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510181/1_wm2dof.jpg"
                  alt="Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#D49D43] opacity-20" />
            </div>
          </div>
        </div>
      </div>


      {/* Gallery Section */}
      <section id="gallery" className="py-44 bg-white">
        <div className="text-center max-w-[800px] mx-auto mb-32 px-10">
          <h2 className="font-serif text-[clamp(60px,8vw,96px)] font-light text-[#2C2622] mb-8 tracking-[-2px]">
            Spaces That Speak
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            From intimate ceremonies to grand celebrations,
            every project tells a unique story.
          </p>
        </div>
       
        <div className="max-w-[1800px] mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] auto-rows-[300px] lg:auto-rows-[400px] gap-[2px]">
          <div className="row-span-2 relative overflow-hidden group transition-transform duration-[600ms] hover:scale-[0.98]">
            <img
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510181/1_wm2dof.jpg"
              alt="Desert Dreams"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <h3 className="font-serif text-3xl text-white mb-2">Desert Dreams</h3>
              <p className="text-sm tracking-[2px] uppercase text-white/70">Sahara, Morocco</p>
            </div>
          </div>
         
          <div className="relative overflow-hidden group transition-transform duration-[600ms] hover:scale-[0.98]">
            <img
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510185/2_yk4u0s.jpg"
              alt="Forest Wedding"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <h3 className="font-serif text-3xl text-white mb-2">Forest Wedding</h3>
              <p className="text-sm tracking-[2px] uppercase text-white/70">Veluwe, Netherlands</p>
            </div>
          </div>
         
          <div className="relative overflow-hidden group transition-transform duration-[600ms] hover:scale-[0.98]">
            <img
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg"
              alt="Beach Club"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <h3 className="font-serif text-3xl text-white mb-2">Beach Club</h3>
              <p className="text-sm tracking-[2px] uppercase text-white/70">Ibiza, Spain</p>
            </div>
          </div>
         
          <div className="col-span-2 relative overflow-hidden group transition-transform duration-[600ms] hover:scale-[0.98]">
            <img
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510181/1_wm2dof.jpg"
              alt="Mountain Retreat"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <h3 className="font-serif text-3xl text-white mb-2">Mountain Retreat</h3>
              <p className="text-sm tracking-[2px] uppercase text-white/70">Swiss Alps</p>
            </div>
          </div>
         
          <div className="relative overflow-hidden group transition-transform duration-[600ms] hover:scale-[0.98]">
            <img
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510185/2_yk4u0s.jpg"
              alt="Festival Grounds"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <h3 className="font-serif text-3xl text-white mb-2">Festival Grounds</h3>
              <p className="text-sm tracking-[2px] uppercase text-white/70">Amsterdam</p>
            </div>
          </div>
         
          <div className="relative overflow-hidden group transition-transform duration-[600ms] hover:scale-[0.98]">
            <img
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg"
              alt="Private Estate"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <h3 className="font-serif text-3xl text-white mb-2">Private Estate</h3>
              <p className="text-sm tracking-[2px] uppercase text-white/70">Provence, France</p>
            </div>
          </div>
        </div>
      </section>


      {/* Process Section - UPDATED "THE JOURNEY" */}
      <section id="process" className="py-44 bg-[#FFF8F3]">
        <div className="max-w-[1800px] mx-auto px-10 lg:px-20">
          <div className="text-center max-w-[800px] mx-auto mb-24">
            <h2 className="font-serif text-[clamp(60px,8vw,96px)] font-light text-[#2C2622] mb-8 tracking-[-2px]">
              The Journey
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              From vision to reality, we guide you through every step
              of creating your extraordinary space.
            </p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {[
              {
                number: '1',
                title: 'Discovery',
                description: 'We begin with your vision. Understanding your needs, location, and the experience you want to create.',
                icon: ''
              },
              {
                number: '2',
                title: 'Design',
                description: 'Our designers craft a custom concept that harmonizes with your environment and exceeds expectations.',
                icon: ''
              },
              {
                number: '3',
                title: 'Selection',
                description: 'Choose from our curated collections - from structures to furniture, every detail matters.',
                icon: ''
              },
              {
                number: '4',
                title: 'Installation',
                description: 'Expert craftsmen bring your vision to life with precision, care, and attention to every detail.',
                icon: ''
              },
              {
                number: '5',
                title: 'Experience',
                description: 'The result: unforgettable moments in a space that continues to inspire and amaze.',
                icon: ''
              }
            ].map(step => (
              <div key={step.number} className="text-center group">
                <div className="mb-8 text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="font-serif text-[80px] lg:text-[100px] text-[#E8D4BD] leading-none mb-6 group-hover:text-[#D49D43] transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl lg:text-2xl text-[#2C2622] mb-5 font-normal">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>


          {/* Journey CTA */}
          <div className="mt-24 text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-[600px] mx-auto">
              Ready to start your journey? Let's create something extraordinary together.
            </p>
            <button className="luxury-button-dark">
              <span>Begin Your Project</span>
            </button>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">About Us</p>
              <h2 className="font-serif text-[clamp(48px,6vw,72px)] font-light leading-[0.9] text-[#2C2622] mb-12 tracking-[-2px]">
                THE STORY<br/>BEHIND
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-[#2C2622] mb-8">
                With over 11 years of experience in event decoration and tent structures,
                our journey has taken us from France to Spain, and now to creating
                extraordinary glamping experiences across Europe.
              </p>
              <p className="text-base leading-relaxed text-gray-600 mb-8">
                What started as a franchise operation has evolved into something more
                meaningful - a mission to help people disconnect from the fast-paced
                world and reconnect with nature, without sacrificing luxury and comfort.
              </p>
              <p className="text-lg text-[#903C0A] font-light italic mb-12">
                "I'm here to help you with creative ideas and build those dreams together with you."
              </p>
              <div className="mb-12">
                <p className="text-sm text-gray-500 mb-2">— Founder & Creative Director</p>
                <p className="text-[11px] tracking-[2px] uppercase text-gray-400">BEAMAZED LUXURY TENTS</p>
              </div>
              <button className="luxury-button-dark">
                <span>Our Story</span>
              </button>
            </div>
           
            <div className="relative h-[400px] lg:h-[600px]">
              <img
                src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761511380/Yves_Beamazed_tivymm.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D49D43] opacity-20" />
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section with Background Image and Dark Overlay */}
      <section id="contact" className="relative py-52 text-white text-center overflow-hidden">
        {/* Background Image with DARKER Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          {/* DARKER OVERLAY */}
          <div className="absolute inset-0 bg-[#2C2622]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
       
        <div className="relative z-10 max-w-[1000px] mx-auto px-10">
          <h2 className="font-serif text-[clamp(80px,10vw,120px)] font-light mb-8 tracking-[-3px]">
            Let's Create
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 mb-20 font-light">
            Begin your journey to the extraordinary
          </p>
          <button className="luxury-button-light">
            <span>Start Your Journey</span>
          </button>
        </div>
      </section>


      <Footer />
    </>
  )
}

