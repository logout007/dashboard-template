import React from 'react';
import './Dashboard.css';
import StatsCard from './StatsCard';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="stats">
        <StatsCard title="Total Orders" value="75" change="+3%" />
        <StatsCard title="Total Delivered" value="70" change="+3%" />
        <StatsCard title="Total Cancelled" value="05" change="-3%" />
        <StatsCard title="Total Revenue" value="$12k" change="-3%" />
      </section>
      <section className="activity">
        <ActivityChart />
      </section>
      <section className="orders">
        <RecentOrders />
      </section>
      <section className="feedback">
        <Feedback />
      </section>
    </div>
  );
};

export default Dashboard;
