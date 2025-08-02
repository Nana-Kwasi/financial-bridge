import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'News & Insights', path: '/news' },
        { name: 'Leadership', path: '/leadership' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Investment Banking', path: '/services#investment' },
        { name: 'Asset Management', path: '/services#asset' },
        { name: 'Corporate Finance', path: '/services#corporate' },
        { name: 'Risk Management', path: '/services#risk' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Research Reports', path: '/research' },
        { name: 'Market Analysis', path: '/analysis' },
        { name: 'Financial Tools', path: '/tools' },
        { name: 'Educational Content', path: '/education' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Client Portal', path: '/portal' },
        { name: 'Help Center', path: '/help' },
        { name: 'Privacy Policy', path: '/privacy' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@financialbridge.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Financial District, NY 10001' }
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">FB</span>
                </div>
                <h3 className="text-xl font-bold">Financial Bridge</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connecting global markets with innovative financial solutions. 
                We bridge the gap between opportunity and success through 
                strategic investment and comprehensive financial services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <contact.icon className="w-4 h-4 text-primary-400" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Financial Bridge. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 