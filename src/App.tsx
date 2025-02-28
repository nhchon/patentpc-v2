import React from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, LogIn } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span className="text-sm">(800) 234-5678</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} />
              <span className="text-sm">info@patentpc.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span className="text-sm">4701 Patrick Henry Dr, Building #16, Santa Clara, CA 95054</span>
            </div>
            <div className="flex items-center space-x-2">
              <Facebook size={16} />
              <Twitter size={16} />
              <Instagram size={16} />
              <Linkedin size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">PatentPC</span>
            </div>
            <div className="flex items-center">
              <nav className="hidden md:flex space-x-6 mr-6">
                <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">Home</a>
                <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">About Us</a>
                <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">Services</a>
                <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">Industries</a>
                <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">Resources</a>
                <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">Contact</a>
              </nav>
              <div className="hidden md:flex items-center space-x-3">
                <a href="https://calendly.com/powerpatent/patentpc" className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                  Schedule A Call
                </a>
                <a href="https://patentpc.com/login" className="border border-orange-500 text-orange-500 hover:bg-orange-50 active:bg-orange-100 active:border-orange-600 active:text-orange-600 px-4 py-2 rounded-md text-sm font-medium transition flex items-center">
                  <LogIn size={16} className="mr-1" /> Login
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-800"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-900">PatentPC</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mt-8 space-y-6">
              <a href="#" className="block text-gray-800 hover:text-blue-700 font-medium text-lg">Home</a>
              <a href="#" className="block text-gray-800 hover:text-blue-700 font-medium text-lg">About Us</a>
              <a href="#" className="block text-gray-800 hover:text-blue-700 font-medium text-lg">Services</a>
              <a href="#" className="block text-gray-800 hover:text-blue-700 font-medium text-lg">Industries</a>
              <a href="#" className="block text-gray-800 hover:text-blue-700 font-medium text-lg">Resources</a>
              <a href="#" className="block text-gray-800 hover:text-blue-700 font-medium text-lg">Contact</a>
              <div className="pt-4 space-y-4">
                <a href="https://calendly.com/powerpatent/patentpc" className="block w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-4 py-2 rounded-md text-center font-medium transition">
                  Schedule A Call
                </a>
                <a href="https://patentpc.com/login" className="block w-full border border-orange-500 text-orange-500 hover:bg-orange-50 active:bg-orange-100 active:border-orange-600 active:text-orange-600 px-4 py-2 rounded-md text-center font-medium transition flex items-center justify-center">
                  <LogIn size={16} className="mr-1" /> Login
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Protecting Your Intellectual Property</h1>
              <p className="text-xl mb-8">We provide comprehensive patent services to help inventors and businesses secure their innovations.</p>
              <div className="flex space-x-4">
                <a href="https://calendly.com/powerpatent/patentpc" className="bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 px-6 py-3 rounded-md font-medium transition">
                  Speak With An Attorney
                </a>
                <a href="https://patentpc.com/ip-quiz/" className="border border-white text-white hover:bg-orange-500 active:bg-orange-600 active:border-orange-300 px-6 py-3 rounded-md font-medium transition">
                  Take IP Quiz
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Patent Professional" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services & Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of intellectual property services to protect your innovations and business assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Utility Patents</h3>
              <p className="text-gray-600 mb-4">
                Protect the functional aspects of your invention with utility patents. We handle drafting, filing, and prosecution with the USPTO.
              </p>
              <a href="https://calendly.com/powerpatent/patentpc" className="text-orange-500 hover:text-orange-600 active:text-orange-700 font-medium flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design Patents</h3>
              <p className="text-gray-600 mb-4">
                Protect the unique visual appearance of your product with design patents, ensuring your product's look remains exclusively yours.
              </p>
              <a href="https://calendly.com/powerpatent/patentpc" className="text-orange-500 hover:text-orange-600 active:text-orange-700 font-medium flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trademarks</h3>
              <p className="text-gray-600 mb-4">
                Secure your brand identity with trademark registration. We help you protect your company name, logo, and product names.
              </p>
              <a href="https://calendly.com/powerpatent/patentpc" className="text-orange-500 hover:text-orange-600 active:text-orange-700 font-medium flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Copyrights</h3>
              <p className="text-gray-600 mb-4">
                Protect your creative works including software, books, music, and artistic creations with copyright registration.
              </p>
              <a href="https://calendly.com/powerpatent/patentpc" className="text-orange-500 hover:text-orange-600 active:text-orange-700 font-medium flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patent Search</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive patent searches to determine patentability and avoid infringement issues before investing in development.
              </p>
              <a href="https://calendly.com/powerpatent/patentpc" className="text-orange-500 hover:text-orange-600 active:text-orange-700 font-medium flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IP Strategy</h3>
              <p className="text-gray-600 mb-4">
                Strategic IP consulting to develop a comprehensive intellectual property plan aligned with your business goals.
              </p>
              <a href="https://calendly.com/powerpatent/patentpc" className="text-orange-500 hover:text-orange-600 active:text-orange-700 font-medium flex items-center">
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">PowerPatent Software</h3>
                  <p className="text-gray-600 mb-4">
                    Our proprietary patent drafting software helps streamline the patent application process, making it more efficient and cost-effective. Features include:
                  </p>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AI-assisted patent drafting
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Automated prior art search
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Patent portfolio management
                    </li>
                  </ul>
                  <a href="https://calendly.com/powerpatent/patentpc" className="text-orange-500 hover:text-orange-600 active:text-orange-700 font-medium flex items-center">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">IP Consulting Services</h3>
                  <p className="text-gray-600 mb-4">
                    Our team of IP experts provides comprehensive consulting services to help businesses develop and implement effective IP strategies:
                  </p>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      IP portfolio audits and valuation
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Competitive landscape analysis
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      IP licensing and monetization strategies
                    </li>
                  </ul>
                  <a href="https://calendly.com/powerpatent/patentpc" className="text-orange-500 hover:text-orange-600 active:text-orange-700 font-medium flex items-center">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Patent Professionals Meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose PatentPC?</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Experienced Professionals</h3>
                    <p className="mt-2 text-gray-600">Our team consists of registered patent attorneys with technical backgrounds.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Personalized Service</h3>
                    <p className="mt-2 text-gray-600">We provide tailored solutions to meet your specific intellectual property needs.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Proven Track Record</h3>
                    <p className="mt-2 text-gray-600">We have successfully secured hundreds of patents for our clients.</p>
                  </div>
                </div>
              </div>
              
              <a href="https://calendly.com/powerpatent/patentpc" className="mt-8 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition flex items-center">
                Speak to Our Attorney <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "PatentPC has been instrumental in helping us build and protect our IP portfolio. Their expertise in both legal and technical aspects has been invaluable to our business growth."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">David Wilson</h4>
                  <p className="text-gray-600">CEO, TechStart Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Working with PatentPC has been a game-changer for our startup. Their strategic approach to IP protection has helped us secure funding and establish credibility in a competitive market."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Jennifer Lee</h4>
                  <p className="text-gray-600">Founder, InnovateMed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "As a first-time inventor, I was overwhelmed by the patent process. PatentPC provided clear guidance and expert support throughout the journey, resulting in a successful patent application."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Robert Martinez</h4>
                  <p className="text-gray-600">Independent Inventor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Innovation?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation to discuss your intellectual property needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://calendly.com/powerpatent/patentpc" className="bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 px-8 py-4 rounded-md font-medium transition">
              Schedule a Consultation
            </a>
            <a href="https://calendly.com/powerpatent/patentpc" className="border border-white text-white hover:bg-orange-500 active:bg-orange-600 active:border-orange-300 px-8 py-4 rounded-md font-medium transition">
              Learn More About Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PatentPC</h3>
              <p className="text-gray-400 mb-4">
                Protecting innovations and intellectual property since 2005.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/patentpc" className="text-gray-400 hover:text-white active:text-orange-400">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com/patentpc" className="text-gray-400 hover:text-white active:text-orange-400">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/patentpc" className="text-gray-400 hover:text-white active:text-orange-400">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="https://calendly.com/powerpatent/patentpc" className="text-gray-400 hover:text-white active:text-orange-400">Patent Preparation & Filing</a></li>
                <li><a href="https://calendly.com/powerpatent/patentpc" className="text-gray-400 hover:text-white active:text-orange-400">Patent Prosecution</a></li>
                <li><a href="https://calendly.com/powerpatent/patentpc" className="text-gray-400 hover:text-white active:text-orange-400">Patent Portfolio Management</a></li>
                <li><a href="https://calendly.com/powerpatent/patentpc" className="text-gray-400 hover:text-white active:text-orange-400">Patent Licensing</a></li>
                <li><a href="https://calendly.com/powerpatent/patentpc" className="text-gray-400 hover:text-white active:text-orange-400">Patent Litigation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://patentpc.com/resources/faqs/" className="text-gray-400 hover:text-white active:text-orange-400">FAQs</a></li>
                <li><a href="https://patentpc.com/resources/glossary/" className="text-gray-400 hover:text-white active:text-orange-400">Glossary</a></li>
                <li><a href="https://patentpc.com/resources/articles/" className="text-gray-400 hover:text-white active:text-orange-400">Articles</a></li>
                <li><a href="https://patentpc.com/resources/guides/" className="text-gray-400 hover:text-white active:text-orange-400">Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <a href="tel:+18002345678" className="text-gray-400 hover:text-white active:text-orange-400">(800) 234-5678</a>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:info@patentpc.com" className="text-gray-400 hover:text-white active:text-orange-400">info@patentpc.com</a>
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <a href="https://maps.google.com/?q=4701+Patrick+Henry+Dr,+Building+16,+Santa+Clara,+CA+95054" className="text-gray-400 hover:text-white active:text-orange-400">4701 Patrick Henry Dr, Building #16, Santa Clara, CA 95054</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PatentPC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="https://patentpc.com/privacy-policy/" className="text-gray-400 hover:text-white active:text-orange-400 text-sm">Privacy Policy</a></li>
                <li><a href="https://patentpc.com/terms-of-service/" className="text-gray-400 hover:text-white active:text-orange-400 text-sm">Terms of Service</a></li>
                <li><a href="https://patentpc.com/sitemap/" className="text-gray-400 hover:text-white active:text-orange-400 text-sm">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;