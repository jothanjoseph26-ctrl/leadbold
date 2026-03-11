
import React from 'react';

const institutions = [
  'NNPC E&P Limited',
  'Nigerian Senate',
  'National Open University of Nigeria',
  'Federal Ministries & Agencies',
  'Cross-Sector Public Institutions'
];

const stats = [
  '13 Engineers Certified',
  '4.7/5 Average Rating',
  '100% Would Recommend'
];

const TrustBar: React.FC = () => {
  return (
    <div className="bg-[#0A1628] border-y border-white/10 py-5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-4 lg:grid-cols-[1.5fr_1fr] items-center">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[#D4AF37] uppercase tracking-[0.35em] text-[10px] font-black">Trusted By</span>
          {institutions.map((item) => (
            <span key={item} className="text-white/50 uppercase tracking-[0.15em] text-[10px] font-bold flex items-center gap-4">
              {item}
              <span className="w-1 h-1 bg-[#C9A962] rounded-full" />
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:justify-end">
          {stats.map((item) => (
            <span key={item} className="text-[#D4AF37] uppercase tracking-[0.2em] text-[10px] font-bold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
