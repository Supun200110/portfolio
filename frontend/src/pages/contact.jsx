import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

const contactInfo = [
  {
    icon: <MapPin className="text-secondary" />,
    label: 'Address',
    value: 'Panagoda, Sri Lanka',
    color: 'from-blue-500/10 to-transparent'
  },
  {
    icon: <Phone className="text-secondary" />,
    label: 'WhatsApp',
    value: '077-6460118',
    color: 'from-green-500/10 to-transparent'
  },
  {
    icon: <Mail className="text-secondary" />,
    label: 'Email',
    value: 'supunnishantha45@gmail.com',
    color: 'from-purple-500/10 to-transparent'
  },
  {
    icon: <FaLinkedin className="text-secondary" />,
    label: 'LinkedIn',
    value: 'Supun Nishantha Silva',
    color: 'from-blue-600/10 to-transparent'
  },
  {
    icon: <FaInstagram className="text-secondary" />,
    label: 'Instagram',
    value: 'Supun De Silva',
    color: 'from-pink-500/10 to-transparent'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden py-24 px-6 md:px-12 mt-16 font-outfit">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none text-white font-bold opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none text-white font-bold opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Contact <span className="text-primary italic">Me</span></h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className={`flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md hover:border-primary/30 transition-all duration-300 group bg-gradient-to-br ${info.color}`}
              >
                <div className="p-4 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/5">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">{info.label}</h4>
                  <p className="text-white font-bold text-lg">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 md:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">First Name</label>
                  <input 
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                    placeholder=""
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Last Name</label>
                  <input 
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Your Email</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                  placeholder="example@.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Your Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-slate-600"
                  placeholder="How can I help you?"
                />
              </div>

              <button 
                disabled={status === 'loading'}
                className="w-full h-16 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] rounded-full text-white font-black text-lg shadow-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : status === 'success' ? (
                  'Message Sent Successfully!'
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}