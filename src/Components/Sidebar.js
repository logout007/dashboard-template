import React from 'react';
import './Sidebar.css';
import { IoMdHome } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
      <IoLogoReact />
      </div>
      <div className="menu">
        <div className="menu-item"><IoMdHome /></div>
        <div className="menu-item"><MdInsertChartOutlined /></div>
        <div className="menu-item"><TbReportAnalytics /></div>
        <div className="menu-item"><CiWallet /></div>
        <div className="menu-item"><IoBagCheckSharp /></div>

      </div>
    </div>
  );
};

export default Sidebar;
