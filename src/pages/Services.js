import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('investment');

  const services = [
    {
      id: 'investment',
      title: 'Investment Banking',
      icon: TrendingUp,
      description: 'Comprehensive investment banking services for corporations and institutions.',
      features: [
        'Mergers & Acquisitions',
        'Capital Raising',
        'Strategic Advisory',
        'Debt & Equity Financing',
        'IPO & Secondary Offerings',
        'Restructuring & Turnaround'
      ],
      benefits: [
        'Access to global capital markets',
        'Expert deal structuring',
        'Comprehensive due diligence',
        'Strategic valuation analysis'
      ]
    },
    {
      id: 'asset',
      title: 'Asset Management',
      icon: BarChart3,
      description: 'Professional portfolio management and investment advisory services.',
      features: [
        'Portfolio Management',
        'Risk Assessment',
        'Asset Allocation',
        'Performance Monitoring',
        'Tax Optimization',
        'ESG Investing'
      ],
      benefits: [
        'Diversified investment strategies',
        'Regular performance reviews',
        'Tax-efficient solutions',
        'Sustainable investment options'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Finance',
      icon: Users,
      description: 'Strategic financial solutions for corporate growth and optimization.',
      features: [
        'Financial Planning',
        'Cash Flow Management',
        'Working Capital Optimization',
        'Treasury Services',
        'Financial Risk Management',
        'Strategic Planning'
      ],
      benefits: [
        'Improved financial efficiency',
        'Enhanced cash flow visibility',
        'Reduced financial risks',
        'Strategic growth support'
      ]
    },
    {
      id: 'risk',
      title: 'Risk Management',
      icon: Shield,
      description: 'Comprehensive risk assessment and mitigation strategies.',
      features: [
        'Risk Assessment',
        'Compliance Management',
        'Internal Controls',
        'Audit Services',
        'Regulatory Reporting',
        'Crisis Management'
      ],
      benefits: [
        'Proactive risk identification',
        'Regulatory compliance',
        'Enhanced operational efficiency',
        'Protection of assets'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Robert Kim',
      role: 'CFO, Tech Innovations Inc.',
      content: 'Financial Bridge\'s investment banking team helped us secure $50M in funding. Their expertise and market knowledge were invaluable.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Portfolio Manager, Global Investments',
      content: 'Their asset management services have consistently outperformed benchmarks while maintaining excellent risk management.',
      rating: 5
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your unique financial needs and conducting comprehensive market analysis.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our experts develop tailored strategies that align with your goals and risk tolerance.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute your strategy with precision, leveraging our global network and expertise.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization ensure your strategy remains effective and aligned with market conditions.'
    }
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive financial solutions designed to bridge the gap between 
              your current position and your financial goals. We offer expertise 
              across all major financial disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeTab === service.id ? 1 : 0,
                  y: activeTab === service.id ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
                className={`${activeTab === service.id ? 'block' : 'hidden'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Benefits
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <motion.li
                              key={benefit}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="flex items-center space-x-3"
                            >
                              <Star className="w-5 h-5 text-accent-600 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">
                      Why Choose Our {service.title}?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Award className="w-6 h-6" />
                        <span>25+ years of experience</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-6 h-6" />
                        <span>Global market access</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Zap className="w-6 h-6" />
                        <span>Cutting-edge technology</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-6 h-6" />
                        <span>Expert team support</span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional financial solutions 
              tailored to your unique needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our clients about how our services have transformed their 
              financial outcomes and business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-accent-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your financial goals. 
              Our experts are ready to provide personalized solutions for your needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg flex items-center space-x-2 mx-auto"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 