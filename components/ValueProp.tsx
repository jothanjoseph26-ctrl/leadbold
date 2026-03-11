
import React from 'react';
import { COLORS } from '@/constants';

const ValueProp: React.FC = () => {
  return (
    <section className="py-32 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        {/* Left Side: The Message */}
        <div className="lg:w-1/2 space-y-8">
          <div className="relative">
            <span className="absolute -top-10 -left-6 text-9xl serif text-[#D4AF37]/10 pointer-events-none">“</span>
            <h2 className="text-5xl md:text-6xl text-[#050505] serif leading-tight">
              Africa's Leadership Gap Demands More Than Traditional Training
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
            <p>
              Traditional leadership development focuses on individuals. We focus on systems. While others teach frameworks, we build institutional capacity. 
            </p>
            <div className="pl-6 border-l-2 border-[#D4AF37] italic text-slate-800">
              LeadBold exists because Africa's most complex challenges require leaders who think systematically, act strategically, and build institutionally.
            </div>
            <p>
              Where consultancies extract insight, we transfer capability. As training companies certify attendance, we measure transformation. Our frameworks shape policy and develop leaders at the highest levels of governance.
            </p>
          </div>
        </div>

        {/* Right Side: Visual Illustration */}
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
             <img 
               src="/company.jpg" 
               className="w-full aspect-[4/5] object-cover rounded shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700" 
               alt="LeadBold Institutional Excellence" 
             />
             <img 
               src="/download.jpg" 
               className="w-full aspect-[4/5] object-cover rounded shadow-2xl mt-12 transform -rotate-1 hover:rotate-0 transition-transform duration-700" 
               alt="Strategic Advisory" 
               onError={(event) => {
                 event.currentTarget.src = '/company.jpg';
               }}
             />
          </div>
          <div className="absolute inset-0 border-2 border-[#D4AF37]/20 translate-x-4 translate-y-4 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
