import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Landing = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (role: 'admin' | 'company') => {
    const email = role === 'admin' ? 'demo@admin.com' : 'demo@company.com';
    login(email, 'demo');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <Brain className="w-20 h-20 text-primary-500 mx-auto" />
            <Sparkles className="w-8 h-8 text-primary-300 absolute -right-2 -top-2 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SalesTrainerAI
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Select your portal to continue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Company Card */}
          <div 
            onClick={() => handleLogin('company')}
            className="group bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 hover:border-primary-500 transition-all cursor-pointer hover:transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-primary-500/10 rounded-lg p-3">
                <Building2 className="w-8 h-8 text-primary-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Company Portal</h2>
                <p className="text-slate-400">For sales teams</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6">
              Access your AI sales agents and training dashboard
            </p>
            <div className="mt-auto">
              <button className="w-full btn-primary">
                Enter Demo Mode
              </button>
            </div>
          </div>

          {/* Admin Card */}
          <div
            onClick={() => handleLogin('admin')}
            className="group bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 hover:border-primary-500 transition-all cursor-pointer hover:transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-primary-500/10 rounded-lg p-3">
                <ShieldCheck className="w-8 h-8 text-primary-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Admin Portal</h2>
                <p className="text-slate-400">For administrators</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6">
              Manage platform settings and user access
            </p>
            <div className="mt-auto">
              <button className="w-full btn-primary">
                Enter Admin Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;