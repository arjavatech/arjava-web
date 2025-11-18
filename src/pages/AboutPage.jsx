import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 mb-6">
            👋 About Us
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Building the Future Together</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We develop innovative software and mobile solutions that help businesses achieve their goals and drive digital transformation.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Arjava, we develop software and mobile product engineering services for businesses, educational and financial institutions, healthcare and government organizations to help them achieve their valued objectives and targets.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our goal is to create value-added and cost-effective software solutions tailored to our customer's specific requirements to help them increase their efficiency and productivity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide a full set of software development services supporting you through the whole project lifecycle from idea to release and post-production. We can develop a solution from scratch or step in at any stage of your project.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-gray-600">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-gray-600">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                    <div className="text-gray-600">Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="bi bi-eye text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Propel technological innovation that empowers mankind and creates a better future for all through cutting-edge software solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="bi bi-target text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Deliver full stack IT solutions and services, IoT solutions, and innovative product development that drives business success and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AboutPage;