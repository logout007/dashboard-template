import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, change, icon }) => {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>
      <div className="stats-info">
        <div className="stats-title">{title}</div>
        <div className="stats-value">{value}</div>
        <div className="stats-change" style={{ color: change.includes('+') ? '#4caf50' : '#f44336' }}>
          {change}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
