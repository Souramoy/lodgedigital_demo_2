import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
                Premium Digital Solutions
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight text-gray-900">
              THE<br />
              <span className="font-bold text-amber-600">PERFECT</span><br />
              WEBSITE<span className="text-2xl align-top">®</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 font-light">
              / We craft custom websites /
            </p>
            
            <button
              onClick={scrollToContact}
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              START
            </button>
          </div>

          {/* Right Content - Interactive Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Top Tags */}
              <div className="flex gap-3 mb-6">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Interior
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Design
                </span>
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  3D
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Unique design &<br />ergonomics
              </h3>
              
              <p className="text-gray-600 mb-6">
                From blueprints to renders.
              </p>

              {/* Property Image */}
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern hotel property"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <Play className="text-amber-600" size={16} />
                    <span className="text-sm font-medium text-gray-700">ROOMTOUR</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-amber-600 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">12m+</div>
                    <div className="text-sm text-gray-600">Customers</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    WE CAN COMBINE<br />
                    NATURE & HOME<br />
                    COMFORT
                  </div>
                  <button className="text-sm font-medium text-gray-700 underline hover:text-amber-600 transition-colors">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-amber-600 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="font-bold mb-2">We use best materials!</h4>
              <p className="text-sm text-amber-100 mb-4">Working with verified suppliers.</p>
              <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;