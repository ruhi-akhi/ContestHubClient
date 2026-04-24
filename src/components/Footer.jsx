import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUp,
  FiHeart,
  FiAward,
  FiUsers,
  FiTrendingUp
} from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Contests', path: '/all-contests' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'About Us', path: '/about' },
    { name: 'Help Center', path: '/help' }
  ];

  const contestTypes = [
    { name: 'Logo Design', path: '/all-contests?type=logo' },
    { name: 'Web Design', path: '/all-contests?type=web' },
    { name: 'Article Writing', path: '/all-contests?type=writing' },
    { name: 'Photography', path: '/all-contests?type=photo' },
    { name: 'UI/UX Design', path: '/all-contests?type=uiux' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: FiFacebook, 
      url: 'https://www.facebook.com/akhi.akter.751291',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: FiTwitter, 
      url: '#',
      color: 'hover:bg-sky-500'
    },
    { 
      name: 'Instagram', 
      icon: FiInstagram, 
      url: '#',
      color: 'hover:bg-pink-600'
    },
    { 
      name: 'LinkedIn', 
      icon: FiLinkedin, 
      url: 'https://www.linkedin.com/in/akhi-akter-578880396/',
      color: 'hover:bg-blue-700'
    }
  ];

  const stats = [
    { icon: FiUsers, value: '12,500+', label: 'Active Users' },
    { icon: FiAward, value: '3,400+', label: 'Winners' },
    { icon: FiTrendingUp, value: '1,250+', label: 'Contests' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-30"></div>
                  <img
                    src="https://i.ibb.co/7x7MMxyK/log-removebg-preview.png"
                    alt="ContestHub"
                    className="relative h-12 w-auto"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    <span className="gradient-text">Contest</span>
                    <span className="text-white">Hub</span>
                  </h2>
                  <p className="text-gray-400 text-sm">Where creativity meets opportunity</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                The ultimate platform for creative minds to compete, learn, and earn. 
                Join thousands of creators showcasing their talents and winning amazing prizes.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-2 mx-auto">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <FiMail className="w-5 h-5 text-purple-400" />
                  <span>support@contesthub.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiPhone className="w-5 h-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiMapPin className="w-5 h-5 text-purple-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contest Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contest Types</h3>
            <ul className="space-y-3">
              {contestTypes.map((type, index) => (
                <li key={index}>
                  <Link
                    to={type.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {type.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 glass rounded-2xl"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300">Get notified about new contests and exciting opportunities</p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn btn-primary px-6 py-3"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 group`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </motion.a>
              );
            })}
          </div>
          <p className="text-gray-400 text-sm">
            Follow us for updates, tips, and contest announcements
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>&copy; 2025 ContestHub. Made with</span>
              <FiHeart className="w-4 h-4 text-red-500" />
              <span>for creators worldwide.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg z-50 hover:shadow-xl transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FiArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
}
