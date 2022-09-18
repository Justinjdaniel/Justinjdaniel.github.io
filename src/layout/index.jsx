import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      Layout
      <br />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
