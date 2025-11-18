import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img src="/images/img/Arjava Logo.png" alt="Arjava" className="h-10 w-29" />
            </Link>
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
                <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">About</Link>
                <Link to="/services" className="text-sm font-medium text-blue-900 border-b-2 border-blue-900 pb-1">Services</Link>
                <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Projects</Link>
              </div>
            </div>
            <Link to="/contact" className="hidden md:block bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">Contact</Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full -translate-y-1"></span>
                <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full my-0.5 opacity-100"></span>
                <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full translate-y-1"></span>
              </div>
            </button>
          </div>
        </div>
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-100`}>
          <div className="px-6 py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-lg">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-lg">About</Link>
            <Link to="/services" className="block px-4 py-2 text-sm font-medium text-blue-900 bg-blue-50 rounded-lg">Services</Link>
            <Link to="/products" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-lg">Projects</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm font-medium bg-blue-900 text-white rounded-lg text-center">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 mb-6">
            🚀 Our Services
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What We Do Best</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer comprehensive technology solutions to help your business thrive in the digital world.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="bi bi-laptop text-2xl text-white"></i>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Web Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Modern, responsive websites and web applications built with the latest technologies and frameworks.</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                    React & Vue.js Development
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                    Node.js Backend Solutions
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                    Database Design & Optimization
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-teal-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="bi bi-phone text-2xl text-white"></i>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Mobile Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Native and cross-platform mobile applications for iOS and Android platforms with exceptional user experience.</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                    React Native Development
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                    Flutter Applications
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                    Native iOS/Android Apps
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="bi bi-cloud text-2xl text-white"></i>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Cloud Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Scalable cloud infrastructure and deployment solutions for your applications with enterprise-grade security.</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></div>
                    AWS & Azure Solutions
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></div>
                    DevOps & CI/CD
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></div>
                    Microservices Architecture
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="bi bi-palette text-2xl text-white"></i>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">UI/UX Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Beautiful, user-friendly interfaces that provide exceptional user experiences and drive engagement.</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3"></div>
                    User Research & Testing
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3"></div>
                    Prototyping & Wireframing
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3"></div>
                    Design Systems
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="bi bi-cpu text-2xl text-white"></i>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">IoT Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Internet of Things solutions that connect devices and enable smart automation for modern businesses.</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mr-3"></div>
                    Device Integration
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mr-3"></div>
                    Smart Automation
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mr-3"></div>
                    Data Analytics
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="bi bi-shield-check text-2xl text-white"></i>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">Consulting</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Strategic technology consulting to help you make informed decisions and optimize your digital transformation.</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mr-3"></div>
                    Technology Strategy
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mr-3"></div>
                    Digital Transformation
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mr-3"></div>
                    Process Optimization
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;