'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    location: '',
    timeline: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          location: '',
          timeline: '',
          budget: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <CustomCursor />
      <Header />

      {/* Hero Section with Background */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dbtaisgda/image/upload/v1761510183/3_ie3byk.jpg"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
          <div className="absolute inset-0 bg-[#2C2622]/40" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div className="max-w-[1000px] px-10">
            <p className="text-[10px] tracking-[5px] uppercase text-white/80 mb-6">
              Get in Touch
            </p>
            <h1 className="font-serif text-[clamp(60px,8vw,100px)] font-light text-white mb-8 tracking-[-2px]">
              Let&apos;s Create<br/>Together
            </h1>
            <p className="text-xl text-white/90 font-light max-w-[600px] mx-auto">
              Begin your journey to extraordinary spaces that tell your story
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div>
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                Contact Information
              </p>
              
              <div className="mb-12">
                <h3 className="text-xl text-[#2C2622] mb-4">BeAmazed Luxury Tents</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Geesteren, Gelderland</p>
                  <p>The Netherlands</p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-lg text-[#2C2622] mb-4">Direct Contact</h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="text-[11px] tracking-[2px] uppercase text-gray-400 block mb-1">Email</span>
                    info@beamazed-tents.com
                  </p>
                  <p>
                    <span className="text-[11px] tracking-[2px] uppercase text-gray-400 block mb-1">Phone</span>
                    +31 (0) XX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-lg text-[#2C2622] mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 - 18:00</p>
                  <p>Saturday: 10:00 - 16:00</p>
                  <p>Sunday: By appointment</p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-lg text-[#2C2622] mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-[#D49D43] transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#D49D43] transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#D49D43] transition-colors">
                    Pinterest
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-8">
                Project Inquiry
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent"
                      placeholder="+31 (0) XX XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-lg text-[#2C2622] mb-6">Project Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent appearance-none"
                      >
                        <option value="">Select a type</option>
                        <option value="glamping">Glamping Resort</option>
                        <option value="event">Event / Festival</option>
                        <option value="wedding">Wedding</option>
                        <option value="private">Private Installation</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent appearance-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (&lt; 1 month)</option>
                        <option value="soon">1-3 months</option>
                        <option value="planning">3-6 months</option>
                        <option value="future">6+ months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent appearance-none"
                      >
                        <option value="">Select budget</option>
                        <option value="under50k">Under €50,000</option>
                        <option value="50-100k">€50,000 - €100,000</option>
                        <option value="100-250k">€100,000 - €250,000</option>
                        <option value="250-500k">€250,000 - €500,000</option>
                        <option value="over500k">€500,000+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-[#D49D43] focus:outline-none transition-colors bg-transparent resize-none"
                    placeholder="Describe your project, special requirements, or any questions you might have..."
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded">
                    <p className="text-lg mb-2">Thank you for your inquiry!</p>
                    <p className="text-sm">We&apos;ll get back to you within 24-48 hours to discuss your project.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-6 bg-red-50 border border-red-200 text-red-800 rounded">
                    <p className="text-lg mb-2">Something went wrong</p>
                    <p className="text-sm">Please try again or contact us directly at info@beamazed-tents.com</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-8">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="luxury-button-dark disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Your Inquiry'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="h-[400px] lg:h-[500px] relative">
        <div className="absolute inset-0 bg-[#F5EFE7]">
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] tracking-[4px] uppercase text-[#D49D43] mb-6">
                Visit Our Showroom
              </p>
              <h3 className="font-serif text-4xl lg:text-5xl font-light text-[#2C2622] mb-6">
                Geesteren, Netherlands
              </h3>
              <p className="text-gray-600 max-w-[400px] mx-auto mb-8">
                Experience our collections firsthand. 
                Schedule a private viewing by appointment.
              </p>
              <button className="luxury-button-dark">
                <span>Schedule Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}