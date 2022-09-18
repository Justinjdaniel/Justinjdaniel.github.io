import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Todo add logo
  // Todo add nav links
  // Todo add theme toggle button with icons
  // Todo add micro-interactions
  
  return (
    <div>
      Header
      <br />
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

export default Header;
