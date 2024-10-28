import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, LayoutDashboard, Settings, Mic2, LogOut, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/models', icon: Brain, label: 'Models' },
    { path: '/training', icon: Mic2, label: 'Training' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  if (!user) return null;

  return (
    <nav className="nav-container">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold text-white">SalesTrainerAI</span>
            </Link>

            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 search-input text-sm"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'bg-primary-500/10 text-primary-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center space-x-3 px-3 py-1.5 rounded-lg bg-slate-800/50">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              <span className="text-sm text-slate-300">
                {user.name}
              </span>
            </div>
            <button 
              onClick={logout}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;