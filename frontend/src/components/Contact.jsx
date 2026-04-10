import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className="py-24 px-6 relative z-10 border-t border-slate-800/50 bg-[#0b1120]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
            <p className="text-slate-400 text-lg mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-4 bg-card rounded-full border border-slate-700">
                <Mail className="text-secondary" />
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-slate-400">hello@developer.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-card/60 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-md"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
