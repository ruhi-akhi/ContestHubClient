import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const features = [
    { icon: "🎯", title: "Contest Creation", description: "Create and manage contests with ease. Set prizes, deadlines, and requirements." },
    { icon: "👥", title: "Community Driven", description: "Join a vibrant community of creators, designers, and innovators." },
    { icon: "🏆", title: "Fair Competition", description: "Transparent judging process with clear winner selection criteria." },
    { icon: "💰", title: "Real Rewards", description: "Win actual prizes and build your portfolio with meaningful achievements." },
    { icon: "📊", title: "Performance Tracking", description: "Track your progress with detailed analytics and leaderboards." },
    { icon: "🔒", title: "Secure Platform", description: "Your data and payments are protected with enterprise-grade security." }
  ];

  const team = [
    { name: "Alex Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face", bio: "Passionate about connecting creative minds through meaningful competitions." },
    { name: "Sarah Chen", role: "Head of Product", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face", bio: "Designing user experiences that inspire creativity. Former Google UX designer." },
    { name: "Michael Rodriguez", role: "Lead Developer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face", bio: "Building robust, scalable solutions. Full-stack expert with 8+ years experience." },
    { name: "Emily Watson", role: "Community Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face", bio: "Fostering vibrant creator communities and ensuring fair contest experiences." }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "2,500+", label: "Contests Hosted" },
    { number: "$500K+", label: "Prizes Awarded" },
    { number: "50+", label: "Countries" }
  ];

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="py-24 text-center bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1 
            initial={{ y: -20 }} 
            animate={{ y: 0 }} 
       className="text-6xl font-extrabold mb-6 text-black"
          >
            About ContestHub
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We're on a mission to democratize creativity by connecting talented individuals 
            with meaningful opportunities to showcase their skills.
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section with Hover Effect */}
      <div className="py-12 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-1">{stat.number}</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Custom Animated Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-2xl shadow-inner">
              {["mission", "features", "team"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTab" 
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg" 
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "mission" && (
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <span className="bg-blue-100 p-2 rounded-lg">🚀</span> Our Vision
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                      ContestHub levels the playing field by providing a transparent, merit-based 
                      platform where the best ideas win.
                    </p>
                    <ul className="space-y-4">
                      {["Fair and transparent judging", "Real monetary rewards", "Global community access"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-medium">
                          <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs">✓</div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.img 
                    whileHover={{ rotate: 1 }}
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                    className="rounded-2xl shadow-2xl" 
                    alt="Mission" 
                  />
                </div>
              )}

              {activeTab === "features" && (
                <div className="grid md:grid-cols-3 gap-6">
                  {features.map((f, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10 }}
                      className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                    >
                      <div className="text-4xl mb-4">{f.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{f.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "team" && (
                <div className="grid md:grid-cols-4 gap-6">
                  {team.map((member, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-900 p-6 rounded-2xl text-center shadow-md border border-gray-100 dark:border-gray-800"
                    >
                      <img src={member.image} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 dark:border-gray-700 object-cover" alt={member.name} />
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-blue-600 text-sm mb-3 font-semibold">{member.role}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-tight">{member.bio}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        {...fadeInUp}
        className="max-w-6xl mx-auto px-4 pb-24"
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-200 dark:shadow-none">
          <h2 className="text-4xl font-bold mb-4">Ready to Showcase Your Talent?</h2>
          <p className="text-blue-100 mb-8 text-lg">Join thousands of creators who are already winning contests.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold shadow-xl">Get Started Today</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="bg-blue-500/30 backdrop-blur-md border border-blue-400 px-8 py-4 rounded-2xl font-bold">Browse Contests</motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}