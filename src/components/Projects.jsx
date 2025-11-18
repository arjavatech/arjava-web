import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">
            Our Work
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Take a look at some of our recent work and see how we've helped businesses succeed.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6" data-aos="fade-up" data-aos-delay="200">
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 break-inside-avoid mb-6">
            <div className="relative overflow-hidden">
              <img src="/images/img/gallery/bbrain.jpeg" alt="Bright Brains" className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300" />
              <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                Mobile App
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
                  <i className="bi bi-link-45deg mr-2"></i>Live Demo
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bright Brains</h3>
              <p className="text-gray-600 text-sm leading-relaxed">An innovative app that boosts brain power through engaging games and cognitive challenges</p>
            </div>
          </div>
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 break-inside-avoid mb-6">
            <div className="relative overflow-hidden">
              <img src="/images/img/gallery/tnngo.png" alt="TN-NGO" className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300" />
              <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                Education
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
                  <i className="bi bi-link-45deg mr-2"></i>Live Demo
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">TN-NGO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Connecting NGOs with students to provide quality education and learning opportunities</p>
            </div>
          </div>
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 break-inside-avoid mb-6">
            <div className="relative overflow-hidden">
              <img src="/images/img/gallery/goddardnew.png" alt="Goddard" className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300" />
              <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                Web App
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
                  <i className="bi bi-link-45deg mr-2"></i>Live Demo
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Goddard</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Comprehensive web application for daycare school management and operations</p>
            </div>
          </div>
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 break-inside-avoid mb-6">
            <div className="relative overflow-hidden">
              <img src="/images/img/gallery/findabednew.png" alt="FindBed" className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300" />
              <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                Healthcare
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
                  <i className="bi bi-link-45deg mr-2"></i>Live Demo
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">FindBed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Healthcare bed booking platform</p>
            </div>
          </div>
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 break-inside-avoid mb-6">
            <div className="relative overflow-hidden">
              <img src="/images/img/gallery/sortingnew.png" alt="Sorting Analysis" className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300" />
              <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                Analytics
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
                  <i className="bi bi-link-45deg mr-2"></i>Live Demo
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sorting Analysis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Advanced sorting algorithm analysis and visualization tool</p>
            </div>
          </div>
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 break-inside-avoid mb-6">
            <div className="relative overflow-hidden">
              <img src="/images/img/gallery/mugavarinew.png" alt="Mugavari" className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300" />
              <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                Foundation
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
                  <i className="bi bi-link-45deg mr-2"></i>Live Demo
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mugavari</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Web application for Mugavari Foundation to manage their charitable activities and community outreach</p>
            </div>
          </div>
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 break-inside-avoid mb-6">
            <div className="relative overflow-hidden">
              <img src="/images/img/gallery/raththam1.png" alt="Rattham Udhavi" className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300" />
              <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                Healthcare
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
                  <i className="bi bi-link-45deg mr-2"></i>Live Demo
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rattham Udhavi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Blood donation management system that connects donors with recipients</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/projects" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-2xl hover:from-blue-800 hover:to-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <i className="bi bi-grid-3x3-gap mr-2"></i>
            See More Projects
            <i className="bi bi-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;