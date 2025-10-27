// app/products/[category]/page.tsx
// FIXED: Hero zoals product page + werkende hover links

import supabase from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link' // BELANGRIJK: gebruik Link voor Next.js routing!
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import type {
  Category,
  Product,
  ProductImage,
  ProductSeries
} from '@/types/database.types'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  try {
    // Fetch category info
    const { data: category, error: categoryError } = await supabase
      .from('product_categories')
      .select('*')
      .eq('slug', params.category)
      .single()

    if (categoryError || !category) {
      notFound()
    }

    // Fetch products
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', category.id)
      .eq('is_active', true)
      .order('sort_order')

    if (productsError) {
      console.error('Error fetching products:', productsError)
    }

    // Fetch all images for these products
    let productImages: { [key: string]: ProductImage[] } = {}
    if (products && products.length > 0) {
      const productIds = products.map(p => p.id)
      const { data: images } = await supabase
        .from('product_images')
        .select('*')
        .in('product_id', productIds)
        .order('sort_order')
     
      // Group images by product_id
      if (images) {
        images.forEach(img => {
          if (!productImages[img.product_id]) {
            productImages[img.product_id] = []
          }
          productImages[img.product_id].push(img)
        })
      }
    }

    // Fetch series data if needed
    let productSeries: { [key: string]: ProductSeries } = {}
    if (products && products.length > 0) {
      const seriesIds = products
        .filter(p => p.series_id)
        .map(p => p.series_id)
        .filter((id): id is string => id !== null)
     
      if (seriesIds.length > 0) {
        const { data: series } = await supabase
          .from('product_series')
          .select('*')
          .in('id', seriesIds)
       
        if (series) {
          series.forEach(s => {
            productSeries[s.id] = s
          })
        }
      }
    }

    // Combine data
    const productsWithData = products?.map(product => ({
      ...product,
      images: productImages[product.id] || [],
      series: product.series_id ? productSeries[product.series_id] : null
    })) || []

    // Hero images mapping
    const heroImages: { [key: string]: string } = {
      'authentic-structures': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761570277/15_25_19_BAMBOUSCOOPIC_pfhn5k.jpg',
      'stretchtent-solutions': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg',
      'glamping-solutions': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/yoga_retreat_Asuma__montenegro_10.jpg',
      'furniture-solutions': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/CL_L_De_Bergen__Wanroij_NL_04.jpg',
      'platform-solutions': 'https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/Strohboid_Glamping_56webklein.jpg'
    }

    return (
      <>
        <CustomCursor />
        
        {/* Header outside hero like product page */}
        <div className="relative">
          <Header />
          
          {/* HERO SECTION - Exact zoals product detail page */}
          <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden -mt-20">
            {/* Hero Image */}
            {(category.hero_image_url || heroImages[category.slug]) ? (
              <>
                <img
                  src={category.hero_image_url || heroImages[category.slug]}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay - DONKER boven voor header, LICHTER onder */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
              </>
            ) : (
              /* Fallback gradient */
              <div className="absolute inset-0 bg-gradient-to-b from-[#2C2622]/90 via-[#2C2622]/60 to-[#903C0A]/20" />
            )}

            {/* Content */}
            <div className="relative z-10 text-center px-8 max-w-7xl mx-auto w-full pt-20">
              {/* Category tag */}
              <p className="text-white/70 text-xs tracking-[4px] uppercase mb-4 animate-fadeInUp">
                Collection
              </p>
              
              {/* Title */}
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-white mb-6 italic animate-fadeInUp animation-delay-200">
                {category.name}
              </h1>
              
              {/* Description */}
              {category.description && (
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 animate-fadeInUp animation-delay-400">
                  {category.description}
                </p>
              )}

              {/* Product count */}
              <div className="animate-fadeInUp animation-delay-600">
                <span className="text-white/60 text-sm tracking-[3px] uppercase">
                  {productsWithData?.length || 0} {productsWithData?.length === 1 ? 'Product' : 'Products'} Available
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Main Content */}
        <div className="bg-[#FFFEF9]">
          
          {/* Category Stats/Info Bar */}
          <section className="py-16 border-b border-[#2C2622]/10">
            <div className="max-w-[1400px] mx-auto px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="animate-fadeInUp">
                  <div className="font-serif text-4xl font-light mb-2 text-[#903C0A]">
                    {productsWithData?.length || 0}
                  </div>
                  <div className="text-[10px] tracking-[2px] uppercase text-gray-500">
                    Unique Designs
                  </div>
                </div>
                <div className="animate-fadeInUp animation-delay-200">
                  <div className="font-serif text-4xl font-light mb-2 text-[#903C0A]">
                    Custom
                  </div>
                  <div className="text-[10px] tracking-[2px] uppercase text-gray-500">
                    Configuration
                  </div>
                </div>
                <div className="animate-fadeInUp animation-delay-400">
                  <div className="font-serif text-4xl font-light mb-2 text-[#903C0A]">
                    Premium
                  </div>
                  <div className="text-[10px] tracking-[2px] uppercase text-gray-500">
                    Materials
                  </div>
                </div>
                <div className="animate-fadeInUp animation-delay-600">
                  <div className="font-serif text-4xl font-light mb-2 text-[#903C0A]">
                    Worldwide
                  </div>
                  <div className="text-[10px] tracking-[2px] uppercase text-gray-500">
                    Delivery
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-32">
            <div className="max-w-[1400px] mx-auto px-10">
              {productsWithData && productsWithData.length > 0 ? (
                <>
                  {/* Section Header */}
                  <div className="text-center mb-20">
                    <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-4">
                      Our Collection
                    </p>
                    <h2 className="font-serif text-[clamp(35px,5vw,50px)] font-light tracking-[-2px] text-[#2C2622]">
                      Explore Every Detail
                    </h2>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {productsWithData.map((product, index) => {
                      // Find primary image or use first image
                      const mainImage = product.images.length > 0
                        ? product.images.find((img: ProductImage) => img.type === 'primary' || img.type === 'hero') || product.images[0]
                        : null

                      return (
                        <Link
                          key={product.id}
                          href={`/products/${params.category}/${product.slug}`}
                          className="group block animate-fadeInUp"
                          style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
                        >
                          {/* Product Card */}
                          <div className="relative">
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
                              {mainImage ? (
                                <>
                                  <img
                                    src={mainImage.url}
                                    alt={mainImage.alt_text || product.name}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                  />
                                  {/* Gradient Overlay on Hover */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2622]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                                  <span className="text-6xl text-gray-300">📷</span>
                                </div>
                              )}

                              {/* View Details Button */}
                              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <span className="bg-white text-[#2C2622] px-4 py-3 text-xs tracking-[2px] uppercase block text-center">
                                  View Details
                                </span>
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-3">
                              {/* Series Badge */}
                              {product.series && (
                                <p className="text-[10px] tracking-[2px] uppercase text-[#903C0A]">
                                  {product.series.name}
                                </p>
                              )}

                              {/* Product Name */}
                              <h3 className="font-serif text-2xl font-light text-[#2C2622] tracking-[-0.5px] group-hover:text-[#903C0A] transition-colors">
                                {product.name}
                              </h3>

                              {/* Tagline */}
                              {product.tagline && (
                                <p className="text-sm text-gray-500 font-light">
                                  {product.tagline}
                                </p>
                              )}

                              {/* Quick Specs */}
                              {(product.indoor_space || product.capacity_seated || product.total_space) && (
                                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                                  {product.total_space && (
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                      <span className="w-1 h-1 bg-[#903C0A] rounded-full" />
                                      <span>From {product.total_space}m²</span>
                                    </div>
                                  )}
                                  {product.indoor_space && (
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                      <span className="w-1 h-1 bg-[#903C0A] rounded-full" />
                                      <span>{product.indoor_space}m²</span>
                                    </div>
                                  )}
                                  {product.capacity_seated && (
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                      <span className="w-1 h-1 bg-[#903C0A] rounded-full" />
                                      <span>{product.capacity_seated} guests</span>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Special case for Bamboo Marquees */}
                              {product.slug === 'bamboo-marquees' && (
                                <div className="text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
                                  7 size options available (3x3m to 30x30m)
                                </div>
                              )}

                              {/* Price */}
                              {product.price && (
                                <div className="flex items-baseline gap-2">
                                  <span className="text-[10px] tracking-[1px] uppercase text-gray-400">From</span>
                                  <span className="font-serif text-2xl font-light text-[#2C2622]">
                                    €{Number(product.price).toLocaleString()}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </>
              ) : (
                <div className="text-center py-32">
                  <div className="animate-fadeInUp">
                    <div className="text-7xl mb-8 opacity-20">🏕️</div>
                    <h3 className="font-serif text-3xl font-light text-[#2C2622] mb-4">
                      Collection Coming Soon
                    </h3>
                    <p className="text-gray-500 font-light mb-10 max-w-md mx-auto">
                      We're curating exceptional pieces for this collection. 
                      Get in touch to discuss custom solutions.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Link href="/products" className="luxury-button-dark">
                        <span>Browse All</span>
                      </Link>
                      <Link href="/contact" className="luxury-button-dark">
                        <span>Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Features Section */}
          <section className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden animate-fadeInUp">
                  <img 
                    src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761511380/Yves_Beamazed_tivymm.jpg"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border border-white/20" />
                </div>

                {/* Content */}
                <div className="animate-fadeInUp animation-delay-200">
                  <p className="text-[11px] tracking-[3px] uppercase text-[#903C0A] mb-6">
                    What Sets Us Apart
                  </p>
                  <h2 className="font-serif text-[clamp(35px,5vw,50px)] font-light mb-8 tracking-[-2px] text-[#2C2622]">
                    Uncompromising Quality
                  </h2>
                  
                  <div className="space-y-6 mb-10">
                    {[
                      {
                        title: 'Premium Materials',
                        description: 'Sustainably sourced, weather-resistant materials built to last decades.'
                      },
                      {
                        title: 'Custom Solutions',
                        description: 'Every project is tailored to your specific needs and vision.'
                      },
                      {
                        title: 'Expert Installation',
                        description: 'Professional setup and support worldwide, ensuring perfect results.'
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[#903C0A] rounded-full" />
                        <div>
                          <h4 className="font-medium text-[#2C2622] mb-2">{feature.title}</h4>
                          <p className="text-gray-600 font-light leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="luxury-button-dark">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section with Image */}
          <section className="relative py-40 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg"
                alt="Get in touch"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2C2622]/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[900px] mx-auto px-10 text-center text-white">
              <p className="text-[11px] tracking-[4px] uppercase mb-6 text-[#D49D43]">
                Ready to Begin?
              </p>
              <h2 className="font-serif text-[clamp(45px,7vw,70px)] font-light mb-8 tracking-[-3px] leading-tight">
                Let's Create Your Perfect Space
              </h2>
              <p className="text-lg font-light leading-relaxed mb-12 opacity-90 max-w-2xl mx-auto">
                Schedule a consultation to discuss your project, explore customization options, 
                and receive a personalized proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="luxury-button-light">
                  <span>Request a Quote</span>
                </Link>
                <Link href="/inspiration" className="luxury-button-light">
                  <span>View Projects</span>
                </Link>
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
        
        <div className="min-h-screen bg-[#FFFEF9] flex items-center justify-center">
          <div className="text-center animate-fadeInUp px-10">
            <h1 className="font-serif text-5xl font-light text-[#2C2622] mb-6">
              Category Not Found
            </h1>
            <p className="text-gray-600 mb-8 font-light">
              This collection could not be loaded
            </p>
            <Link href="/products" className="luxury-button-dark">
              <span>Browse All Collections</span>
            </Link>
          </div>
        </div>
        
        <Footer />
      </>
    )
  }
}