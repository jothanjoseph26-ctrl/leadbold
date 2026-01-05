
import React, { useState } from 'react';
import { DetailedCourse } from '@/constants';
import { X, CheckCircle2, ArrowRight, User, Briefcase, CreditCard, ChevronLeft } from 'lucide-react';

interface EnrollmentOnboardingProps {
  course: DetailedCourse;
  onCancel: () => void;
  onSuccess: () => void;
}

const EnrollmentOnboarding: React.FC<EnrollmentOnboardingProps> = ({ course, onCancel, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    paymentMethod: 'invoice'
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = [
    { id: 1, label: 'Personal Information', icon: <User className="w-4 h-4" /> },
    { id: 2, label: 'Professional Profile', icon: <Briefcase className="w-4 h-4" /> },
    { id: 3, label: 'Payment Options', icon: <CreditCard className="w-4 h-4" /> }
  ];

  return (
    <div className="fixed inset-0 z-[120] bg-[#050505] flex items-center justify-center p-6">
      <div className="absolute inset-0 noise-bg opacity-[0.1]" />
      <div className="relative bg-white w-full max-w-4xl min-h-[600px] flex flex-col md:flex-row brochure-shadow overflow-hidden">
        {/* Left Info Panel */}
        <div className="md:w-1/3 bg-[#0A1628] p-10 text-white space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="text-[#D4AF37] uppercase tracking-widest text-[10px] font-bold">Institutional Enrollment</div>
            <h3 className="text-3xl serif leading-tight">{course.title}</h3>
            <div className="space-y-2">
              <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Investment</div>
              <div className="text-2xl font-black text-[#D4AF37]">{course.price}</div>
            </div>
          </div>
          <div className="space-y-4">
             {steps.map(s => (
               <div key={s.id} className={`flex items-center gap-4 transition-all ${step === s.id ? 'opacity-100 scale-105 text-[#D4AF37]' : 'opacity-30'}`}>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${step === s.id ? 'border-[#D4AF37]' : 'border-white'}`}>{s.icon}</div>
                  <span className="text-[10px] uppercase tracking-widest font-bold">{s.label}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Form Panel */}
        <div className="flex-1 p-12 bg-white flex flex-col justify-between relative">
          <button onClick={onCancel} className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 transition-colors"><X /></button>
          
          <div className="space-y-12">
            <div className="space-y-2">
              <h4 className="text-2xl serif text-[#050505]">Step {step}: {steps[step-1].label}</h4>
              <p className="text-sm text-slate-400">Please provide accurate institutional details for your enrollment.</p>
            </div>

            <div className="space-y-6">
              {step === 1 && (
                <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">First Name</label>
                    <input type="text" className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-[#D4AF37] text-lg serif" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Last Name</label>
                    <input type="text" className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-[#D4AF37] text-lg serif" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Email Address</label>
                    <input type="email" className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-[#D4AF37] text-lg serif" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 gap-6 animate-fade-in-up">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Organization / Institution</label>
                    <input type="text" className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-[#D4AF37] text-lg serif" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Current Designation</label>
                    <input type="text" className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-[#D4AF37] text-lg serif" value={formData.designation} onChange={e => setFormData({...formData, designation: e.target.value})} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-fade-in-up">
                  <div className="grid gap-4">
                    {['invoice', 'card', 'transfer'].map(method => (
                      <button key={method} onClick={() => setFormData({...formData, paymentMethod: method as any})} className={`p-6 border text-left flex items-center justify-between transition-all ${formData.paymentMethod === method ? 'border-[#D4AF37] bg-[#FAFAF9]' : 'border-slate-200'}`}>
                         <span className="text-sm font-bold uppercase tracking-widest">{method} Payment</span>
                         {formData.paymentMethod === method && <CheckCircle2 className="text-[#D4AF37]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between pt-12">
            <button onClick={step === 1 ? onCancel : prevStep} className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-bold hover:text-[#050505] transition-colors"><ChevronLeft className="w-4 h-4" /> {step === 1 ? 'Cancel' : 'Back'}</button>
            <button onClick={step === 3 ? onSuccess : nextStep} className="px-10 py-4 bg-[#050505] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-[#050505] transition-all flex items-center gap-2">{step === 3 ? 'Complete Enrollment' : 'Continue'} <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentOnboarding;
