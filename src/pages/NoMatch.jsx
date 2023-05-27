import { Container, Flex } from '@chakra-ui/react';
import React from 'react';

const NoMatch = () => {
  return (
    <Flex minH='100vh'>
      <Container
        maxW='1000px'
        px={{ base: '40px', md: '80px' }}
        py='25px'
        mt='50px'
        border='1px solid'
        htmlFor='landing_page'
      >
        <div>NoMatch</div>
      </Container>
    </Flex>
  );
};

export default NoMatch;
