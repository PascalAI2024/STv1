import React from 'react';
import { Mic2, Upload, Play } from 'lucide-react';

const Training = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Training</h1>
        <button className="btn-primary">
          <Mic2 className="w-4 h-4 mr-2" />
          Start Training
        </button>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
            <Upload className="w-12 h-12 text-primary-400" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Upload Training Data</h2>
          <p className="text-slate-400 mb-4">Drag and drop your audio files here or click to browse</p>
          <button className="btn-primary">
            <Upload className="w-4 h-4 mr-2" />
            Upload Files
          </button>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-700">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Training Sessions</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
              <div className="flex items-center">
                <Play className="w-5 h-5 text-primary-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-white">Training Session #{i}</p>
                  <p className="text-xs text-slate-400">Duration: 1h 30m</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-900/50 text-primary-400">
                Completed
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;