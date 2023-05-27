import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <Flex>
      <Container maxW='1000px' px={{ base: '40px', md: '80px' }} py='25px' mt='50px'>
        <Flex justifyContent='space-between' mb='20px' gap='4'>
          <Heading as='h1'>About</Heading>
        </Flex>
      </Container>
    </Flex>
  );
};

export default About;
