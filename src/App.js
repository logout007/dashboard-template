import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
