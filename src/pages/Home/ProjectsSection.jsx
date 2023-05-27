// TODO: mobile responsiveness

import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const ProjectsSection = (props) => {
  return (
    <Flex {...props}>
      <Container maxW='1000px' px={{ base: '10', md: '20' }} py='6' border='1px solid' htmlFor='projects_section'>
        <Flex h='full' justifyContent='center' alignItems='center'>
          <Heading as='h2'>Projects Section</Heading>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ProjectsSection;
