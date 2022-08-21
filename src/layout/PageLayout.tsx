import { Box, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { FooterCentered } from '../components/Footer';
import { HeaderResponsive } from '../components/Header';
import { navLinks } from '../routes';

const PageLayout = () => {
  return (
    <Box p='md'>
      <HeaderResponsive links={navLinks} />
      <Container size='xl' style={{ minHeight: '60vh' }}>
        <Outlet />
      </Container>
      <FooterCentered links={navLinks} />
    </Box>
  );
};

export default PageLayout;
