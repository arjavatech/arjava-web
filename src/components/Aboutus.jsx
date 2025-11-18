import { useEffect } from 'react';
import AOS from 'aos';

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: 'bi-code-slash',
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.'
    },
    {
      icon: 'bi-phone',
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: 'bi-cloud',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Security First',
      description: 'Enterprise-grade security measures in all our solutions.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">
              About Us
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We Build Software That Matters
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Arjava Technologies, we specialize in creating innovative software solutions 
              that help businesses grow and succeed in the digital age. Our team of expert 
              developers and designers work closely with clients to deliver exceptional results.
            </p>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More About Us
            </button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-blue-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;