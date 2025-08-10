import React from 'react';
import { Search, Smartphone, Camera, Server, Wrench, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Rank higher on Google with our proven SEO strategies tailored for hospitality businesses.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Beautiful websites that look perfect on every device, from phones to desktops.'
    },
    {
      icon: Camera,
      title: 'Professional Media',
      description: 'High-quality photography and videography that showcases your property at its best.'
    },
    {
      icon: Server,
      title: 'Hosting & Domain',
      description: 'One year of premium hosting and domain registration included with every package.'
    },
    {
      icon: Wrench,
      title: 'Full Maintenance',
      description: '24/7 support and regular updates to keep your website secure and running smoothly.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Lightning-fast loading speeds that improve user experience and search rankings.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our <span className="font-bold text-amber-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Everything you need to establish a powerful online presence for your hospitality business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200 hover:border-amber-600/50"
            >
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600/10 to-amber-600/5 p-8 rounded-2xl border border-amber-600/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Package Deal</h3>
            <p className="text-gray-600 mb-6">
              Get all these services bundled together at an unbeatable price. No hidden fees, no surprise charges.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Your Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;