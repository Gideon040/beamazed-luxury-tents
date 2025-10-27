// app/products/page.tsx
import supabase from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default async function ProductsPage() {
  try {
    const { data: categories, error } = await supabase
      .from('product_categories')
      .select('*')
      .order('sort_order')

    if (error) {
      console.error('Error fetching categories:', error)
      throw error
    }

    // Category images mapping - hoogwaardige afbeeldingen per categorie
    const categoryImages: { [key: string]: string } = {
      'authentic-structures': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761570277/15_25_19_BAMBOUSCOOPIC_pfhn5k.jpg',
      'stretchtent-solutions': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761510185/2_yk4u0s.jpg',
      'glamping-solutions': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761590152/Strohboid_Glamping_-65web-klein_jfqg2t.jpg',
      'furniture-solutions': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761590091/Samoon_8_obqfrj.jpg',
      'platform-solutions': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761510181/1_wm2dof.jpg'
    }

    // Enhanced category descriptions
    const categoryDescriptions: { [key: string]: { tagline: string, features: Array<{title: string, subtitle: string}> } } = {
      'authentic-structures': {
        tagline: 'Handcrafted architectural masterpieces that blend seamlessly with nature, using sustainable materials and traditional techniques.',
        features: [
          { title: 'Natural Materials', subtitle: 'Bamboo & Coconut Fiber' },
          { title: 'Custom Design', subtitle: 'Tailored to Your Vision' }
        ]
      },
      'stretchtent-solutions': {
        tagline: 'Versatile and elegant stretch tents that transform any space into an extraordinary venue for unforgettable events.',
        features: [
          { title: 'Weather Resistant', subtitle: 'All-Season Protection' },
          { title: 'Modular System', subtitle: 'Flexible Configurations' }
        ]
      },
      'glamping-solutions': {
        tagline: 'Luxury safari lodges and glamping accommodations where wilderness meets comfort in perfect harmony.',
        features: [
          { title: 'Premium Comfort', subtitle: 'Five-Star Experience' },
          { title: 'Eco-Friendly', subtitle: 'Sustainable Tourism' }
        ]
      },
      'furniture-solutions': {
        tagline: 'Curated collection of premium furniture and décor that completes your outdoor living experience.',
        features: [
          { title: 'Luxury Furnishing', subtitle: 'Designer Pieces' },
          { title: 'Weather Proof', subtitle: 'Outdoor Durability' }
        ]
      },
      'platform-solutions': {
        tagline: 'Solid foundations and elevated platforms that provide stability and elegance to any installation.',
        features: [
          { title: 'Stable Foundation', subtitle: 'Engineering Excellence' },
          { title: 'Adaptable Design', subtitle: 'Any Terrain Solution' }
        ]
      }
    }

    // Journey steps - zonder icons
    const journeySteps = [
      {
        number: '01',
        title: 'Discovery',
        description: 'We begin with your vision. Understanding your needs, location, and the experience you want to create.',
        highlight: 'Vision & Strategy'
      },
      {
        number: '02',
        title: 'Design',
        description: 'Our designers craft a custom concept that harmonizes with your environment and exceeds expectations.',
        highlight: 'Creative Excellence'
      },
      {
        number: '03',
        title: 'Selection',
        description: 'Choose from our curated collections - from structures to furniture, every detail matters.',
        highlight: 'Premium Materials'
      },
      {
        number: '04',
        title: 'Installation',
        description: 'Expert craftsmen bring your vision to life with precision, care, and attention to every detail.',
        highlight: 'Master Craftsmanship'
      },
      {
        number: '05',
        title: 'Experience',
        description: 'The result: unforgettable moments in a space that continues to inspire and amaze.',
        highlight: 'Lasting Memories'
      }
    ]

    return (
      <>
        <CustomCursor />
        <Header />
        
        {/* Hero Section - Luxe stijl zonder overlays */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761582530/3_nec2xc.jpg"
              alt="Our Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          </div>
          
          <div className="relative z-10 text-center text-white px-10 max-w-[1400px] mx-auto">
            <p className="text-[10px] tracking-[5px] uppercase mb-8 text-white/70 animate-fadeInUp">
              Curated Excellence Since 2013
            </p>
            <h1 className="font-serif text-[clamp(80px,12vw,140px)] font-light mb-10 tracking-[-4px] leading-[0.9] animate-fadeInUp animation-delay-200">
              Our Collection
            </h1>
            <p className="text-[clamp(20px,2.5vw,28px)] font-light leading-relaxed max-w-4xl mx-auto opacity-90 animate-fadeInUp animation-delay-400">
              Each creation tells a story. From intimate safari lodges to grand pavilions, 
              discover spaces designed to inspire unforgettable moments.
            </p>
          </div>

          {/* Elegant Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fadeInUp animation-delay-600">
            <div className="text-[10px] tracking-[3px] uppercase text-white/50 mb-4">Scroll to Explore</div>
            <div className="w-[1px] h-20 bg-white/20 relative mx-auto">
              <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
            </div>
          </div>
        </section>

        {/* Stats Bar - Elegant dark section */}
        <section className="bg-[#2C2622] text-white py-20">
          <div className="max-w-[1600px] mx-auto px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fadeInUp">
                <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">
                  {categories?.length || 5}
                </div>
                <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                  Premium Collections
                </div>
              </div>
              <div className="animate-fadeInUp animation-delay-200">
                <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">37</div>
                <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                  Unique Designs
                </div>
              </div>
              <div className="animate-fadeInUp animation-delay-400">
                <div className="font-serif text-6xl font-light mb-3 text-[#D49D43]">11</div>
                <div className="text-[10px] tracking-[3px] uppercase text-white/60">
                  Years Experience
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
          {/* Introduction - Magazine Style */}
          <section className="py-36">
            <div className="max-w-[1000px] mx-auto px-10 text-center">
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                The Art of Outdoor Living
              </p>
              <h2 className="font-serif text-[clamp(48px,7vw,72px)] font-light mb-12 tracking-[-2px] text-[#2C2622] leading-[1.1]">
                Where Innovation<br/>Meets Tradition
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
                Every structure we create is a testament to craftsmanship and attention to detail. 
                From the selection of sustainable materials to the final touches, 
                we ensure each piece reflects our commitment to excellence and your unique vision.
              </p>
            </div>
          </section>

          {/* Categories Grid - Luxe Magazine Layout */}
          <section className="pb-36">
            <div className="max-w-[1600px] mx-auto px-10">
              {categories && categories.length > 0 ? (
                <div className="space-y-40">
                  {categories.map((category, index) => (
                    <div
                      key={category.id}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
                        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                      }`}
                    >
                      {/* Image Side - Geen overlay, pure afbeelding */}
                      <div 
                        className={`relative overflow-hidden group animate-fadeInUp ${
                          index % 2 === 1 ? 'lg:col-start-2' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="aspect-[4/3] relative">
                          <img
                            src={category.category_image_url || categoryImages[category.slug] || categoryImages['authentic-structures']}
                            alt={category.name}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          
                          {/* Subtle Category Number */}
                          <div className="absolute top-10 left-10">
                            <span className="font-serif text-[120px] font-light text-white/20 leading-none">
                              0{index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Side - Elegant Typography */}
                      <div 
                        className={`animate-fadeInUp ${
                          index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 lg:pl-20' : 'lg:pr-20'
                        }`}
                        style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                      >
                        {/* Category Label */}
                        <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                          Collection {String(index + 1).padStart(2, '0')}
                        </p>

                        {/* Title */}
                        <h2 className="font-serif text-[clamp(40px,5vw,56px)] font-light text-[#2C2622] mb-8 tracking-[-1px] leading-[1.1]">
                          {category.name}
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                          {category.description || categoryDescriptions[category.slug]?.tagline || 
                           'Discover our exceptional collection of premium structures designed to elevate your experience.'}
                        </p>

                        {/* Features - Elegant Points */}
                        <div className="grid grid-cols-2 gap-8 mb-12">
                          {(categoryDescriptions[category.slug]?.features || [
                            { title: 'Premium Quality', subtitle: 'Exceptional Standards' },
                            { title: 'Custom Solutions', subtitle: 'Tailored Designs' }
                          ]).map((feature, i) => (
                            <div key={i} className="border-l-2 border-[#D49D43]/30 pl-5">
                              <div className="text-base font-medium text-[#2C2622] mb-1">
                                {feature.title}
                              </div>
                              <div className="text-[11px] tracking-[2px] uppercase text-gray-500">
                                {feature.subtitle}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <a 
                          href={`/products/${category.slug}`}
                          className="luxury-button-dark group"
                        >
                          <span className="relative">
                            Explore {category.name}
                            <span className="absolute -right-8 group-hover:-right-10 transition-all duration-300">→</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-32">
                  <div className="inline-block animate-fadeInUp">
                    <p className="font-serif text-2xl text-gray-500 font-light mb-10">
                      Our collections are being curated
                    </p>
                    <a href="/contact" className="luxury-button-dark">
                      <span>Get In Touch</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* The Journey Section - Elegant zonder icons */}
          <section className="py-36 bg-white">
            <div className="max-w-[1600px] mx-auto px-10">
              {/* Section Header */}
              <div className="text-center mb-24">
                <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                  Our Process
                </p>
                <h2 className="font-serif text-[clamp(48px,7vw,72px)] font-light tracking-[-2px] text-[#2C2622] mb-10">
                  The Journey
                </h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  From vision to reality, we guide you through every step 
                  of creating your extraordinary space.
                </p>
              </div>

              {/* Journey Steps - Horizontal Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden lg:block absolute top-24 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D49D43]/20 to-transparent" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                  {journeySteps.map((step, index) => (
                    <div 
                      key={index}
                      className="relative text-center animate-fadeInUp group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Number - Large & Elegant */}
                      <div className="font-serif text-[80px] lg:text-[100px] font-light text-[#D49D43]/20 leading-none mb-8 
                                      group-hover:text-[#D49D43]/40 transition-colors duration-500">
                        {step.number}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl text-[#2C2622] mb-4 font-light tracking-wide">
                        {step.title}
                      </h3>
                      
                      {/* Highlight */}
                      <p className="text-[10px] tracking-[3px] uppercase text-[#D49D43] mb-6">
                        {step.highlight}
                      </p>
                      
                      {/* Description */}
                      <p className="text-sm leading-relaxed text-gray-600 font-light">
                        {step.description}
                      </p>
                      
                      {/* Connection Dot for Timeline */}
                      <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2 h-2 
                                      bg-[#D49D43] rounded-full opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey CTA */}
              <div className="mt-24 text-center">
                <p className="text-lg text-gray-600 mb-10 max-w-[700px] mx-auto font-light">
                  Ready to start your journey? Let&apos;s create something extraordinary together.
                </p>
                <a href="/contact" className="luxury-button-dark">
                  <span>Begin Your Project</span>
                </a>
              </div>
            </div>
          </section>

          {/* Final CTA - Full Width Image */}
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
                Let&apos;s Create Together
              </p>
              <h2 className="font-serif text-[clamp(60px,10vw,100px)] font-light mb-12 tracking-[-3px] leading-[0.95]">
                Begin Your Journey
              </h2>
              <p className="text-2xl font-light leading-relaxed mb-16 opacity-90 max-w-3xl mx-auto">
                Whether you have a clear vision or need guidance, 
                our team is ready to help you create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="luxury-button-light">
                  <span>Start Your Project</span>
                </a>
                <a href="/portfolio" className="luxury-button-light">
                  <span>View Portfolio</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </>
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return (
      <>
        <CustomCursor />
        <Header />
        
        <div className="min-h-screen bg-[#FFF8F3] flex items-center justify-center">
          <div className="text-center animate-fadeInUp px-10">
            <h1 className="font-serif text-6xl font-light text-[#2C2622] mb-8">
              Something Went Wrong
            </h1>
            <p className="text-xl text-gray-600 mb-12 font-light">
              Unable to load our collection
            </p>
            <a href="/" className="luxury-button-dark">
              <span>Return Home</span>
            </a>
          </div>
        </div>
        
        <Footer />
      </>
    )
  }
}