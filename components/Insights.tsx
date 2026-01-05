
import React from 'react';
import { Article } from '../types';
import { Clock, ArrowUpRight } from 'lucide-react';

interface InsightsProps {
  articles: Article[];
}

const Insights: React.FC<InsightsProps> = ({ articles }) => {
  if (articles.length === 0) return null;
  
  const featured = articles[0];
  const list = articles.slice(1);

  return (
    <section id="insights" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold">Policy & Governance</p>
          <h2 className="text-5xl md:text-6xl text-[#050505] serif">Editorial Insights</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-8">
              <img 
                src={featured.image} 
                alt={featured.title} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
              />
              <div className="absolute top-6 left-6 bg-[#D4AF37] text-[#050505] px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                Featured Report
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                <span>{featured.category}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
              </div>
              <h3 className="text-4xl md:text-5xl serif text-[#050505] group-hover:text-[#D4AF37] transition-colors leading-tight">
                {featured.title}
              </h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#050505]">
                Read Article <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {list.map((article) => (
              <div key={article.id} className="flex gap-8 group cursor-pointer border-b border-[#E5E5E3] pb-12 last:border-0">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                    <span>{article.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                  <h4 className="text-2xl serif text-[#050505] group-hover:text-[#D4AF37] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-slate-500 font-light line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <div className="w-32 h-32 flex-none overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            ))}
            
            <button className="w-full py-6 border border-[#050505] text-[#050505] font-bold uppercase tracking-widest text-xs hover:bg-[#050505] hover:text-white transition-all">
              Access Full Research Archive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
