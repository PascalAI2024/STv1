import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, Database } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      <div className="bg-slate-800 rounded-lg shadow-sm border border-slate-700">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <SettingsIcon className="w-6 h-6 text-primary-400" />
            <h2 className="text-lg font-semibold text-white">General Settings</h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm font-medium text-white">Notifications</p>
                  <p className="text-sm text-slate-400">Manage your notification preferences</p>
                </div>
              </div>
              <button className="text-sm text-primary-400 hover:text-primary-300">Configure</button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm font-medium text-white">Security</p>
                  <p className="text-sm text-slate-400">Update your security preferences</p>
                </div>
              </div>
              <button className="text-sm text-primary-400 hover:text-primary-300">Configure</button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm font-medium text-white">Data Management</p>
                  <p className="text-sm text-slate-400">Manage your data and privacy settings</p>
                </div>
              </div>
              <button className="text-sm text-primary-400 hover:text-primary-300">Configure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;