import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  Calculator, 
  BookOpen,
  ArrowRight,
  Download,
  ExternalLink
} from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Research Reports',
      description: 'Access our latest market research and industry insights.',
      items: [
        'Q4 2024 Market Outlook',
        'Global Investment Trends',
        'ESG Investment Analysis',
        'Technology Sector Report'
      ]
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      description: 'Comprehensive market analysis and trend reports.',
      items: [
        'Weekly Market Updates',
        'Sector Performance Analysis',
        'Economic Indicators Report',
        'Risk Assessment Analysis'
      ]
    },
    {
      icon: Calculator,
      title: 'Financial Tools',
      description: 'Interactive tools to help with your financial planning.',
      items: [
        'Investment Calculator',
        'Risk Assessment Tool',
        'Portfolio Analyzer',
        'Retirement Planner'
      ]
    },
    {
      icon: BookOpen,
      title: 'Educational Content',
      description: 'Learn about investing and financial markets.',
      items: [
        'Investment Basics Guide',
        'Market Fundamentals',
        'Risk Management Strategies',
        'Advanced Trading Techniques'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive library of research reports, market analysis, 
              financial tools, and educational content to support your investment decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {resource.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {resource.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Access Resources</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Contact our team to access premium research reports and get personalized 
              insights tailored to your investment strategy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg flex items-center space-x-2 mx-auto"
            >
              <span>Contact Our Team</span>
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources; 