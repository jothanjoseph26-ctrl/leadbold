
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const slides = [
  {
    image: '/sliders1.jpg',
    eyebrow: 'Institutional Authority',
    heading: 'World-Class Leadership & Institutional Development',
    subheading: 'Headquartered in Abuja. Operating across three continents.',
    text: 'Trusted by NNPC, the Nigerian Senate, and high-impact public institutions building Africa\'s future.',
    primaryCta: { label: 'Explore Our Services', action: 'consulting' },
    secondaryCta: { label: 'View Programs', action: 'training' },
  },
  {
    image: '/sliders.jpg',
    eyebrow: 'NNPC Proof',
    heading: 'Delivering Excellence For Africa\'s Energy Leaders',
    subheading: '"The great facilitators made all the training relevant to my job."',
    text: 'Engr. Akinremi Michael O. (FNSE), Lead Production Planning, NEPL. 4.7/5 rating. 100% would recommend. February 9-13, 2026.',
    primaryCta: { label: 'Read NNPC Case Study', action: 'case-study' },
    secondaryCta: { label: 'View Testimonials', action: 'testimonials' },
  },
  {
    image: '/sliders3.jpg',
    eyebrow: 'Transformation',
    heading: 'Executive Education, Strategic Advisory, Global Summits',
    subheading: 'Custom programs designed for your institutional context.',
    text: 'Work with LeadBold to strengthen leadership pipelines, execution discipline, and cross-sector influence.',
    primaryCta: { label: 'Schedule Consultation', href: 'mailto:info@leadboldconsulting.co.uk?subject=Consultation%20Inquiry' },
    secondaryCta: { label: 'View Summits', action: 'summits' },
  }
];

interface HeroProps {
  onViewChange: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[currentSlide];

  const handleCtaClick = (cta: { action?: string; href?: string }) => {
    if (cta.href) {
      window.location.href = cta.href;
      return;
    }

    if (cta.action) {
      onViewChange(cta.action);
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col bg-[#050505] overflow-hidden">
      
      {/* 1. DESKTOP BACKGROUND (Full Height) */}
      <div className="hidden lg:block absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={`desktop-${index}`}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`LeadBold Desktop Header ${index + 1}`}
              className="w-full h-full object-cover transform scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${
                  index === 0 ? '1507679799987-c73779587ccf' : 
                  index === 1 ? '1557804506-669a67965ba0' : 
                  '1542601906990-b4d3fb778b09'
                }?auto=format&fit=crop&w=1920&q=80`;
              }}
            />
            {/* HEAVY DESKTOP GRADIENT: Solid black from bottom to midpoint, then fades out */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505] via-50% to-transparent opacity-100" />
            <div className="absolute inset-0 bg-black/20" /> {/* Slight top darkening for brand elements */}
          </div>
        ))}
      </div>

      {/* 2. MOBILE/TABLET BACKGROUND (Split Height) */}
      <div className="lg:hidden absolute top-0 left-0 w-full h-[55%] z-0">
        {slides.map((slide, index) => (
          <div
            key={`mobile-${index}`}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`LeadBold Mobile Header ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${
                  index === 0 ? '1507679799987-c73779587ccf' : 
                  index === 1 ? '1557804506-669a67965ba0' : 
                  '1542601906990-b4d3fb778b09'
                }?auto=format&fit=crop&w=800&q=80`;
              }}
            />
            {/* MOBILE GRADIENT: Soften the edge of the split */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>
        ))}
      </div>

      {/* 3. UNIVERSAL TEXTURES */}
      <div className="absolute inset-0 noise-bg opacity-[0.08] pointer-events-none z-10" />

      {/* 4. BRANDING ELEMENTS */}
      <div className="absolute top-24 left-6 md:left-12 z-30 flex items-center gap-4">
         <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37] text-xl md:text-2xl serif">L</div>
         <div className="text-white/80 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-bold">Leading the future now</div>
      </div>

      {/* 5. CONTENT LAYER */}
      <div className="relative h-full w-full z-20 flex flex-col items-center justify-end lg:justify-center text-center px-6 pb-16 lg:pb-0 pt-32">
          <div className="space-y-4 md:space-y-6 lg:mt-48 animate-fade-in-up">
          <p className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] md:text-xs font-black">
            {activeSlide.eyebrow}
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] text-white serif font-bold tracking-tight leading-[1.05] drop-shadow-2xl max-w-6xl mx-auto">
            {activeSlide.heading}
          </h1>

          <div className="flex justify-center pt-2">
            <div className="pill-badge brochure-shadow text-[8px] lg:text-[10px] scale-110 lg:scale-125">
              LEADBOLD CONSULTING
            </div>
          </div>

          <p className="text-white/80 text-sm md:text-lg lg:text-2xl font-light italic mt-6 lg:mt-10 max-w-3xl mx-auto px-4 leading-relaxed">
            {activeSlide.subheading}
          </p>

          <p className="text-white/60 text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            {activeSlide.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8 lg:pt-12 justify-center items-center">
            <button
              onClick={() => handleCtaClick(activeSlide.primaryCta)}
              className="px-8 py-4 bg-[#D4AF37] text-[#050505] text-[10px] lg:text-xs uppercase tracking-[0.25em] font-black hover:brightness-110 transition-all"
            >
              {activeSlide.primaryCta.label}
            </button>
            <button
              onClick={() => handleCtaClick(activeSlide.secondaryCta)}
              className="text-[10px] lg:text-xs uppercase tracking-[0.35em] font-bold text-[#D4AF37] hover:text-white transition-colors border-b border-[#D4AF37]/40 pb-1"
            >
              {activeSlide.secondaryCta.label}
            </button>
          </div>
        </div>
      </div>

      {/* 6. SLIDE INDICATORS (Vertical Minimalist) */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-6 lg:h-12 w-[2px] transition-all duration-500 hover:bg-[#D4AF37] ${
              index === currentSlide ? 'bg-[#D4AF37]' : 'bg-white/10'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 7. SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-[#D4AF37] animate-bounce hidden lg:block opacity-40">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;
