// TODO: mobile responsiveness

import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const ContactMeSection = (props) => {
  return (
    <Flex {...props}>
      <Container
        maxW='1000px'
        px={{ base: '40px', md: '80px' }}
        py='25px'
        border='1px solid'
        htmlFor='projects_section'
      >
        <Flex>
          <Heading as='h2'>Contact Me Section</Heading>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ContactMeSection;
