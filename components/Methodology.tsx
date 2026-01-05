
import React, { useState } from 'react';
import { COLORS } from '@/constants';

const methodology = [
  {
    id: 'approach',
    title: 'Our Approach',
    content: 'We combine global best practices with deep localized insights. Our method moves beyond individual skills to institutional capacity building through systemic frameworks.',
    features: ['Case-Based Learning', 'Peer-to-Peer Exchange', 'Executive Coaching', 'Applied Transformation Projects']
  },
  {
    id: 'model',
    title: 'Learning Model',
    content: 'A progressive journey from assessment to institutional transformation. Each program follows a rigorous pedagogical pathway designed for adult leadership acquisition.',
    features: ['Strategic Assessment', 'Contextual Knowledge', 'Simulated Governance', 'Impact Measurement']
  },
  {
    id: 'impact',
    title: 'Impact Framework',
    content: 'We don\'t just measure participation; we measure institutional outcome. Our framework tracks the performance of the organizations our graduates lead.',
    features: ['Policy Adoption Rate', 'Institutional Efficiency', 'Retention & Growth', 'Sustainable Transformation']
  }
];

const Methodology: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left: Interactive Tabs */}
          <div className="md:w-1/3 space-y-4">
            <h2 className="text-4xl serif text-[#0A1628] mb-12">How We Develop Leaders</h2>
            {methodology.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-8 border-l-4 transition-all ${
                  activeTab === idx 
                    ? 'border-[#C9A962] bg-[#FAFAF9] text-[#0A1628]' 
                    : 'border-[#E5E5E3] hover:border-[#C9A962]/30 text-slate-400'
                }`}
              >
                <span className="text-xs uppercase tracking-widest font-bold block mb-2">Method {idx + 1}</span>
                <span className="text-2xl serif">{m.title}</span>
              </button>
            ))}
          </div>

          {/* Right: Tab Content */}
          <div className="md:w-2/3 p-12 bg-[#FAFAF9] border border-[#E5E5E3] flex flex-col justify-center">
            <div key={activeTab} className="animate-fade-in-up space-y-8">
              <p className="text-2xl text-slate-800 font-light leading-relaxed serif">
                {methodology[activeTab].content}
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {methodology[activeTab].features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#C9A962] rounded-full" />
                    <span className="text-slate-600 font-medium uppercase tracking-widest text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
