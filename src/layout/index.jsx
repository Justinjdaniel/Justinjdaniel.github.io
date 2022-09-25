import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box minH='calc( 100vh - 114px )'>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
