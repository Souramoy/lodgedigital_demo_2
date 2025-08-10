import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About <span className="font-bold text-amber-600">LodgeDigital</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We specialize in creating stunning, modern websites for hospitality businesses that currently have no online presence. 
            Our comprehensive solution includes everything you need to establish a professional digital identity that drives bookings and grows your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-600 p-3 rounded-full">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Every website is crafted with attention to detail, featuring professional photography, 
                  modern design, and optimized performance that reflects your property's luxury.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-600 p-3 rounded-full">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Service</h3>
                <p className="text-gray-600">
                  From domain registration to ongoing maintenance, we handle everything. 
                  Focus on your guests while we take care of your digital presence.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-600 p-3 rounded-full">
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Results</h3>
                <p className="text-gray-600">
                  Get online quickly with our streamlined process. Most properties see their 
                  new website live within 2-3 weeks of starting the project.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-600/10 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-amber-600/20">
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern hotel interior"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-4 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">5★</div>
                <div className="text-sm font-medium">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;