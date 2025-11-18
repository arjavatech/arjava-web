import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">About Us</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">We Build Software That Matters</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Arjava Technologies, we specialize in creating innovative software solutions 
              that help businesses grow and succeed in the digital age. Our team of expert 
              developers and designers work closely with clients to deliver exceptional results.
            </p>
            <a href="#about" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition-all inline-block">Learn More About Us</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            <div className="bg-white p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="bi bi-code-slash text-xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Development</h3>
              <p className="text-gray-600 text-sm">Tailored software solutions built to meet your specific business requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="bi bi-phone text-xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Solutions</h3>
              <p className="text-gray-600 text-sm">Native and cross-platform mobile applications for iOS and Android.</p>
            </div>
            <div className="bg-white p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="bi bi-cloud text-xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Services</h3>
              <p className="text-gray-600 text-sm">Scalable cloud infrastructure and deployment solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="bi bi-shield-check text-xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security measures in all our solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;