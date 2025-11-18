import React from 'react';

const Founders = () => {
  const founders = [
    {
      name: "Palani Vairavan",
      position: "Founder & CEO",
      image: "/images/img/gallery/palanianna.jpeg"
    },
    {
      name: "Saravanan Arumugam", 
      position: "Manager",
      image: "/images/img/gallery/Saravanan.png"
    },
    {
      name: "Karthikeyan Rajendran",
      position: "Co-Founder & CEO", 
      image: "/images/img/gallery/KarthikAnna.png"
    },
    {
      name: "Amrish KS",
      position: "CTO",
      image: "/images/img/gallery/amrishannapic.png"
    },
    {
      name: "Pitchaimani Rajaram",
      position: "CTO/ Senior Developer",
      image: "/images/img/gallery/manianna1.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Our Founders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>Meet the visionary leaders who founded Arjava and continue to drive innovation and excellence.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 xl:gap-6 max-w-7xl mx-auto md:flex-row flex-col">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card bg-white rounded-3xl shadow-lg p-8 text-center w-60 h-80 flex flex-col justify-center items-center md:w-56 md:h-72 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="founder-image w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-white shadow-lg md:w-24 md:h-24 transition-all duration-300">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover transition-transform duration-300" />
              </div>
              <h3 className="founder-name text-xl font-bold text-gray-900 mb-2 md:text-lg transition-colors duration-300">{founder.name}</h3>
              <p className="text-sm text-gray-600 font-medium">{founder.position}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-3xl transform scale-x-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .founder-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
          transform: scaleX(0);
          transition: transform 0.5s ease;
          border-radius: 0 0 20px 20px;
        }
        
        .founder-card:hover::after {
          transform: scaleX(1);
        }
        
        .founder-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .founder-card:hover .founder-name {
          color: #3b82f6;
        }
        
        .founder-card:hover .founder-image {
          transform: scale(1.05);
        }
        
        .founder-card:hover .founder-image img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Founders;