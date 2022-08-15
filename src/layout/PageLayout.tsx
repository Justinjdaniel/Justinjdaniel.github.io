import { Box, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderResponsive } from '../components/Header';

const PageLayout = () => {
  const navLinks = [
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
    {
      label: 'Projects',
      link: '/projects',
    },
    {
      label: 'Blog',
      link: '/blog',
    },
  ];

  return (
    <Box p='md'>
      <HeaderResponsive links={navLinks} />
      <Container size='xl'>
        <Outlet />
      </Container>
      <FooterResponsive />
    </Box>
  );
};

export default PageLayout;

const FooterResponsive = () => {
  return (
    <Box p='md'>
      <p>Footer</p>
    </Box>
  );
};
