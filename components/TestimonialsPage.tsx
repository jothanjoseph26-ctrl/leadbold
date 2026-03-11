import React, { useState } from 'react';
import { Star, Filter, ArrowLeft } from 'lucide-react';
import { TESTIMONIALS, NNPC_CASE_STUDY } from '../src/constants';

interface TestimonialsPageProps {
  onBack?: () => void;
}

interface Testimonial {
  id?: number;
  name?: string;
  title?: string;
  org?: string;
  company?: string;
  rating?: number;
  quote: string;
  author?: string;
  type?: string;
  featured?: boolean;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<'all' | 'nnpc' | 'other'>('all');
  const [ratingFilter, setRatingFilter] = useState<number | 'all'>('all');

  const nnpcTestimonials: Testimonial[] = NNPC_CASE_STUDY.testimonials.map(t => ({
    id: t.id,
    name: t.name,
    title: t.title,
    company: t.company,
    rating: t.rating,
    quote: t.quote,
    type: 'Technical Training'
  }));

  const otherTestimonials: Testimonial[] = TESTIMONIALS.map((t, i) => ({
    id: 100 + i,
    name: t.author,
    title: t.title,
    org: t.org,
    rating: 5,
    quote: t.quote,
    type: t.type || 'Summit'
  }));

  const allTestimonials = [...nnpcTestimonials, ...otherTestimonials];

  const filtered = allTestimonials.filter(t => {
    const clientMatch = filter === 'all' || (filter === 'nnpc' ? t.company?.includes('NNPC') : !t.company?.includes('NNPC'));
    const ratingMatch = ratingFilter === 'all' || t.rating === ratingFilter;
    return clientMatch && ratingMatch;
  });

  const stats = {
    total: allTestimonials.length,
    nnpc: nnpcTestimonials.length,
    avgRating: (nnpcTestimonials.reduce((sum, t) => sum + (t.rating || 0), 0) / nnpcTestimonials.length).toFixed(1),
    recommend: NNPC_CASE_STUDY.wouldRecommend
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Back Button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="fixed top-24 left-6 z-50 flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xs uppercase tracking-widest">Back</span>
        </button>
      )}

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-b from-[#0A1628] to-[#050505]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Client Voices</p>
          <h1 className="text-4xl lg:text-6xl serif font-bold mb-6">Impact Stories</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real feedback from leaders and organizations we've had the privilege to serve.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 lg:px-12 bg-[#0A1628] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">{stats.total}</div>
              <p className="text-white/50 text-sm uppercase tracking-widest">Total Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">{stats.nnpc}</div>
              <p className="text-white/50 text-sm uppercase tracking-widest">NNPC Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] flex items-center justify-center gap-1">
                {stats.avgRating} <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              </div>
              <p className="text-white/50 text-sm uppercase tracking-widest">Avg Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37]">{stats.recommend}%</div>
              <p className="text-white/50 text-sm uppercase tracking-widest">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 lg:px-12 bg-[#050505] border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-white/50" />
            <span className="text-white/50 text-sm uppercase tracking-widest">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                filter === 'all' ? 'bg-[#D4AF37] text-[#050505]' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              All Clients
            </button>
            <button
              onClick={() => setFilter('nnpc')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                filter === 'nnpc' ? 'bg-[#D4AF37] text-[#050505]' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              NNPC
            </button>
            <button
              onClick={() => setFilter('other')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                filter === 'other' ? 'bg-[#D4AF37] text-[#050505]' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Other Clients
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">Rating:</span>
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="bg-white/10 border border-white/20 text-white px-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
            </select>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((t, i) => (
              <div 
                key={t.id || i} 
                className="bg-[#0A1628] p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j} 
                      className={`w-4 h-4 ${j < (t.rating || 5) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white/20'}`} 
                    />
                  ))}
                </div>
                
                <div className="mb-4">
                  {t.rating === 5 && (
                    <span className="inline-block px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-white/70 italic mb-6 leading-relaxed">"{t.quote}"</p>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/50">{t.title}</p>
                  {(t.company || t.org) && (
                    <p className="text-sm text-[#D4AF37]">{t.company || t.org}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/50">No testimonials match your filters.</p>
              <button 
                onClick={() => { setFilter('all'); setRatingFilter('all'); }}
                className="mt-4 text-[#D4AF37] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-t from-[#D4AF37] to-[#0A1628]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl serif font-bold mb-6">Ready to Transform Your Team?</h2>
          <p className="text-xl text-white/80 mb-10">Join the organizations that trust LeadBold with their leadership development.</p>
          <button className="px-10 py-4 bg-[#D4AF37] text-[#050505] text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
