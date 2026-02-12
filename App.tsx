import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import MacroSentinel from './views/MacroSentinel';
import SmartMoney from './views/SmartMoney';
import VolatilityHunter from './views/VolatilityHunter';
import Insight from './views/Insight';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch(currentView) {
      case 'dashboard': return <Dashboard />;
      case 'macro': return <MacroSentinel />;
      case 'smartmoney': return <SmartMoney />;
      case 'volatility': return <VolatilityHunter />;
      case 'insight': return <Insight />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-indigo-500 selection:text-white">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      
      <div className="flex-1 ml-64 flex flex-col">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto animate-fade-in">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;