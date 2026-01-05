
import React, { useState } from 'react';
import { ImageIcon, Sparkles, Loader2, Download, ArrowLeft, Maximize2, Shield, Zap } from 'lucide-react';
import { generateInstitutionalImage } from '../services/geminiService';

interface MediaStudioProps {
  onBack: () => void;
}

const MediaStudio: React.FC<MediaStudioProps> = ({ onBack }) => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setError(null);
    try {
      const img = await generateInstitutionalImage(prompt, size);
      setGeneratedImage(img);
    } catch (err) {
      console.error(err);
      setError("The institutional neural engine encountered an error. Please refine your parameters and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden pt-20">
      <div className="absolute inset-0 noise-bg opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">
        <button onClick={onBack} className="flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-black mb-16 hover:translate-x-[-4px] transition-transform w-fit group">
          <ArrowLeft className="w-4 h-4" /> Exit Media Studio
        </button>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-12 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em]">
                <Shield className="w-5 h-5" /> Media Asset Architect
              </div>
              <h1 className="text-5xl lg:text-7xl serif font-bold leading-tight">
                Neural <br /><span className="text-[#D4AF37]">Visual Engine</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-relaxed italic serif">
                "Generate high-fidelity institutional assets for policy reports, summit branding, and strategic documentation."
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 space-y-8 brochure-shadow">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Visual Parameters / Prompt</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., 'Modern glass-and-steel government building in Abuja at dusk, architectural lighting, deep navy sky...'"
                  className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm outline-none focus:border-[#D4AF37] transition-all resize-none h-32 italic"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Resolution Tier</label>
                <div className="grid grid-cols-3 gap-4">
                  {(['1K', '2K', '4K'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-3 border text-[10px] font-black tracking-widest transition-all ${
                        size === s ? 'bg-[#D4AF37] text-[#050505] border-[#D4AF37]' : 'border-white/10 text-white/40 hover:border-white/30'
                      }`}
                    >
                      {s} {s === '4K' && 'ULTRA'}
                    </button>
                  ))}
                </div>
                <p className="text-[9px] text-white/20 uppercase tracking-widest font-bold">
                  * 4K resolution requires additional neural cycles.
                </p>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className="w-full py-5 bg-[#D4AF37] text-[#050505] font-black uppercase tracking-[0.2em] text-xs brochure-shadow hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Synthesizing Asset...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Commit Generation
                  </>
                )}
              </button>
              
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs italic text-center font-bold">
                  {error}
                </div>
              )}
            </div>

            <div className="flex items-center gap-12 opacity-30 grayscale pt-10">
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-black">MODEL</span>
                 <span className="text-[9px] font-bold">GEMINI 3 PRO IMAGE</span>
               </div>
               <div className="w-[1px] h-8 bg-white/20" />
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-black">ENGINE</span>
                 <span className="text-[9px] font-bold">NANO BANANA PRO</span>
               </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-7 aspect-video relative group animate-fade-in-up [animation-delay:200ms]">
            <div className="absolute inset-0 bg-[#0A1628] border border-white/5 flex flex-col items-center justify-center space-y-6 overflow-hidden">
              {generatedImage ? (
                <>
                  <img 
                    src={generatedImage} 
                    className="w-full h-full object-cover animate-fade-in"
                    alt="Generated Institutional Asset"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <a 
                      href={generatedImage} 
                      download="leadbold-asset.png"
                      className="p-4 bg-[#D4AF37] text-[#050505] rounded-full hover:scale-110 transition-transform brochure-shadow"
                    >
                      <Download className="w-6 h-6" />
                    </a>
                    <button 
                      onClick={() => window.open(generatedImage, '_blank')}
                      className="p-4 bg-white text-[#050505] rounded-full hover:scale-110 transition-transform brochure-shadow"
                    >
                      <Maximize2 className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-white/40 pointer-events-none">
                    <span>LEADBOLD MEDIA STUDIO</span>
                    <span>RESOLUTION: {size} SYNTHESIZED</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <div className="w-24 h-24 border border-white/10 flex items-center justify-center rounded-sm">
                      <ImageIcon className="w-10 h-10 text-white/5 stroke-1" />
                    </div>
                    {isGenerating && (
                      <div className="absolute inset-0 border-t-2 border-[#D4AF37] rounded-full animate-spin" />
                    )}
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-black">Awaiting Neural Synthesis</p>
                    <p className="text-white/10 text-[9px] font-bold max-w-xs mx-auto italic">Define your prompt parameters to initialize the high-fidelity visualization engine.</p>
                  </div>
                </>
              )}
            </div>
            
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none border border-white/5">
              <div className="w-full h-full grid grid-cols-3 grid-rows-3 opacity-[0.03]">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border border-white/50" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default MediaStudio;
