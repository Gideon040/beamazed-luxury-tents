// app/services/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services | BeAmazed Luxury Tents',
  description: 'Expert advice and creative solutions for your luxury glamping and event projects.',
}

export default function ServicesPage() {
  // Service approach steps
  const approach = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start by understanding your vision, needs, and the unique characteristics of your location. This conversation forms the foundation of everything we create together.'
    },
    {
      number: '02',
      title: 'Creative Concept',
      description: 'Our team develops innovative design concepts that harmonize with your environment while meeting your functional requirements and aesthetic preferences.'
    },
    {
      number: '03',
      title: 'Detailed Planning',
      description: 'We create comprehensive plans covering all aspects - from materials and logistics to timelines and budgets, ensuring clarity at every stage.'
    },
    {
      number: '04',
      title: 'Expert Execution',
      description: 'Professional installation by our experienced team, with attention to every detail and respect for your timeline and space.'
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
            src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761511380/Yves_Beamazed_tivymm.jpg"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-10 max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[5px] uppercase mb-8 text-white/70 animate-fadeInUp">
            What We Do
          </p>
          <h1 className="font-serif text-[clamp(80px,12vw,140px)] font-light mb-10 tracking-[-4px] leading-[0.9] animate-fadeInUp animation-delay-200">
            Our Service
          </h1>
          <p className="text-[clamp(20px,2.5vw,28px)] font-light leading-relaxed max-w-4xl mx-auto opacity-90 animate-fadeInUp animation-delay-400">
            Expert advice and creative ideas to bring your vision to life
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
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">50+</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Projects Completed
              </div>
            </div>
            <div className="animate-fadeInUp animation-delay-400">
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">3</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Countries
              </div>
            </div>
            <div className="animate-fadeInUp animation-delay-600">
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">100%</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#FFF8F3]">
        
        {/* Main Service Section */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden animate-fadeInUp">
                <img 
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761582530/3_nec2xc.jpg"
                  alt="Project Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-white/20" />
              </div>

              {/* Content */}
              <div className="animate-fadeInUp animation-delay-200">
                <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                  Our Core Service
                </p>
                
                <h2 className="font-serif text-[clamp(40px,6vw,56px)] font-light mb-8 tracking-[-2px] text-[#2C2622]">
                  Development of a Project
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  We specialize in transforming ideas into reality through expert advice and creative design. 
                  Every project begins with understanding your vision and evolves through collaborative planning 
                  and professional execution.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="border-l-2 border-[#903C0A] pl-6">
                    <h4 className="text-lg font-medium text-[#2C2622] mb-2">Expert Advice</h4>
                    <p className="text-gray-600 leading-relaxed">
                      With over 11 years of experience across Europe, we provide strategic guidance on 
                      materials, logistics, permits, and project feasibility.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-[#903C0A] pl-6">
                    <h4 className="text-lg font-medium text-[#2C2622] mb-2">Creative Ideas</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We develop innovative concepts that reflect your brand while respecting the natural 
                      environment and creating memorable experiences.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-[#903C0A] pl-6">
                    <h4 className="text-lg font-medium text-[#2C2622] mb-2">Complete Solutions</h4>
                    <p className="text-gray-600 leading-relaxed">
                      From initial concept to final installation, we manage every aspect of your project 
                      with professionalism and attention to detail.
                    </p>
                  </div>
                </div>

                <Link href="/contact" className="luxury-button-dark">
                  <span>Start Your Project</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Timeline */}
        <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                How We Work
              </p>
              <h2 className="font-serif text-[clamp(40px,6vw,56px)] font-light tracking-[-2px] text-[#2C2622] mb-8">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                A collaborative process from first meeting to final result
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D49D43]/20 to-transparent top-16" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {approach.map((step, index) => (
                  <div 
                    key={index}
                    className="relative text-center animate-fadeInUp group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Step Number */}
                    <div className="font-serif text-7xl font-light text-[#D49D43]/20 leading-none mb-6 
                                    group-hover:text-[#D49D43]/40 transition-colors duration-500">
                      {step.number}
                    </div>
                    
                    {/* Connection Dot */}
                    <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-3 h-3 
                                    bg-[#D49D43] rounded-full opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-500" />
                    
                    {/* Title */}
                    <h3 className="text-xl text-[#2C2622] mb-4 font-medium">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-600 font-light">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Grid */}
        <section className="py-32 bg-[#FFF8F3]">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                Project Types
              </p>
              <h2 className="font-serif text-[clamp(40px,6vw,56px)] font-light tracking-[-2px] text-[#2C2622] mb-8">
                What We Create
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 group hover:shadow-lg transition-all duration-500">
                <h3 className="text-2xl text-[#2C2622] mb-4 font-light group-hover:text-[#903C0A] transition-colors">
                  Beach Clubs & Hospitality
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Custom stretch tent installations, sidewall systems, and complete venue transformations 
                  for beach clubs and hospitality venues across the Mediterranean.
                </p>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510185/2_yk4u0s.jpg"
                    alt="Beach Clubs"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="bg-white p-10 group hover:shadow-lg transition-all duration-500">
                <h3 className="text-2xl text-[#2C2622] mb-4 font-light group-hover:text-[#903C0A] transition-colors">
                  Glamping & Resorts
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Safari lodges, luxury tents, and complete glamping site development. 
                  Creating sustainable, profitable accommodations that connect guests with nature.
                </p>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761590152/Strohboid_Glamping_-65web-klein_jfqg2t.jpg"
                    alt="Glamping"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="bg-white p-10 group hover:shadow-lg transition-all duration-500">
                <h3 className="text-2xl text-[#2C2622] mb-4 font-light group-hover:text-[#903C0A] transition-colors">
                  Private Estates & Events
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Exclusive installations for private properties, weddings, and special events. 
                  Bespoke designs that create unforgettable moments.
                </p>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761582529/5_m5s4oq.jpg"
                    alt="Private Events"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="bg-white p-10 group hover:shadow-lg transition-all duration-500">
                <h3 className="text-2xl text-[#2C2622] mb-4 font-light group-hover:text-[#903C0A] transition-colors">
                  Custom Structures
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bamboo pavilions, platforms, and unique architectural solutions using sustainable materials. 
                  Every structure designed to harmonize with its environment.
                </p>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761570277/15_25_19_BAMBOUSCOOPIC_pfhn5k.jpg"
                    alt="Custom Structures"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Content */}
              <div className="animate-fadeInUp">
                <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                  Why BeAmazed
                </p>
                <h2 className="font-serif text-[clamp(35px,5vw,50px)] font-light mb-8 tracking-[-2px] text-[#2C2622]">
                  Experience That Matters
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-[#D49D43] pl-6">
                    <h4 className="font-medium text-[#2C2622] mb-2">Over 11 Years of Expertise</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      From France to Spain and beyond, we've perfected the art of creating extraordinary 
                      outdoor spaces that stand the test of time.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-[#D49D43] pl-6">
                    <h4 className="font-medium text-[#2C2622] mb-2">Personal Creative Direction</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Every project receives personal attention from our founder, ensuring creative 
                      excellence and innovative solutions.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-[#D49D43] pl-6">
                    <h4 className="font-medium text-[#2C2622] mb-2">Sustainable Approach</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      We use eco-friendly materials and practices that respect nature while 
                      delivering luxury and comfort.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-[#D49D43] pl-6">
                    <h4 className="font-medium text-[#2C2622] mb-2">Complete Partnership</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      From initial concept to ongoing maintenance, we're with you every step of the way.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden animate-fadeInUp animation-delay-200">
                <img 
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761590091/Samoon_8_obqfrj.jpg"
                  alt="Our Work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-white/20" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-52 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg"
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
              Start Your Project
            </h2>
            <p className="text-2xl font-light leading-relaxed mb-16 opacity-90 max-w-3xl mx-auto">
              Share your vision with us and let's create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="luxury-button-light">
                <span>Get In Touch</span>
              </Link>
              <Link href="/projects" className="luxury-button-light">
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}