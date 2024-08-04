import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ActivityChart.css';

const data = [
  { name: 'Day 1', value: 4000 },
  { name: 'Day 2', value: 3000 },
  { name: 'Day 3', value: 2000 },
  { name: 'Day 4', value: 2780 },
  { name: 'Day 5', value: 1890 },
  { name: 'Day 6', value: 2390 },
  { name: 'Day 7', value: 3490 },
];

const ActivityChart = () => {
  return (
    <div className="activity-chart">
      <h3>Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
