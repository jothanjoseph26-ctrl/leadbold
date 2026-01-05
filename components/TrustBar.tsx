
import React from 'react';
import { COLORS } from '@/constants';

const partners = [
  'National Open University of Nigeria', 'World Bank Group', 'African Union', 
  'Economic Council of Africa', 'Ministry of Finance', 'International Diplomacy Hub',
  '1,200+ Leaders Trained', 'Operating in 15 Countries', '50+ Institutional Partners'
];

const TrustBar: React.FC = () => {
  return (
    <div className="bg-[#0A1628] border-y border-white/10 py-5 overflow-hidden relative z-20">
      <div className="animate-marquee">
        {[...partners, ...partners].map((item, idx) => (
          <div key={idx} className="flex items-center mx-12 whitespace-nowrap">
             <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold flex items-center gap-4">
               {item}
               <span className="w-1 h-1 bg-[#C9A962] rounded-full"></span>
             </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
