// InfoCard.jsx
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './infoCard.css';

const InfoCard = ({ title, icon }) => {
  return (
    <div className="info-card">
      <div className="icon">
        {icon}
      <h3 className="info-title">{title}</h3>
      </div>
      <FaChevronRight className="arrow-icon" />
    </div>
  );
};

export default InfoCard;
