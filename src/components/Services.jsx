import React from 'react';

const Services = () => {
  return (
    <section id="services" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">Our Services</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Do Best</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer comprehensive technology solutions to help your business thrive in the digital world.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <i className="bi bi-laptop text-xl text-white"></i>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Web Development</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Modern, responsive websites and web applications built with the latest technologies.</p>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  React & Vue.js
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  Node.js Backend
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  Database Design
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <i className="bi bi-phone text-xl text-white"></i>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Mobile Development</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Native and cross-platform mobile apps for iOS and Android platforms.</p>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  React Native
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  Flutter
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  Native iOS/Android
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <i className="bi bi-cloud text-xl text-white"></i>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Cloud Solutions</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Scalable cloud infrastructure and deployment solutions for your applications.</p>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  AWS & Azure
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  DevOps
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  Microservices
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="400">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <i className="bi bi-palette text-xl text-white"></i>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">UI/UX Design</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">Beautiful, user-friendly interfaces that provide exceptional user experiences.</p>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  User Research
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  Prototyping
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2"></div>
                  Design Systems
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
      </div>
      <br /><br />
    </section>
  );
};

export default Services;