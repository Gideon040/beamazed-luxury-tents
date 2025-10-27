// app/products/[category]/[slug]/page.tsx
// FINAL VERSION - With proper gradient overlay for header visibility

import supabase from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { Download, ArrowRight } from 'lucide-react'

// Metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { data: product } = await supabase
    .from('products')
    .select('name, description, tagline, meta_title, meta_description')
    .eq('slug', params.slug)
    .single()

  return {
    title: product?.meta_title || `${product?.name} | BeAmazed Luxury Glamping`,
    description: product?.meta_description || product?.description || 'Premium glamping and event structures',
  }
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: { category: string; slug: string } 
}) {
  // Fetch complete product data
  const { data: product, error } = await supabase
    .from('products')
    .select(`
      *,
      product_categories (
        id,
        name,
        slug
      ),
      product_series (
        id,
        name,
        slug
      ),
      product_images (
        id,
        url,
        alt_text,
        title,
        type,
        sort_order
      ),
      product_specifications (
        id,
        category,
        name,
        value,
        is_standard,
        is_optional,
        sort_order
      ),
      product_features (
        id,
        title,
        description,
        icon,
        sort_order
      ),
      product_documents (
        id,
        name,
        url,
        type,
        file_size
      ),
      product_variants (
        id,
        name,
        sku,
        indoor_space,
        canopy_space,
        total_space,
        dimensions,
        capacity_seated,
        capacity_standing,
        price
      )
    `)
    .eq('slug', params.slug)
    .single()

  if (!product || error) {
    notFound()
  }

  // Fetch related products
  const { data: relatedProducts } = await supabase
    .from('products')
    .select(`
      id,
      name,
      slug,
      tagline,
      indoor_space,
      capacity_seated,
      price,
      product_images (
        url,
        alt_text
      )
    `)
    .eq('category_id', product.category_id)
    .neq('id', product.id)
    .eq('is_active', true)
    .limit(4)

  // Organize data
  const images = product.product_images?.sort((a: any, b: any) => a.sort_order - b.sort_order) || []
  const specifications = product.product_specifications?.sort((a: any, b: any) => a.sort_order - b.sort_order) || []
  const features = product.product_features?.sort((a: any, b: any) => a.sort_order - b.sort_order) || []
  const documents = product.product_documents || []
  const variants = product.product_variants || []
  
  // Group specifications by category
  const groupedSpecs = specifications.reduce((acc: any, spec: any) => {
    if (!acc[spec.category]) {
      acc[spec.category] = []
    }
    acc[spec.category].push(spec)
    return acc
  }, {})

  // Get images by type
  const heroImage = images.find((img: any) => img.type === 'hero') || images[0]
  const galleryImages = images.filter((img: any) => img.type === 'gallery' || (!img.type && img !== heroImage))

  return (
    <>
      <CustomCursor />
      
      {/* Header will overlay on hero */}
      <div className="relative">
        <Header />
        
        {/* HERO SECTION - Full height with gradient for header visibility */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden -mt-20">
          {/* Hero Image */}
          {heroImage ? (
            <>
              <Image 
                src={heroImage.url}
                alt={heroImage.alt_text || product.name}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay - DARK at top for header, LIGHTER at bottom */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
            </>
          ) : (
            /* Fallback gradient if no image */
            <div className="absolute inset-0 bg-gradient-to-b from-[#2C2622]/90 via-[#2C2622]/60 to-[#903C0A]/20" />
          )}

          {/* Content - positioned lower to avoid header */}
          <div className="relative z-10 text-center px-8 max-w-7xl mx-auto w-full pt-20">
            {/* Category tag */}
            {product.product_categories && (
              <p className="text-white/70 text-xs tracking-[4px] uppercase mb-4 animate-fadeInUp">
                {product.product_categories.name}
              </p>
            )}
            
            {/* Product Title */}
            <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-white mb-6 italic animate-fadeInUp animation-delay-200">
              {product.name}
            </h1>
            
            {/* Tagline */}
            {product.tagline && (
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 animate-fadeInUp animation-delay-400">
                {product.tagline}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center animate-fadeInUp animation-delay-600">
              {documents.find((doc: any) => doc.type === 'factsheet') && (
                <a 
                  href={documents.find((doc: any) => doc.type === 'factsheet').url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-button-light"
                >
                  <span>Download Factsheet</span>
                </a>
              )}
              <Link href="#specifications" className="luxury-button-light">
                <span>View Details</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <main className="min-h-screen bg-[#FFFEF9]">
        
        {/* FEATURE TAGS - Below hero */}
        {features.length > 0 && (
          <section className="py-12 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {features.slice(0, 5).map((feature: any, index: number) => (
                  <span key={index} className="px-6 py-3 border border-[#2C2622]/20 text-xs tracking-[3px] uppercase text-[#2C2622]">
                    {feature.title}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* GALLERY IMAGES - Magazine style */}
        {galleryImages.length > 0 && (
          <section className="py-20 px-8">
            <div className="max-w-7xl mx-auto">
              {/* Grid layout for first 2 images */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {galleryImages.slice(0, 2).map((image: any, index: number) => (
                  <div key={image.id} className="relative aspect-[4/3] overflow-hidden group">
                    <Image 
                      src={image.url}
                      alt={image.alt_text || `${product.name} view ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {image.title && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white text-sm tracking-wider">{image.title}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Large image if available */}
              {galleryImages[2] && (
                <div className="relative aspect-[21/9] overflow-hidden group">
                  <Image 
                    src={galleryImages[2].url}
                    alt={galleryImages[2].alt_text || product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* SPECIFICATIONS SECTION */}
        <section id="specifications" className="py-24 px-8 bg-[#F5F3EE]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Specifications Table */}
            <div>
              <h2 className="font-serif text-3xl text-[#2C2622] mb-12 italic">Specifications</h2>
              
              <div className="space-y-6">
                {/* Dimensions */}
                <div>
                  <h3 className="text-xs tracking-[3px] uppercase text-[#903C0A] mb-4">Dimensions</h3>
                  
                  {product.dimensions && (
                    <div className="flex justify-between py-3 border-b border-[#2C2622]/10">
                      <span className="text-sm text-[#2C2622]/60">Size</span>
                      <span className="text-sm text-[#2C2622]">{product.dimensions}</span>
                    </div>
                  )}
                  {product.indoor_space && (
                    <div className="flex justify-between py-3 border-b border-[#2C2622]/10">
                      <span className="text-sm text-[#2C2622]/60">Indoor Space</span>
                      <span className="text-sm text-[#2C2622]">{product.indoor_space} m²</span>
                    </div>
                  )}
                  {product.canopy_space && (
                    <div className="flex justify-between py-3 border-b border-[#2C2622]/10">
                      <span className="text-sm text-[#2C2622]/60">Canopy Space</span>
                      <span className="text-sm text-[#2C2622]">{product.canopy_space} m²</span>
                    </div>
                  )}
                  {product.total_space && (
                    <div className="flex justify-between py-3 border-b border-[#2C2622]/10">
                      <span className="text-sm text-[#2C2622]/60">Total Area</span>
                      <span className="text-sm text-[#2C2622] font-medium">{product.total_space} m²</span>
                    </div>
                  )}
                </div>

                {/* Capacity */}
                <div>
                  <h3 className="text-xs tracking-[3px] uppercase text-[#903C0A] mb-4">Capacity</h3>
                  
                  {product.capacity_seated && (
                    <div className="flex justify-between py-3 border-b border-[#2C2622]/10">
                      <span className="text-sm text-[#2C2622]/60">Seated</span>
                      <span className="text-sm text-[#2C2622]">{product.capacity_seated} guests</span>
                    </div>
                  )}
                  {product.capacity_standing && (
                    <div className="flex justify-between py-3 border-b border-[#2C2622]/10">
                      <span className="text-sm text-[#2C2622]/60">Standing</span>
                      <span className="text-sm text-[#2C2622]">{product.capacity_standing} guests</span>
                    </div>
                  )}
                </div>
                
                {/* Other Specifications */}
                {Object.entries(groupedSpecs).map(([category, specs]: [string, any]) => (
                  <div key={category}>
                    <h3 className="text-xs tracking-[3px] uppercase text-[#903C0A] mb-4">{category}</h3>
                    {specs.map((spec: any) => (
                      <div key={spec.id} className="flex justify-between py-3 border-b border-[#2C2622]/10">
                        <span className="text-sm text-[#2C2622]/60">{spec.name}</span>
                        <span className="text-sm text-[#2C2622]">
                          {spec.value || (spec.is_standard ? 'Standard' : spec.is_optional ? 'Optional' : '-')}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Installation */}
                {(product.installation_days || product.installation_price) && (
                  <div>
                    <h3 className="text-xs tracking-[3px] uppercase text-[#903C0A] mb-4">Installation</h3>
                    {product.installation_days && (
                      <div className="flex justify-between py-3 border-b border-[#2C2622]/10">
                        <span className="text-sm text-[#2C2622]/60">Setup Time</span>
                        <span className="text-sm text-[#2C2622]">{product.installation_days} days</span>
                      </div>
                    )}
                    {product.installation_price && (
                      <div className="flex justify-between py-3 border-b border-[#2C2622]/10">
                        <span className="text-sm text-[#2C2622]/60">Installation Cost</span>
                        <span className="text-sm text-[#2C2622]">€{product.installation_price.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Options & Info */}
            <div className="lg:sticky lg:top-24">
              {/* Big Number Display */}
              <div className="bg-white p-8 mb-8">
                <div className="text-xs tracking-[3px] uppercase text-[#2C2622]/60 mb-4">Total Coverage</div>
                <div className="text-5xl font-serif font-light text-[#903C0A] mb-6">
                  {product.total_space || product.indoor_space || '100'} m²
                </div>
                
                {/* Description */}
                {product.description && (
                  <p className="text-sm text-[#2C2622]/70 leading-relaxed">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Features List */}
              {features.length > 0 && (
                <div className="bg-white p-8">
                  <h3 className="text-xs tracking-[3px] uppercase text-[#2C2622] mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {features.map((feature: any, index: number) => (
                      <div key={feature.id} className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded-full bg-[#903C0A] text-white text-xs flex items-center justify-center mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-sm text-[#2C2622] font-medium">{feature.title}</p>
                          {feature.description && (
                            <p className="text-xs text-[#2C2622]/60 mt-1">{feature.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Available Variants */}
              {variants.length > 1 && (
                <div className="mt-8">
                  <h3 className="text-xs tracking-[3px] uppercase text-[#2C2622] mb-4">Available Options</h3>
                  <div className="space-y-2">
                    {variants.map((variant: any) => (
                      <div key={variant.id} className="p-4 bg-white hover:bg-[#F5F3EE] transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-[#2C2622] font-medium">{variant.name}</p>
                            {variant.dimensions && (
                              <p className="text-xs text-[#2C2622]/60 mt-1">{variant.dimensions}</p>
                            )}
                          </div>
                          {variant.price && (
                            <span className="text-sm text-[#903C0A] font-medium">
                              €{variant.price.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* LUXURY STATEMENT SECTION */}
        <section className="py-32 px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2622] mb-8 italic">
              Luxury & Excellence
            </h2>
            
            {/* Big Number Display */}
            <div className="relative my-20">
              <div className="text-[120px] md:text-[160px] lg:text-[200px] font-serif font-light text-[#903C0A]/10 leading-none select-none">
                {product.total_space || product.indoor_space || '100'}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm tracking-[4px] uppercase text-[#2C2622] mb-2">
                    Up to
                  </p>
                  <p className="text-2xl md:text-3xl font-serif italic text-[#903C0A]">
                    {product.total_space || product.indoor_space || 100} square meters
                  </p>
                  <p className="text-sm tracking-[4px] uppercase text-[#2C2622] mt-2">
                    of extraordinary space
                  </p>
                </div>
              </div>
            </div>

            {/* Installation Description */}
            {product.installation_description && (
              <div className="max-w-2xl mx-auto">
                <p className="text-sm text-[#2C2622]/70 leading-relaxed">
                  {product.installation_description}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* RELATED PRODUCTS */}
        {relatedProducts && relatedProducts.length > 0 && (
          <section className="py-24 px-8 bg-[#F5F3EE]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-center font-serif text-3xl text-[#2C2622] mb-16 italic">
                Explore Our Collection
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((item: any) => {
                  const relatedImage = item.product_images?.[0]
                  return (
                    <Link 
                      key={item.id}
                      href={`/products/${params.category}/${item.slug}`}
                      className="group"
                    >
                      <div className="aspect-[4/3] bg-white mb-4 overflow-hidden relative">
                        {relatedImage ? (
                          <Image
                            src={relatedImage.url}
                            alt={relatedImage.alt_text || item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-6xl opacity-10">⛺</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-serif text-lg text-[#2C2622] mb-2 group-hover:text-[#903C0A] transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-[#2C2622]/60 tracking-wider uppercase">
                          {item.capacity_seated ? `${item.capacity_seated} guests` : 'Premium'}
                        </p>
                        {item.price && (
                          <p className="text-sm text-[#903C0A] font-medium">
                            from €{Math.round(item.price).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="text-center mt-12">
                <Link 
                  href={`/products/${params.category}`} 
                  className="inline-flex items-center gap-2 text-sm tracking-[2px] uppercase text-[#903C0A] hover:text-[#2C2622] transition-colors"
                >
                  View all products <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT CTA */}
        <section className="bg-[#2C2622] py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 italic">
              Ready to elevate your venue?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Contact us to discuss how {product.name} can transform your space
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <Link href="/contact" className="luxury-button-light">
                <span>Get in Touch</span>
              </Link>
              {product.price && (
                <div className="text-white/60">
                  <span className="text-sm">Starting from </span>
                  <span className="text-2xl font-serif italic">€{Math.round(product.price).toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}