import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, ArrowLeft, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { NNPC_CASE_STUDY } from '../src/constants';

interface CaseStudyProps {
  onBack?: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack }) => {
  const [openCurriculum, setOpenCurriculum] = useState(false);
  const [openMethodology, setOpenMethodology] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const { client, program, location, dates, participants, overallRating, wouldRecommend, exceededExpectations, handsOnRating, testimonials, curriculum, methodology, faculty } = NNPC_CASE_STUDY;

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const displayedTestimonials = showAllReviews ? testimonials : featuredTestimonials;

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#0A1628] to-[#050505]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Case Study</p>
          <h1 className="text-4xl lg:text-6xl serif font-bold mb-6">
            {client}
          </h1>
          <p className="text-xl lg:text-2xl text-white/70 mb-8 max-w-3xl">
            {program}
          </p>
          <div className="flex flex-wrap gap-8 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              {location}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              {dates}
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              {participants} Senior Engineers
            </span>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 px-6 lg:px-12 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl serif font-bold mb-6">When Nigeria's national energy champion required advanced technical training for its upstream engineering team, LeadBold delivered a world-class certification program.</h2>
              <div className="space-y-4 text-white/70">
                <p><strong className="text-white">The Challenge:</strong> NNPC E&P Limited needed its reservoir engineers, geologists, and production technologists to master geomechanics and pore pressure prediction—critical skills for safe, efficient drilling operations.</p>
                <p><strong className="text-white">The Solution:</strong> A 5-day intensive certification program featuring real-time drilling simulations, practical modelling exercises, case studies from global operations, and expert facilitation.</p>
                <p><strong className="text-white">The Outcome:</strong> 13 senior engineers certified, 100% would recommend to colleagues, 4.7/5 overall rating.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#050505] p-8 text-center border border-white/10">
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">{overallRating}</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(overallRating) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white/20'}`} />
                  ))}
                </div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Overall Satisfaction</p>
              </div>
              <div className="bg-[#050505] p-8 text-center border border-white/10">
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">{wouldRecommend}%</div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Would Recommend</p>
              </div>
              <div className="bg-[#050505] p-8 text-center border border-white/10">
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">{exceededExpectations}%</div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Exceeded Expectations</p>
              </div>
              <div className="bg-[#050505] p-8 text-center border border-white/10">
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">{handsOnRating}%</div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Hands-On Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participant Voices */}
      <section className="py-20 px-6 lg:px-12 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl serif font-bold mb-12 text-center">Participant Voices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((t) => (
              <div key={t.id} className="bg-[#0A1628] p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white/20'}`} />
                  ))}
                </div>
                <p className="text-white/70 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/50">{t.title}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
          {!showAllReviews && testimonials.length > 6 && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAllReviews(true)}
                className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-[#050505] transition-all"
              >
                View All {testimonials.length} Participant Reviews
              </button>
            </div>
          )}
        </div>
      </section>

      {/* What Made It Work */}
      <section className="py-20 px-6 lg:px-12 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl serif font-bold mb-12 text-center">What Made It Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#050505] p-10 border border-white/10">
              <Award className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-xl font-bold mb-4">Expert Facilitation</h3>
              <p className="text-white/60">Participants unanimously praised facilitator quality: "Excellent explanations," "Top-notch knowledge," "Made training relevant to real jobs."</p>
            </div>
            <div className="bg-[#050505] p-10 border border-white/10">
              <Users className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-xl font-bold mb-4">Hands-On Application</h3>
              <p className="text-white/60">92% rated practical components "Very Good" or "Excellent": real-time drilling simulations, practical modelling exercises, group discussions & case studies.</p>
            </div>
            <div className="bg-[#050505] p-10 border border-white/10">
              <CheckCircle className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-xl font-bold mb-4">Tangible Outcomes</h3>
              <p className="text-white/60">Engineers left with: certification credentials, frameworks applicable Monday morning, new understanding of complex technical concepts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Context */}
      <section className="py-20 px-6 lg:px-12 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl serif font-bold mb-6">About NNPC E&P Limited</h2>
              <p className="text-white/70 mb-6">Nigeria's upstream oil and gas powerhouse, managing exploration and production operations for Africa's largest petroleum economy. NNPC E&P engineers operate in some of the world's most technically challenging environments.</p>
              <div className="space-y-4 text-white/60">
                <p><strong className="text-white">Why This Training Mattered:</strong></p>
                <ul className="space-y-2">
                  <li>• Safe drilling operations (preventing blowouts, wellbore instability)</li>
                  <li>• Optimal well design and placement</li>
                  <li>• Reservoir management and production optimization</li>
                  <li>• Cost reduction through fewer non-productive time incidents</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#0A1628] p-10 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Our Partnership</h3>
              <p className="text-white/60 mb-4">LeadBold has delivered multiple executive education and technical certification programs for NNPC, covering:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                  Leadership Development
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                  Procurement Reform
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                  Technical Certification Programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details - Accordion */}
      <section className="py-20 px-6 lg:px-12 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl serif font-bold mb-12 text-center">Program Details</h2>
          
          <div className="border border-white/10">
            <button 
              onClick={() => setOpenCurriculum(!openCurriculum)}
              className="w-full p-6 flex items-center justify-between bg-[#050505] hover:bg-[#0A1628] transition-colors"
            >
              <span className="font-bold">Curriculum Covered</span>
              {openCurriculum ? <ChevronUp className="w-5 h-5 text-[#D4AF37]" /> : <ChevronDown className="w-5 h-5 text-[#D4AF37]" />}
            </button>
            {openCurriculum && (
              <div className="p-6 bg-[#050505] border-t border-white/10">
                <ul className="space-y-3">
                  {curriculum.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="border border-white/10 mt-4">
            <button 
              onClick={() => setOpenMethodology(!openMethodology)}
              className="w-full p-6 flex items-center justify-between bg-[#050505] hover:bg-[#0A1628] transition-colors"
            >
              <span className="font-bold">Delivery Methodology</span>
              {openMethodology ? <ChevronUp className="w-5 h-5 text-[#D4AF37]" /> : <ChevronDown className="w-5 h-5 text-[#D4AF37]" />}
            </button>
            {openMethodology && (
              <div className="p-6 bg-[#050505] border-t border-white/10">
                <ul className="space-y-3">
                  {methodology.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 bg-[#050505] border border-white/10">
            <h3 className="font-bold mb-4">Faculty Profile</h3>
            <p className="text-white/70">{faculty}</p>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-20 px-6 lg:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl serif font-bold mb-8">We Listen. We Improve.</h2>
          <p className="text-white/70 mb-8">Participant feedback identified one clear improvement area: extend the duration. Multiple engineers noted the program was "robust" and would benefit from additional time for deeper hands-on practice.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0A1628] p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">5-Day Intensive</h3>
              <p className="text-white/60">For rapid certification</p>
            </div>
            <div className="bg-[#0A1628] p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">10-Day Deep Dive</h3>
              <p className="text-white/60">For comprehensive mastery with extended practicals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-t from-[#D4AF37] to-[#0A1628]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl serif font-bold mb-6">Ready to Bring World-Class Technical Training to Your Team?</h2>
          <p className="text-xl text-white/80 mb-10">Whether you need leadership development, technical certification, or organizational transformation, we design programs that deliver measurable results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#D4AF37] text-[#050505] text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all">
              Contact Us
            </button>
            <button className="px-10 py-4 border border-white text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[#050505] transition-all">
              View More Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
