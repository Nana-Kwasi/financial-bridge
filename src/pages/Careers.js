import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Globe, 
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions' },
    { id: 'investment', name: 'Investment Banking' },
    { id: 'technology', name: 'Technology' },
    { id: 'operations', name: 'Operations' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Investment Analyst',
      department: 'Investment Banking',
      category: 'investment',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'We are seeking a Senior Investment Analyst to join our dynamic team. You will be responsible for conducting comprehensive financial analysis, market research, and investment recommendations.',
      requirements: [
        'Bachelor\'s degree in Finance, Economics, or related field',
        '5+ years of experience in investment analysis',
        'Strong analytical and quantitative skills',
        'Proficiency in financial modeling and Excel',
        'Excellent communication and presentation skills'
      ],
      benefits: [
        'Competitive salary and bonus structure',
        'Comprehensive health benefits',
        '401(k) matching program',
        'Professional development opportunities',
        'Flexible work arrangements'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Technology',
      category: 'technology',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100,000 - $150,000',
      description: 'Join our technology team to build innovative financial solutions. You will work on cutting-edge applications that power our global operations.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of experience in full-stack development',
        'Proficiency in React, Node.js, and Python',
        'Experience with cloud platforms (AWS/Azure)',
        'Knowledge of financial systems and APIs'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Health, dental, and vision insurance',
        'Unlimited PTO',
        'Home office setup allowance',
        'Continuous learning budget'
      ]
    },
    {
      id: 3,
      title: 'Operations Manager',
      department: 'Operations',
      category: 'operations',
      location: 'London, UK',
      type: 'Full-time',
      experience: '7+ years',
      salary: '£80,000 - £120,000',
      description: 'Lead our operations team in London and ensure smooth execution of all business processes across our European operations.',
      requirements: [
        'Bachelor\'s degree in Business Administration or related field',
        '7+ years of experience in financial operations',
        'Strong leadership and team management skills',
        'Experience with regulatory compliance',
        'Excellent problem-solving abilities'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Private health insurance',
        'Pension scheme',
        'Professional development programs',
        'Relocation assistance'
      ]
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      department: 'Marketing',
      category: 'marketing',
      location: 'Singapore',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'SGD 80,000 - 120,000',
      description: 'Drive our marketing initiatives in the Asia-Pacific region and help build our brand presence across key markets.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '3+ years of experience in B2B marketing',
        'Experience in financial services marketing',
        'Strong digital marketing skills',
        'Fluent in English and Mandarin preferred'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health coverage',
        'Annual leave and public holidays',
        'Professional development opportunities',
        'Flexible work arrangements'
      ]
    }
  ];

  const cultureValues = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster an environment where diverse perspectives drive innovation.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, continuously pushing boundaries and setting new standards.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards and build trust through transparency and honesty.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to stay ahead of the curve and deliver cutting-edge solutions.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We value diverse perspectives and global experience, creating a rich and inclusive workplace.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We invest in our people\'s development and provide opportunities for continuous learning and advancement.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance-based bonuses and equity options.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage for you and your family.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, training programs, and professional certifications.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, generous PTO, and remote work options.'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Regular team events, social activities, and networking opportunities.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Employee recognition programs and career advancement opportunities.'
    }
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeFilter);

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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Build your career with a global leader in financial services. We're looking for 
              passionate individuals who want to make a difference in the world of finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
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
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and excellence where 
              every team member can thrive and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
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

      {/* Benefits Section */}
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
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our people. Here's what we offer to support 
              your success and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role for your next career move.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jobCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <Star className="w-4 h-4 text-accent-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No positions available in this category at the moment. 
                Please check back later or contact us for future opportunities.
              </p>
            </motion.div>
          )}
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
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg flex items-center space-x-2 mx-auto"
            >
              <span>Submit Your Resume</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 