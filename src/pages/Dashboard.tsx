import React from 'react';
import { Activity, Brain, Users, Clock, Building2, Settings2, ChevronUp, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const StatCard = ({ label, value, icon: Icon, trend }: { label: string; value: string; icon: any; trend?: string }) => (
  <div className="stats-card">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg bg-primary-500/10`}>
        <Icon className="w-5 h-5 text-primary-500" />
      </div>
      {trend && (
        <div className="flex items-center text-emerald-500 text-sm">
          <ChevronUp className="w-4 h-4 mr-1" />
          {trend}
        </div>
      )}
    </div>
    <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
    <p className="text-sm text-slate-400">{label}</p>
  </div>
);

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Companies', value: '24', icon: Building2, trend: '+12.5%' },
    { label: 'Active Models', value: '86', icon: Brain, trend: '+8.1%' },
    { label: 'Total Users', value: '156', icon: Users, trend: '+23.4%' },
    { label: 'System Uptime', value: '99.9%', icon: Activity },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-sm text-slate-400 mt-1">Monitor system performance and user activity</p>
        </div>
        <button className="btn-primary">
          <Settings2 className="w-4 h-4 mr-2" />
          System Settings
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Activity Overview</h2>
            <select className="bg-slate-800 border-slate-700 text-sm rounded-lg">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 chart-container">
            {/* Chart placeholder */}
            <div className="h-full flex items-center justify-center text-slate-500">
              Activity chart coming soon
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Recent Companies</h2>
            <button className="text-primary-500 hover:text-primary-400 text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {['Tesla Motors', 'Goldman Sachs', 'Microsoft'].map((company) => (
              <div key={company} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">{company}</p>
                    <p className="text-xs text-slate-400">12 active agents</p>
                  </div>
                </div>
                <div className="flex items-center text-emerald-500 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.5%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyDashboard = () => {
  // Similar structure to AdminDashboard but with company-specific stats and charts
  return <AdminDashboard />;
};

const Dashboard = () => {
  const { user } = useAuth();
  return user?.role === 'admin' ? <AdminDashboard /> : <CompanyDashboard />;
};

export default Dashboard;