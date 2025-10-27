// app/about/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | BeAmazed Luxury Tents',
  description: 'Discover our journey from event decoration to creating extraordinary glamping experiences across Europe.',
}

export default function AboutPage() {
  // Timeline milestones
  const milestones = [
    {
      year: '2013',
      title: 'The Beginning',
      description: 'Started our journey in event decoration and tent structures in France.'
    },
    {
      year: '2016',
      title: 'Expansion',
      description: 'Extended operations to Spain, mastering luxury outdoor experiences.'
    },
    {
      year: '2019',
      title: 'Transformation',
      description: 'Evolved from franchise to independent, focusing on glamping solutions.'
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Creating extraordinary glamping experiences across Europe.'
    }
  ]

  return (
    <>
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510185/2_yk4u0s.jpg"
            alt="About BeAmazed"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-10 max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[5px] uppercase mb-8 text-white/70 animate-fadeInUp">
            The Story Behind
          </p>
          <h1 className="font-serif text-[clamp(80px,12vw,140px)] font-light mb-10 tracking-[-4px] leading-[0.9] animate-fadeInUp animation-delay-200">
            About Us
          </h1>
          <p className="text-[clamp(20px,2.5vw,28px)] font-light leading-relaxed max-w-4xl mx-auto opacity-90 animate-fadeInUp animation-delay-400">
            From France to Europe, creating extraordinary glamping experiences for over a decade
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fadeInUp animation-delay-600">
          <div className="text-[10px] tracking-[3px] uppercase text-white/50 mb-4">Scroll to Explore</div>
          <div className="w-[1px] h-20 bg-white/20 relative mx-auto">
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#2C2622] text-white py-20">
        <div className="max-w-[1600px] mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp">
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">11+</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Years Experience
              </div>
            </div>
            <div className="animate-fadeInUp animation-delay-200">
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">3</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Countries
              </div>
            </div>
            <div className="animate-fadeInUp animation-delay-400">
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">100+</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Projects Completed
              </div>
            </div>
            <div className="animate-fadeInUp animation-delay-600">
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">∞</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Unforgettable Moments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#FFF8F3]">
        
        {/* Our Story - Two Column Layout */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Left: Text Content */}
              <div className="animate-fadeInUp">
                <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                  The Story Behind
                </p>
                <h2 className="font-serif text-[clamp(40px,6vw,56px)] font-light mb-8 tracking-[-2px] text-[#2C2622]">
                  Our Journey
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    With over 11 years of experience in event decoration and tent structures, our journey has taken us from France to Spain, and now to creating extraordinary glamping experiences across Europe.
                  </p>
                  
                  <p className="text-lg">
                    What started as a franchise operation has evolved into something more meaningful - a mission to help people disconnect from the fast-paced world and reconnect with nature, without sacrificing luxury and comfort.
                  </p>
                  
                  <div className="pt-8 border-t border-[#2C2622]/10 mt-10">
                    <p className="text-2xl font-serif italic text-[#2C2622] mb-4 leading-relaxed">
                      "I'm here to help you with creative ideas and build those dreams together with you."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-[1px] bg-[#903C0A]" />
                      <div>
                        <p className="text-sm font-medium text-[#2C2622]">Founder & Creative Director</p>
                        <p className="text-xs tracking-[2px] uppercase text-gray-500">BeAmazed Luxury Tents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative aspect-[4/5] overflow-hidden animate-fadeInUp animation-delay-200">
                <img 
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761511380/Yves_Beamazed_tivymm.jpg"
                  alt="Our Work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-2 border-white/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                Our Evolution
              </p>
              <h2 className="font-serif text-[clamp(40px,6vw,56px)] font-light tracking-[-2px] text-[#2C2622]">
                The Journey So Far
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center line - only visible on large screens */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D49D43]/30 to-transparent" />
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeInUp`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Left side - alternating */}
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16 lg:order-2'}`}>
                      <div className="font-serif text-5xl font-light text-[#D49D43] mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl text-[#2C2622] mb-3 font-light">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                    
                    {/* Center dot */}
                    <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-[#D49D43] rounded-full border-4 border-white shadow-lg" />
                    
                    {/* Right side spacer */}
                    <div className={index % 2 === 0 ? 'lg:order-2' : ''} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Image + Text Section */}
        <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden animate-fadeInUp">
                <img 
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761570272/Credit_Bambouscoopic_14_dvk0n4.jpg"
                  alt="Our Craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-white/20" />
              </div>

              {/* Text */}
              <div className="animate-fadeInUp animation-delay-200">
                <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                  Our Approach
                </p>
                <h2 className="font-serif text-[clamp(35px,5vw,50px)] font-light mb-8 tracking-[-2px] text-[#2C2622]">
                  Excellence in Every Detail
                </h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-12 bg-[#903C0A] mt-1" />
                    <div>
                      <h4 className="font-medium text-[#2C2622] mb-2">Sustainable Materials</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        We source eco-friendly, weather-resistant materials that blend seamlessly with nature.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-12 bg-[#903C0A] mt-1" />
                    <div>
                      <h4 className="font-medium text-[#2C2622] mb-2">Custom Design</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Every project is tailored to your vision and the unique characteristics of your location.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-12 bg-[#903C0A] mt-1" />
                    <div>
                      <h4 className="font-medium text-[#2C2622] mb-2">Expert Installation</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        Our experienced team ensures perfect installation with meticulous attention to detail.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/products" className="luxury-button-dark">
                  <span>Explore Our Work</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-52 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761582529/5_m5s4oq.jpg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-10 text-center text-white">
            <p className="text-[10px] tracking-[5px] uppercase mb-8 text-white/70">
              Let's Create Together
            </p>
            <h2 className="font-serif text-[clamp(60px,10vw,100px)] font-light mb-12 tracking-[-3px] leading-[0.95]">
              Ready to Begin?
            </h2>
            <p className="text-2xl font-light leading-relaxed mb-16 opacity-90 max-w-3xl mx-auto">
              Whether you have a clear vision or need guidance, 
              we're here to bring your dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="luxury-button-light">
                <span>Get In Touch</span>
              </Link>
              <Link href="/products" className="luxury-button-light">
                <span>View Our Collection</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}