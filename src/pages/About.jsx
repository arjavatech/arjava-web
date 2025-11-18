import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img src="/images/img/Arjava Logo.png" alt="Arjava" className="h-10 w-29" />
            </Link>
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
                <Link to="/about" className="text-sm font-medium text-blue-900 border-b-2 border-blue-900 pb-1">About</Link>
                <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Services</Link>
                <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Projects</Link>
              </div>
            </div>
            <Link to="/contact" className="hidden md:block bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">Contact</Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full -translate-y-1"></span>
                <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full my-0.5 opacity-100"></span>
                <span className="hamburger-line bg-gray-700 block transition-all duration-300 h-0.5 w-6 rounded-full translate-y-1"></span>
              </div>
            </button>
          </div>
        </div>
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-100`}>
          <div className="px-6 py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-lg">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-sm font-medium text-blue-900 bg-blue-50 rounded-lg">About</Link>
            <Link to="/services" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-lg">Services</Link>
            <Link to="/products" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-lg">Projects</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm font-medium bg-blue-900 text-white rounded-lg text-center">Contact</Link>
          </div>
        </div>
      </nav>

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

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
        padding: '60px 0 30px',
        margin: 0
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px'
                }}>
                  <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>A</span>
                </div>
                <span style={{
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>Arjava</span>
              </div>
              <p style={{
                color: '#cbd5e1',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>Building innovative software solutions that transform businesses and drive digital success.</p>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                color: 'white'
              }}>Quick Links</h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <Link to="/" style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>Home</Link>
                <Link to="/about" style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>About Us</Link>
                <Link to="/services" style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>Services</Link>
                <Link to="/products" style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>Projects</Link>
                <Link to="/contact" style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                color: 'white'
              }}>Contact Info</h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}>
                  <i className="bi bi-geo-alt" style={{
                    color: '#3b82f6',
                    marginTop: '2px'
                  }}></i>
                  <div style={{
                    color: '#cbd5e1',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    19, Ganesh Nagar Main Road,<br />
                    Selaiyur, Chennai - 600073
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <i className="bi bi-envelope" style={{
                    color: '#3b82f6'
                  }}></i>
                  <a href="mailto:arjavatech@gmail.com" style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    fontSize: '14px'
                  }}>arjavatech@gmail.com</a>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <i className="bi bi-telephone" style={{
                    color: '#3b82f6'
                  }}></i>
                  <span style={{
                    color: '#cbd5e1',
                    fontSize: '14px'
                  }}>044-35675035</span>
                </div>
              </div>
            </div>
            
          </div>
          
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '20px',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#94a3b8',
              fontSize: '14px',
              margin: '0'
            }}>&copy; 2024 Arjava Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;