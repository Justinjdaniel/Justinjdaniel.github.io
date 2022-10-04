import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Container maxW='1000px' px={{ base: '40px', md: '80px' }} py='25px'>
      <Flex justifyContent='space-between' mb='20px' gap='4'>
        <Heading as='h1'>Home Page</Heading>
      </Flex>
    </Container>
  );
};

export default Home;
