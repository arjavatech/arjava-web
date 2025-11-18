import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img src="/images/img/Arjava Logo.png" alt="Arjava" className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Services</a>
              <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">Projects</a>
              <Link to="/privacy-policy" className="text-sm font-medium text-blue-900 border-b-2 border-blue-900 pb-1">Privacy</Link>
            </div>
            <a href="#contact" className="hidden md:block bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">Contact</a>
            <button onClick={toggleMobileMenu} className="md:hidden p-2">
              <i className="bi bi-list text-2xl text-gray-700"></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Home</Link>
            <a href="#about" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">About</a>
            <a href="#services" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Services</a>
            <a href="#projects" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Projects</a>
            <Link to="/privacy-policy" className="block px-4 py-2 text-sm font-medium bg-blue-50 text-blue-900 rounded-lg">Privacy</Link>
            <a href="#contact" className="block px-4 py-2 text-sm font-medium bg-blue-900 text-white rounded-lg text-center">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-6">
            <i className="bi bi-shield-check mr-2"></i>
            Privacy Policy
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Privacy Matters</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your information.</p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information you provide directly to us, such as when you:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Contact us through our website or email</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage with our customer support</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">This may include your name, email address, phone number, company name, and any other information you choose to provide.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Usage Information</h3>
            <p className="text-gray-600 mb-6">We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on our site.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist us in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
            <p className="text-gray-600 mb-6">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">India Office</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start">
                      <i className="bi bi-geo-alt text-blue-600 mr-2 mt-1"></i>
                      <div>
                        19, Ganesh Nagar Main Road<br />
                        Selaiyur, Chennai - 600073<br />
                        Tamil Nadu, India
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-envelope text-blue-600 mr-2"></i>
                      <a href="mailto:arjavatech@gmail.com" className="text-blue-600 hover:underline">arjavatech@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-telephone text-blue-600 mr-2"></i>
                      <span>044-35675035</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">USA Office</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start">
                      <i className="bi bi-geo-alt text-blue-600 mr-2 mt-1"></i>
                      <div>
                        2135 204th PL NE<br />
                        Sammamish, WA - 98974<br />
                        United States
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold">Arjava Technologies</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">Building innovative software solutions that transform businesses and drive digital success.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <Link to="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Arjava Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;