import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search" />
      <div className="header-icons">
        {/* Replace with actual icons */}
        <span>🔔</span>
        <span>💌</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;
