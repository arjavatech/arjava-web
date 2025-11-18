import React from 'react';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Leading IT Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Build the Future with
              <span className="bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent"> Arjava</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              We create innovative software solutions that transform businesses. 
              From web applications to mobile apps, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
              <a href="#contact" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition-all text-center text-sm sm:text-base">Contact Us</a>
              <a href="#projects" className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors text-center text-sm sm:text-base">View Our Work</a>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm sm:text-base text-gray-600">Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm sm:text-base text-gray-600">Years</div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0" data-aos="fade-left">
            <img src="/images/img/arjava logo laptop mockup.png" alt="Arjava Technologies" className="w-full max-w-sm sm:max-w-lg mx-auto" />
            <div className="hidden sm:block absolute top-10 -left-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">Web Apps</span>
              </div>
            </div>
            <div className="hidden sm:block absolute bottom-10 -right-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 animate-bounce" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">Mobile Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;