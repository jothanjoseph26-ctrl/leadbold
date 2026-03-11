
import React from 'react';
import { Linkedin, Twitter, Mail, ArrowUp, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 col-span-2">
            <div className="flex items-center space-x-2">
              <img src="/Leadbold-logo.png" alt="LeadBold" className="h-10 w-auto" />
              <span className="text-2xl font-semibold tracking-tight serif">LEADBOLD</span>
            </div>
            <p className="text-white/40 max-w-md leading-relaxed text-lg font-light">
              Transforming the continent by convening and developing the next generation of institutional leaders. Our framework combines global expertise with deep localized insights.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3 text-white/40 text-sm italic">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-none mt-1" />
                <span>House 10, Road 111, Efab Estate, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <Globe className="w-5 h-5 text-[#D4AF37] flex-none" />
                <a href="https://leadboldconsulting.co.uk" className="hover:text-[#D4AF37] transition-colors">leadboldconsulting.co.uk</a>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="p-3 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all rounded-full"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all rounded-full"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:info@leadboldconsulting.co.uk" className="p-3 bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all rounded-full"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#consulting" className="hover:text-white transition-colors">Strategic Advisory</a></li>
              <li><a href="#schools" className="hover:text-white transition-colors">Leadership Schools</a></li>
              <li><a href="#summits" className="hover:text-white transition-colors">Convenings</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Research & Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Institutional</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ethics & Governance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Engagement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Annual Report</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-xs uppercase tracking-widest font-semibold">
            &copy; {new Date().getFullYear()} LeadBold Institutional Platform. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#D4AF37]"
          >
            Back to Top <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
