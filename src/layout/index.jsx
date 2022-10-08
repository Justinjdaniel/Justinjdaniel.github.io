import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <Flex
      w='full'
      flexDir='column'
      justifyContent='space-between'
      htmlFor='main_layout'
    >
      <Header htmlFor='header' />
      <Box minH='calc(100vh - 60px)' htmlFor='wrapper'>
        <Outlet />
      </Box>
      <Footer htmlFor='footer' />
    </Flex>
  );
};

export default Layout;
