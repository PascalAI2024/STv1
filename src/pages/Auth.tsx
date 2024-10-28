import React, { useState, useEffect } from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('demo@company.com');
  const [password, setPassword] = useState('demo');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setLoading(true);
      const timer = setTimeout(() => {
        login(email, password);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative w-full max-w-md">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-700">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <Brain className="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <Sparkles className="w-6 h-6 text-primary-300 absolute -right-2 -top-2 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">SalesTrainerAI</h2>
            <p className="text-slate-400">
              {loading ? 'Entering demo mode...' : 'Enhance your sales team with AI'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
              <p className="text-sm text-slate-400 mb-2">Demo Accounts:</p>
              <div className="space-y-1 text-sm">
                <p className="text-primary-400">Company: demo@company.com / demo</p>
                <p className="text-primary-400">Admin: demo@admin.com / demo</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white 
                ${loading 
                  ? 'bg-primary-600/50 cursor-wait' 
                  : 'bg-primary-600 hover:bg-primary-700 transition-colors'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-800`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;