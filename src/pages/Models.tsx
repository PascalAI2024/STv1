import React from 'react';
import { Brain, Play, Pause, Settings, Star } from 'lucide-react';

const Models = () => {
  const models = [
    {
      id: 1,
      name: 'Tesla Motors',
      role: 'Automotive Sales Specialist',
      description: 'Specialized in electric vehicle sales and customer education',
      status: 'active',
      performance: '98%',
      lastUpdated: '2h ago'
    },
    {
      id: 2,
      name: 'Goldman Sachs',
      role: 'Financial Advisory Expert',
      description: 'Handles investment portfolio discussions and wealth management',
      status: 'paused',
      performance: '95%',
      lastUpdated: '1d ago'
    },
    {
      id: 3,
      name: 'Microsoft Enterprise',
      role: 'Cloud Solutions Consultant',
      description: 'Azure and enterprise software sales specialist',
      status: 'active',
      performance: '97%',
      lastUpdated: '3h ago'
    },
    {
      id: 4,
      name: 'Salesforce CRM',
      role: 'CRM Implementation Specialist',
      description: 'Expert in CRM solutions and digital transformation',
      status: 'active',
      performance: '96%',
      lastUpdated: '5h ago'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">AI Sales Agents</h1>
          <p className="text-sm text-slate-400 mt-1">Manage and monitor your AI sales team</p>
        </div>
        <button className="btn-primary">
          <Brain className="w-4 h-4 mr-2" />
          Train New Agent
        </button>
      </div>

      <div className="grid gap-4">
        {models.map((model) => (
          <div key={model.id} className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700 hover:border-primary-600/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-900/50 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-white">{model.name}</h3>
                    <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-primary-900/50 text-primary-400">
                      {model.performance}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary-400">{model.role}</p>
                  <p className="text-sm text-slate-400 mt-1">{model.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  className={`p-2 rounded-full ${
                    model.status === 'active' 
                      ? 'text-green-400 hover:bg-green-900/50' 
                      : 'text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {model.status === 'active' ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button className="p-2 text-slate-400 hover:text-primary-400 rounded-full hover:bg-slate-700">
                  <Star className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-primary-400 rounded-full hover:bg-slate-700">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-500">
              Last updated {model.lastUpdated}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;