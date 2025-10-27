// app/projects/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import Link from 'next/link'

export const metadata = {
  title: 'Our Projects | BeAmazed Luxury Tents',
  description: 'Explore our portfolio of extraordinary glamping experiences and luxury event installations across Europe.',
}

export default function ProjectsPage() {
  // Featured projects - Real BeAmazed projects
  const projects = [
    {
      title: 'Boho Club',
      location: 'Marbella, Spain',
      category: 'Beach Club',
      description: 'Luxury beach club installation featuring custom stretch tent with exclusive printed cover design, creating an elegant and distinctive atmosphere.',
      image: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761510185/2_yk4u0s.jpg',
      tags: ['Stretch Tent', 'Printed Cover', 'Luxury Beach Club']
    },
    {
      title: 'Oyana Beach',
      location: 'Costa del Sol, Spain',
      category: 'Beach Club',
      description: 'Modern beach venue with stretch tent and comprehensive sidewall system providing weather protection and flexible space configuration.',
      image: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg',
      tags: ['Stretch Tent', 'Sidewall System', 'Beach Venue']
    },
    {
      title: 'San Pedro de Alcántara',
      location: 'Marbella, Spain',
      category: 'Mixed Development',
      description: 'Comprehensive luxury installation combining safari lodges and stretch tents, creating a unique hospitality experience.',
      image: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761590152/Strohboid_Glamping_-65web-klein_jfqg2t.jpg',
      tags: ['Safari Lodge', 'Stretch Tents', 'Premium Venue']
    },
    {
      title: 'Luuma Beach',
      location: 'Costa del Sol, Spain',
      category: 'Beach Club',
      description: 'Sophisticated beach club featuring our signature luxury tent structures and premium furniture solutions.',
      image: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761590091/Samoon_8_obqfrj.jpg',
      tags: ['Beach Club', 'Luxury Tents', 'Premium Furniture']
    },
    {
      title: 'Balneario Málaga',
      location: 'Málaga, Spain',
      category: 'Beach Resort',
      description: 'Elegant beachfront resort installation with stretch tent and advanced sidewall system for year-round comfort.',
      image: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761582530/3_nec2xc.jpg',
      tags: ['Stretch Tent', 'Sidewalls', 'Resort']
    },
    {
      title: 'Private Project Benahavís',
      location: 'Benahavís, Spain',
      category: 'Private Estate',
      description: 'Exclusive private estate featuring multiple custom stretch tents, designed for intimate gatherings and special events.',
      image: 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761582529/5_m5s4oq.jpg',
      tags: ['Private', 'Custom Tents', 'Exclusive']
    }
  ]

  // Categories for filtering
  const categories = ['All', 'Beach Club', 'Private Estate', 'Resort', 'Mixed Development']

  return (
    <>
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761511380/Yves_Beamazed_tivymm.jpg"
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-10 max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[5px] uppercase mb-8 text-white/70 animate-fadeInUp">
            Our Portfolio
          </p>
          <h1 className="font-serif text-[clamp(80px,12vw,140px)] font-light mb-10 tracking-[-4px] leading-[0.9] animate-fadeInUp animation-delay-200">
            Projects
          </h1>
          <p className="text-[clamp(20px,2.5vw,28px)] font-light leading-relaxed max-w-4xl mx-auto opacity-90 animate-fadeInUp animation-delay-400">
            Extraordinary spaces we've created across Europe, each telling its own unique story
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
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">50+</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Completed Projects
              </div>
            </div>
            <div className="animate-fadeInUp animation-delay-200">
              <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">11</div>
              <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                Years Experience
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
        
        {/* Introduction */}
        <section className="py-32">
          <div className="max-w-[1200px] mx-auto px-10 text-center">
            <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6 animate-fadeInUp">
              Our Work
            </p>
            <h2 className="font-serif text-[clamp(40px,6vw,56px)] font-light mb-8 tracking-[-2px] text-[#2C2622] animate-fadeInUp animation-delay-200">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light animate-fadeInUp animation-delay-400">
              From intimate weddings to large-scale glamping resorts, 
              each project showcases our commitment to excellence and innovation.
            </p>
          </div>
        </section>

        {/* Filter Categories - Optional for future enhancement */}
        <section className="pb-16">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 text-sm tracking-[2px] uppercase transition-all duration-300
                    ${index === 0 
                      ? 'bg-[#2C2622] text-white' 
                      : 'bg-white text-[#2C2622] hover:bg-[#2C2622] hover:text-white'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid - Magazine Layout */}
        <section className="pb-32">
          <div className="max-w-[1600px] mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-white">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-[10px] tracking-[2px] uppercase text-[#2C2622]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Category */}
                    <div className="text-[10px] tracking-[3px] uppercase text-[#903C0A] mb-3">
                      {project.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-serif text-2xl text-[#2C2622] mb-2 group-hover:text-[#903C0A] transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Location */}
                    <div className="text-sm text-gray-500 mb-3">
                      📍 {project.location}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="text-[10px] tracking-[1px] uppercase px-3 py-1 bg-white text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden animate-fadeInUp">
                <img 
                  src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg"
                  alt="Our Process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-white/20" />
              </div>

              {/* Content */}
              <div className="animate-fadeInUp animation-delay-200">
                <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                  Your Project
                </p>
                <h2 className="font-serif text-[clamp(35px,5vw,50px)] font-light mb-8 tracking-[-2px] text-[#2C2622]">
                  Let's Create Something Extraordinary
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Every project in our portfolio started with a conversation. Whether you have 
                  a clear vision or just the beginning of an idea, we're here to help bring it to life.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#903C0A] text-white text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2C2622] mb-1">Share Your Vision</h4>
                      <p className="text-sm text-gray-600">Tell us about your project, location, and goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#903C0A] text-white text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2C2622] mb-1">Custom Proposal</h4>
                      <p className="text-sm text-gray-600">We create a tailored design and comprehensive plan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#903C0A] text-white text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2C2622] mb-1">Expert Execution</h4>
                      <p className="text-sm text-gray-600">Professional installation and ongoing support</p>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="luxury-button-dark">
                  <span>Start Your Project</span>
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
              Ready to Begin?
            </p>
            <h2 className="font-serif text-[clamp(60px,10vw,100px)] font-light mb-12 tracking-[-3px] leading-[0.95]">
              Your Project Awaits
            </h2>
            <p className="text-2xl font-light leading-relaxed mb-16 opacity-90 max-w-3xl mx-auto">
              Join our portfolio of extraordinary spaces. Let's discuss how we can 
              bring your vision to life with creativity and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="luxury-button-light">
                <span>Get In Touch</span>
              </Link>
              <Link href="/services" className="luxury-button-light">
                <span>Our Services</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}