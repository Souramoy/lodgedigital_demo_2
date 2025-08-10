import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@lodgedigital.com?subject=Website Inquiry&body=Hi LodgeDigital team,%0D%0A%0D%0AI\'m interested in creating a website for my property. Please contact me to discuss the details.%0D%0A%0D%0AProperty Type: %0D%0ALocation: %0D%0AContact Number: %0D%0A%0D%0AThank you!';
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Get <span className="font-bold text-amber-600">Started</span> Today
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Ready to transform your hospitality business with a stunning website? 
            Let's discuss your project and get you online quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-600/10 to-amber-600/5 p-8 rounded-2xl border border-amber-600/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Discuss Your Project</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We'd love to hear about your property and how we can help you establish a powerful online presence. 
                Our team is ready to create something amazing together.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Email</div>
                    <div className="text-gray-600">hello@lodgedigital.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Phone</div>
                    <div className="text-gray-600">+91 6294516326</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Location</div>
                    <div className="text-gray-600">Pandua , Hooghly , 712149</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">Response Time</div>
                    <div className="text-gray-600">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {[
                  'Custom responsive website design',
                  'Professional photography & videography',
                  'SEO optimization for local search',
                  '1 year domain & premium hosting',
                  '24/7 support & maintenance',
                  'Mobile-first responsive design',
                  'Fast loading & performance optimization',
                  'Content management system'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleEmailClick}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
              >
                <Mail className="inline mr-2" size={20} />
                Send Us an Email
              </button>
              
              <p className="text-gray-600 mt-4 text-sm">
                We'll respond within 24 hours with a custom quote for your project.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">100+</div>
            <div className="text-gray-600">Websites Delivered</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">2-3</div>
            <div className="text-gray-600">Weeks to Launch</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;