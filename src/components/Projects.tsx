import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Mountain View Resort',
      description: 'A luxury mountain resort featuring breathtaking views and premium amenities. Complete redesign with booking system integration.',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Resort',
      rating: 5,
      link: '#'
    },
    {
      title: 'Coastal Boutique Hotel',
      description: 'Elegant seaside hotel with modern amenities. Responsive design optimized for mobile booking experience.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Hotel',
      rating: 5,
      link: '#'
    },
    {
      title: 'Urban Gourmet Restaurant',
      description: 'Fine dining establishment in the heart of the city. Features online reservations and dynamic menu display.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Restaurant',
      rating: 5,
      link: '#'
    },
    {
      title: 'Countryside Inn',
      description: 'Charming countryside retreat with rustic elegance. Showcases local attractions and seasonal packages.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Inn',
      rating: 5,
      link: '#'
    },
    {
      title: 'Beachfront Villa Resort',
      description: 'Exclusive beachfront property with private villas. Features virtual tours and concierge booking system.',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Resort',
      rating: 5,
      link: '#'
    },
    {
      title: 'Historic Downtown Hotel',
      description: 'Restored historic hotel blending classic charm with modern comfort. Includes event booking capabilities.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Hotel',
      rating: 5,
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our <span className="font-bold text-amber-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            See how we've transformed hospitality businesses with stunning, conversion-focused websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-200 hover:border-amber-600/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-600 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {project.description}
                </p>

                <button 
                  className="mt-4 text-amber-600 hover:text-amber-700 font-semibold flex items-center space-x-2 transition-colors"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600/10 to-amber-600/5 p-8 rounded-2xl border border-amber-600/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6">
              Let's create a stunning website that drives bookings and grows your hospitality business.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;