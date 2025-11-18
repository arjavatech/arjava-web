import React from 'react';

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden fade-in">
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/60 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-green-400/60 rotate-45"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-purple-400/60 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-yellow-400/60 rotate-45"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-pink-400/60 rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-indigo-400/60 rotate-45 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="bi bi-check-circle text-2xl text-white"></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="bi bi-people text-2xl text-white"></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="bi bi-headset text-2xl text-white"></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Hours of Support</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="bi bi-person-badge text-2xl text-white"></i>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;