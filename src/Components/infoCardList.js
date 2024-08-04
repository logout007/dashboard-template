// InfoCardList.jsx
import React from 'react';
import InfoCard from './infoCard';
import { FaBullseye, FaUtensils, FaClipboardList } from 'react-icons/fa';
import './infoCard.css';

const InfoCardList = () => {
  return (
    <div className="info-card-list">
      <InfoCard title="Goals" icon={<FaBullseye />} />
      <InfoCard title="Popular Dishes" icon={<FaUtensils />} />
      <InfoCard title="Menus" icon={<FaClipboardList />} />
    </div>
  );
};

export default InfoCardList;
