
import React, { useEffect, useState, useRef } from 'react';

const metrics = [
  { value: 13, label: 'Senior Engineers Certified', suffix: '', source: 'NNPC geomechanics cohort | Feb 2026' },
  { value: 4.7, label: 'Overall Rating', suffix: '/5', source: 'Post-program evaluation | 13 participants' },
  { value: 100, label: 'Would Recommend', suffix: '%', source: 'Feedback forms | Feb 13, 2026' },
  { value: 92, label: 'Hands-On Rating', suffix: '%', source: 'Practical session assessment' },
];

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = Math.max(end / 60, value % 1 !== 0 ? 0.1 : 1);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 33);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={elementRef} className="text-6xl md:text-8xl font-light text-white alt-sans mb-4 tracking-tighter">
      {value % 1 !== 0 ? count.toFixed(1) : Math.round(count).toLocaleString()}<span className="text-[#D4AF37]">{suffix}</span>
    </div>
  );
};

const Metrics: React.FC = () => {
  return (
    <section className="relative py-40 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 noise-bg opacity-[0.1]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
          {metrics.map((metric, i) => (
            <div key={i} className="group">
              <Counter value={metric.value} suffix={metric.suffix} />
              <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">
                {metric.label}
              </p>
              <p className="mt-3 text-white/35 text-[11px] leading-relaxed max-w-[14rem] mx-auto">
                {metric.source}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl mx-auto text-center">
          <div className="pill-badge mx-auto mb-8 w-fit opacity-60">VERIFIED PROGRAM METRICS</div>
          <p className="text-white/40 text-lg font-light italic serif leading-relaxed">
            "These figures come from the February 9-13, 2026 NNPC E&P Limited geomechanics program evaluation."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
