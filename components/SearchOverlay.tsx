
import React, { useState, useEffect } from 'react';
import { Search, X, Loader2, Sparkles } from 'lucide-react';
import { getIntelligentSearchResults } from '../services/geminiService';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query || query.length < 3) {
      setAiResult(null);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const result = await getIntelligentSearchResults(query);
        setAiResult(result);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0A1628]/98 backdrop-blur-xl animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-6 pt-32 h-full">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4 text-[#C9A962]">
            <Search className="w-8 h-8" />
            <h2 className="text-3xl serif">Intelligent Archive Search</h2>
          </div>
          <button onClick={onClose} className="p-4 text-white hover:text-[#C9A962] transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="relative mb-12">
          <input 
            autoFocus
            type="text" 
            placeholder="Type your inquiry (e.g., 'Public Governance Summits 2024')"
            className="w-full bg-white/5 border-b-2 border-white/20 text-4xl serif py-6 px-4 text-white placeholder-white/20 focus:outline-none focus:border-[#C9A962] transition-all"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="space-y-8 overflow-y-auto max-h-[60vh] no-scrollbar pb-20">
          {isLoading && (
            <div className="flex items-center gap-3 text-[#C9A962]">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-xs uppercase tracking-widest font-bold">Querying AI Archives...</span>
            </div>
          )}

          {aiResult && (
            <div className="p-8 bg-white/5 border border-[#C9A962]/30 rounded-lg space-y-4">
              <div className="flex items-center gap-2 text-[#C9A962] text-xs uppercase tracking-widest font-bold">
                <Sparkles className="w-4 h-4" /> AI Suggestion
              </div>
              <div className="text-white/80 leading-relaxed text-lg prose prose-invert font-light italic">
                {aiResult}
              </div>
            </div>
          )}

          {!query && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Summits', 'Consulting', 'Academic', 'Reports'].map(cat => (
                <button key={cat} className="p-6 bg-white/5 hover:bg-[#C9A962]/20 border border-white/10 text-white serif text-xl transition-all">
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
