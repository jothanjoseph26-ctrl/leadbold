import React, { useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { NNPC_CASE_STUDY } from '../src/constants';

const NNPCHeroWidget: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const featuredTestimonials = NNPC_CASE_STUDY.testimonials.filter(t => t.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [featuredTestimonials.length]);

  const current = featuredTestimonials[currentIndex];

  return (
    <section className="bg-[#0A1628] py-12 px-6 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Trust Badge */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#D4AF37]">NNPC</span>
              </div>
            </div>
            <div>
              <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold mb-1">
                Trusted By Africa's Energy Leaders
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(NNPC_CASE_STUDY.overallRating) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white/20'}`} />
                  ))}
                </div>
                <span className="text-white/60 text-sm">{NNPC_CASE_STUDY.overallRating}/5 • {NNPC_CASE_STUDY.wouldRecommend}% would recommend</span>
              </div>
            </div>
          </div>

          {/* Right - Rotating Quote */}
          <div className="relative">
            <div className="bg-[#050505]/50 border border-white/10 p-6 rounded-lg">
              <p className="text-white/80 italic text-lg mb-4 leading-relaxed">
                "{current.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-sm">{current.name}</p>
                  <p className="text-white/50 text-xs">{current.title}, {current.company}</p>
                </div>
                <div className="flex gap-2">
                  {featuredTestimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20'}`}
                      aria-label={`Go to quote ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NNPCHeroWidget;
