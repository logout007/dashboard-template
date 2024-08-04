import React from 'react';
import './RecentOrders.css';

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wade Warren</td>
            <td>15478256</td>
            <td>$124.00</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Jane Cooper</td>
            <td>48956788</td>
            <td>$305.00</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Guy Hawkins</td>
            <td>78958215</td>
            <td>$45.88</td>
            <td>Cancelled</td>
          </tr>
          <tr>
            <td>Kristin Watson</td>
            <td>20965732</td>
            <td>$65.00</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Cody Fisher</td>
            <td>95715620</td>
            <td>$545.00</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Savannah Nguyen</td>
            <td>78514568</td>
            <td>$128.20</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
