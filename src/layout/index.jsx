import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box minH='90vh'>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
