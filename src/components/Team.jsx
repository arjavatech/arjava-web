import { useEffect } from 'react';
import AOS from 'aos';

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      avatar: 'JS',
      bio: 'Visionary leader with 10+ years in tech industry driving innovation and growth.',
      color: 'bg-purple-500',
      number: '01'
    },
    {
      name: 'Sarah Wilson',
      role: 'CTO',
      avatar: 'SW',
      bio: 'Expert in software architecture and development with passion for cutting-edge technology.',
      color: 'bg-orange-500',
      number: '02'
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      avatar: 'MJ',
      bio: 'Full-stack developer passionate about innovation and creating exceptional user experiences.',
      color: 'bg-red-500',
      number: '03'
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      avatar: 'ED',
      bio: 'Creative designer focused on user experience and modern interface design principles.',
      color: 'bg-blue-500',
      number: '04'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-6">
            👥 Our Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results for every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Profile Photo Section */}
              <div className="relative h-48 bg-gray-100 rounded-t-xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-xl flex items-center justify-center group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-2xl">
                      {member.avatar}
                    </span>
                  </div>
                </div>
                
                {/* Ribbon Banner */}
                <div className={`absolute bottom-0 right-0 ${member.color} h-12 flex items-center px-4 transform translate-y-2 rounded-l-full pr-6 group-hover:translate-y-1 transition-all duration-300`} style={{width: '85%'}}>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-gray-800 font-bold text-sm">{member.number}</span>
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold text-sm leading-tight">{member.name}</h3>
                    <p className="text-xs opacity-90">{member.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="p-6 pt-8">
                <h4 className={`font-bold text-sm mb-3 ${member.color.replace('bg-', 'text-')}`}>
                  About Me
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;