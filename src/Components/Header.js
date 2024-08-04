import React from 'react';
import './Header.css';
import { MdEmail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";


const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search" />
      <div className="header-icons">
        <span><MdEmail /></span>
        <span><IoSettingsOutline /></span>
        <span><FaRegBell /></span>
        <span><IoPerson /></span>

      </div>
    </header>
  );
};

export default Header;
