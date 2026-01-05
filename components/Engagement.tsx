
import React from 'react';
import { ShieldCheck, GraduationCap, Presentation, Users, ArrowRight } from 'lucide-react';
import { COLORS } from '@/constants';

const paths = [
  {
    title: "I Need Strategic Consulting",
    icon: <ShieldCheck className="w-12 h-12 stroke-1 text-[#C9A962]" />,
    desc: "Your organization faces complex transformation challenges requiring specialized advisory support.",
    cta: "Schedule Consultation"
  },
  {
    title: "I Want to Enroll in a Program",
    icon: <GraduationCap className="w-12 h-12 stroke-1 text-[#C9A962]" />,
    desc: "You're a leader seeking executive education to enhance your strategic capabilities.",
    cta: "Explore Programs"
  },
  {
    title: "I Want to Attend a Summit",
    icon: <Presentation className="w-12 h-12 stroke-1 text-[#C9A962]" />,
    desc: "Connect with Africa's leadership community and participate in high-level dialogue.",
    cta: "View Summit Calendar"
  },
  {
    title: "I Want to Partner with LeadBold",
    icon: <Users className="w-12 h-12 stroke-1 text-[#C9A962]" />,
    desc: "Your institution seeks collaboration on leadership development initiatives.",
    cta: "Explore Partnership"
  }
];

const Engagement: React.FC = () => {
  return (
    <section className="py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl serif text-[#0A1628] mb-4">How to Engage</h2>
          <p className="text-slate-500 font-light">Select your pathway to institutional transformation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paths.map((p, i) => (
            <div key={i} className="bg-white p-10 border border-[#E5E5E3] flex flex-col justify-between group hover:border-[#C9A962] transition-all hover:-translate-y-2">
              <div className="space-y-6">
                <div className="transform group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
                <h3 className="text-2xl serif text-[#0A1628] leading-tight">{p.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{p.desc}</p>
              </div>
              <button className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#C9A962] hover:text-[#0A1628] transition-colors">
                {p.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
