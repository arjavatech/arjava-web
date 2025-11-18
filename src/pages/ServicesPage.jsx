import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      
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
              <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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
      
      <Footer />
    </>
  );
};

export default ServicesPage;