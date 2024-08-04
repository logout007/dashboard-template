import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Replace with logo icon */}
        <span>🌐</span>
      </div>
      <div className="menu">
        <div className="menu-item">🏠</div>
        <div className="menu-item">📊</div>
        <div className="menu-item">⚙️</div>
        <div className="menu-item">🔔</div>
      </div>
    </div>
  );
};

export default Sidebar;
