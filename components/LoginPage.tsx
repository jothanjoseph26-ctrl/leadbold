import React, { useState } from 'react';
import { ArrowLeft, Lock, ShieldAlert } from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
  onLogin: (password: string) => boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = onLogin(password);

    if (!isValid) {
      setError('Invalid admin password.');
      return;
    }

    setError('');
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 noise-bg opacity-[0.08] pointer-events-none" />
      <div className="w-full max-w-md relative z-10">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.35em] font-black"
        >
          <ArrowLeft className="w-4 h-4" /> Back To Site
        </button>

        <div className="border border-white/10 bg-[#0A1628] p-10 space-y-8 brochure-shadow">
          <div className="space-y-4">
            <div className="w-14 h-14 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <Lock className="w-7 h-7" />
            </div>
            <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-black">Admin Access</p>
            <h1 className="text-4xl serif leading-tight">LeadBold Control Panel</h1>
            <p className="text-white/55 text-sm leading-relaxed">
              Enter the admin password to access the dashboard. This is a client-side gate for the current build.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full bg-[#050505] border border-white/10 px-4 py-4 text-sm text-white outline-none focus:border-[#D4AF37]"
                placeholder="Enter admin password"
                autoComplete="current-password"
              />
            </label>

            {error && (
              <div className="flex items-center gap-2 text-red-300 text-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-[#D4AF37] text-[#050505] text-[10px] uppercase tracking-[0.25em] font-black hover:brightness-110 transition-all"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
