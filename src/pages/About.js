import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Target, 
  Heart, 
  Shield, 
  Users, 
  Globe,
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards and transparency in all our relationships.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships based on trust, reliability, and consistent performance.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve shared success.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing new technologies and approaches to stay ahead of market trends.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Fostering sustainable growth for our clients, team, and communities.'
    }
  ];

  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'Financial Bridge established with a vision to bridge global financial markets.' },
    { year: '2005', title: 'Global Expansion', description: 'Opened offices in London, Tokyo, and Singapore to serve international clients.' },
    { year: '2010', title: 'Technology Innovation', description: 'Launched proprietary trading platform and risk management systems.' },
    { year: '2015', title: 'Market Leadership', description: 'Became one of the top 10 investment firms in the Asia-Pacific region.' },
    { year: '2020', title: 'Digital Transformation', description: 'Complete digital transformation with AI-powered investment strategies.' },
    { year: '2024', title: 'Future Forward', description: 'Leading the industry with sustainable investing and ESG initiatives.' }
  ];

  const team = [
    {
      name: 'David Chen',
      role: 'Chief Executive Officer',
      experience: '25+ years in global finance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Williams',
      role: 'Chief Investment Officer',
      experience: '20+ years in portfolio management',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      experience: '15+ years in fintech innovation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Johnson',
      role: 'Chief Risk Officer',
      experience: '18+ years in risk management',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const achievements = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '$50B+', label: 'Assets Under Management' },
    { number: '500+', label: 'Global Clients' },
    { number: '98%', label: 'Client Retention Rate' },
    { number: '15+', label: 'Industry Awards' },
    { number: '50+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Financial Bridge
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 25 years, we've been connecting global markets with innovative financial solutions. 
              Our mission is to bridge the gap between opportunity and success, helping clients navigate 
              the complexities of today's financial landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower individuals and institutions with innovative financial solutions that drive 
                sustainable growth and create lasting value in an ever-evolving global market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Deliver exceptional investment returns</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Provide comprehensive risk management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Foster long-term client relationships</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be the world's most trusted financial bridge, connecting opportunities across 
                global markets while maintaining the highest standards of integrity and innovation.
              </p>
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
                <p className="text-primary-100">
                  We envision a world where financial success is accessible to all, 
                  regardless of geographic boundaries or market conditions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our culture of excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global leadership, here's our story of growth and innovation.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-accent-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Numbers that tell the story of our success and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders who drive our success and shape the future of finance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-600 font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm">
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 