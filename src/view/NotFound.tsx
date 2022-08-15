import { Box, Container } from '@mantine/core';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box p='md'>
      <Container size='xl'>
        <h1>Not Found</h1>
        <p>404 - Page not found</p>
      </Container>
    </Box>
  );
};

export default NotFound;
