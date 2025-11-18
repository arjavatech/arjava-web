import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 'brightbrains', title: 'Bright Brains', category: 'app', type: 'Mobile App', image: '/images/img/gallery/bbrain.jpeg', description: 'An innovative app that boosts brain power through engaging games and cognitive challenges', features: ['Brain Training Games', 'Memory Exercises', 'Progress Tracking', 'Cognitive Challenges', 'User Analytics'] },
    { id: 'tnngo', title: 'TN-NGO', category: 'website', type: 'Education', image: '/images/img/gallery/tnngo.png', description: 'Connecting NGOs with students to provide quality education and learning opportunities', features: ['NGO Registration', 'Student Enrollment', 'Resource Management', 'Progress Tracking', 'Community Features'] },
    { id: 'goddard', title: 'Goddard', category: 'webapp', type: 'Web App', image: '/images/img/gallery/goddardnew.png', description: 'Comprehensive web application for daycare school management and operations', features: ['Student Management', 'Parent Portal', 'Staff Scheduling', 'Activity Tracking', 'Billing System'] },
    { id: 'findbed', title: 'FindBed', category: 'webapp', type: 'Healthcare', image: '/images/img/gallery/findabednew.png', description: 'Healthcare bed booking platform', features: ['Real-time Availability', 'Hospital Network', 'Booking System', 'Patient Records', 'Emergency Services'] },
    { id: 'sorting', title: 'Sorting Analysis', category: 'webapp', type: 'Analytics', image: '/images/img/gallery/sortingnew.png', description: 'Advanced sorting algorithm analysis and visualization tool', features: ['Algorithm Visualization', 'Performance Analysis', 'Interactive Learning', 'Comparison Tools', 'Educational Content'] },
    { id: 'mugavari', title: 'Mugavari', category: 'webapp', type: 'Foundation', image: '/images/img/gallery/mugavarinew.png', description: 'Web application for Mugavari Foundation to manage their charitable activities and community outreach', features: ['Donation Management', 'Volunteer Portal', 'Event Organization', 'Impact Tracking', 'Community Engagement'] },
    { id: 'rattham', title: 'Rattham Udhavi', category: 'app', type: 'Healthcare', image: '/images/img/gallery/raththam1.png', description: 'Blood donation management system that connects donors with recipients', features: ['Donor Registration', 'Blood Bank Management', 'Emergency Requests', 'Inventory Tracking', 'Mobile Notifications'] },
    { id: 'sehatuka', title: 'SehatUka', category: 'app', type: 'Healthcare', image: '/images/img/gallery/sehatuka.png', description: 'Health monitoring application', features: ['Health Tracking', 'Doctor Consultation', 'Medication Reminders', 'Fitness Goals', 'Health Reports'] },
    { id: 'grit', title: 'Grit', category: 'website', type: 'Analytics', image: '/images/img/gallery/grit-web-design.jpg', description: 'Performance tracking system', features: ['Performance Analytics', 'Goal Setting', 'Progress Monitoring', 'Data Visualization', 'Reporting Tools'] },
    { id: 'bharathi', title: 'Bharathi Tamil Academy', category: 'website', type: 'Education', image: '/images/img/gallery/barathi.png', description: 'Bharathi Tamil Academy, nonprofit organization teaching Tamil in the Redmond', features: ['Language Classes', 'Cultural Programs', 'Student Portal', 'Progress Tracking', 'Community Events'] }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 mb-6">
            🚀 Our Portfolio
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">All Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">Explore our complete collection of innovative solutions and successful projects.</p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button onClick={() => setFilter('all')} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'all' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-900'}`}>All</button>
            <button onClick={() => setFilter('app')} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'app' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-900'}`}>Mobile App</button>
            <button onClick={() => setFilter('website')} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'website' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-900'}`}>Website</button>
            <button onClick={() => setFilter('webapp')} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'webapp' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-900'}`}>Web App</button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredProjects.map(project => (
              <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 break-inside-avoid mb-6">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300" />
                  <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                    {project.type}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
                        <i className="bi bi-link-45deg mr-2"></i>Live Demo
                      </button>
                      <button onClick={() => setSelectedProject(project)} className="bg-blue-500/80 backdrop-blur-md border border-blue-400/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600/80 transition-colors duration-200 flex items-center">
                        <i className="bi bi-info-circle mr-2"></i>Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors">
                <i className="bi bi-x-lg"></i>
              </button>
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto max-h-96 object-contain rounded-t-2xl bg-gray-50" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium">
                  {selectedProject.type}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{selectedProject.description}</p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <i className="bi bi-check-circle text-green-500 mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    <i className="bi bi-link-45deg mr-2"></i>Live Demo
                  </button>
                  <button onClick={() => setSelectedProject(null)} className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default ProjectsPage;