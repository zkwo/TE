import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [currentView, setCurrentView] = useState('store'); // 'store' | 'admin'

  if (currentView === 'admin') {
    return <AdminPanel onBack={() => setCurrentView('store')} />;
  }

  return <LandingPage onOpenAdmin={() => setCurrentView('admin')} />;
}
