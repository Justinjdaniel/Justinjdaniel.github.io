import { Box, Button, Container } from '@mantine/core';
import { Link } from 'react-router-dom';

const Home = () => {
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
      <Container size='xl'>
        <h1>Home</h1>
        here we are adding new components
        {navLinks.map((link, i) => (
          <Button key={i} m={2}>
            <Link to={link.to}>{link.label}</Link>
          </Button>
        ))}
      </Container>
    </Box>
  );
};

export default Home;
