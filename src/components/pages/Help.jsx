import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Mail, Clock, Globe, ArrowRight, HelpCircle } from "lucide-react";

export default function Help() {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "getting-started", name: "Getting Started", icon: "🚀" },
    { id: "contests", name: "Contests", icon: "🎯" },
    { id: "payments", name: "Payments & Prizes", icon: "💰" },
    { id: "account", name: "Account & Profile", icon: "👤" },
    { id: "technical", name: "Technical Support", icon: "🔧" }
  ];

  const faqs = {
    "getting-started": [
      { question: "How do I get started on ContestHub?", answer: "Simply create an account by clicking 'Register' and filling out your profile. Once registered, you can browse contests, participate in competitions, and even create your own contests if you're a creator." },
      { question: "What types of contests are available?", answer: "We offer various contest types including Logo Design, Web Design, Article Writing, Photography, UI/UX Design, and more." }
    ],
    "contests": [
      { question: "How do I participate in a contest?", answer: "Find a contest you're interested in, read the requirements carefully, pay the participation fee, and submit your entry before the deadline." },
      { question: "How do I create my own contest?", answer: "Creators can create contests by going to their dashboard, clicking 'Create Contest', and filling out all required information." }
    ],
    "payments": [
      { question: "How do I receive my prize money?", answer: "Prize money is typically transferred to your account within 5-7 business days after being declared the winner." }
    ],
    "account": [
      { question: "How do I update my profile information?", answer: "Go to your Dashboard, click on 'My Profile', and you can update your name, photo, bio, and other information." }
    ],
    "technical": [
      { question: "What file formats are accepted for submissions?", answer: "Accepted formats vary by contest. Generally, we accept JPG, PNG, PDF, DOC, and zip files for larger projects." }
    ]
  };

  // Search Logic
  const allFaqs = Object.values(faqs).flat();
  const filteredFaqs = searchQuery 
    ? allFaqs.filter(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()))
    : faqs[activeCategory];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-red-500/30">
      
      {/* Dynamic Header with Search */}
      <div className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-red-600/10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 shadow-xl"
          >
            <HelpCircle size={18} className="text-red-500" />
            <span className="text-sm font-semibold uppercase tracking-wider">Help Center</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
         How can we <span className="text-black">help you?</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl mx-auto group"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search for answers (e.g. 'how to win', 'payment')..."
              className="w-full pl-16 pr-8 py-6 bg-white dark:bg-gray-900 border-none rounded-2xl shadow-2xl focus:ring-4 focus:ring-red-500/20 transition-all text-lg outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Sidebar - Category Picker */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white dark:border-gray-800 sticky top-10">
              <h3 className="text-lg font-bold px-4 mb-4">Support Topics</h3>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setSearchQuery(""); }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-medium ${
                      activeCategory === cat.id && !searchQuery
                        ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30 scale-[1.02]"
                        : "hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-500"
                    }`}
                  >
                    <span className="text-xl">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content - FAQ List */}
          <div className="lg:col-span-8">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                {searchQuery ? "Search Results" : categories.find(c => c.id === activeCategory)?.name}
                <div className="h-1 flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-gray-800 ml-4 rounded-full" />
              </h2>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={`${activeCategory}-${index}`}
                      className={`border border-slate-200 dark:border-gray-800 rounded-2xl transition-all ${
                        openFaq === index ? "bg-white dark:bg-gray-900 shadow-xl ring-1 ring-red-500/20" : ""
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="font-bold text-lg leading-tight">{faq.question}</span>
                        <motion.div
                          animate={{ rotate: openFaq === index ? 180 : 0 }}
                          className="p-2 bg-slate-100 dark:bg-gray-800 rounded-full"
                        >
                          <ChevronDown size={18} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
                              "{faq.answer}"
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Quick Contact Section */}
      <div className="py-24 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Mail className="text-blue-500" />, title: "Email Us", detail: "support@contesthub.com", desc: "Get detailed help" },
            { icon: <Clock className="text-orange-500" />, title: "Quick Response", detail: "Under 24 hours", desc: "Average turnaround" },
            { icon: <Globe className="text-green-500" />, title: "Global Support", detail: "24/7 Available", desc: "Across all timezones" }
          ].map((item, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-gray-800 text-center"
            >
              <div className="w-16 h-16 bg-slate-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="font-black text-xl mb-2">{item.title}</h3>
              <p className="text-red-600 font-bold mb-2">{item.detail}</p>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-900 dark:bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Can't find what you need?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-red-600 text-white rounded-2xl font-black shadow-2xl shadow-red-500/40 flex items-center gap-2"
            >
              Contact Live Support <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}