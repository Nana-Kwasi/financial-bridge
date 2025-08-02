import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Users, 
  Globe, 
  BarChart3,
  CheckCircle,
  Star,
  Play
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Investment Excellence',
      description: 'Strategic investment solutions tailored to maximize returns and minimize risks.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for your portfolio.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned financial professionals with decades of market experience.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to international markets and diverse investment opportunities.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Advanced analytics and market intelligence to inform your decisions.'
    }
  ];

  const stats = [
    { number: '$50B+', label: 'Assets Under Management' },
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Global Clients' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Financial Bridge transformed our investment strategy. Their expertise and personalized approach exceeded all expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CFO, Global Industries',
      content: 'The team at Financial Bridge consistently delivers exceptional results. Their risk management approach is unmatched.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Portfolio Manager',
      content: 'Working with Financial Bridge has been a game-changer. Their insights and execution are consistently outstanding.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Bridging
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                Financial Success
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with global markets through innovative financial solutions. 
              We bridge the gap between opportunity and success.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-white hover:text-primary-300 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="text-lg">Watch Our Story</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Financial Bridge?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine decades of experience with cutting-edge technology to deliver 
              exceptional financial solutions for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about their experience with Financial Bridge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
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
              Ready to Bridge Your Financial Future?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join thousands of clients who trust Financial Bridge to navigate 
              the complexities of global markets and achieve their financial goals.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                Start Your Journey Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 