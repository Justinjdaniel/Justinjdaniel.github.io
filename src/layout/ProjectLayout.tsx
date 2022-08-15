/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderResponsive } from '../components/Header';

const ProjectLayout = () => {
  const navLinks = [
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Contact',
      to: '/contact',
    },
    {
      label: 'Projects',
      to: '/projects',
    },
    {
      label: 'Blog',
      to: '/blog',
    },
  ];
  return (
    <Box p='md'>
      {/* <HeaderResponsive links={navLinks} /> */}
      <Container size='xl'>
        <h1>Projects</h1>
        <Outlet />
      </Container>
    </Box>
  );
};

export default ProjectLayout;
