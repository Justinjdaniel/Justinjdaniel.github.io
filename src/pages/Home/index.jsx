// TODO: mobile responsiveness
// TODO: implement scroll-snap

import { Flex } from '@chakra-ui/react';
import React from 'react';
import ContactMeSection from './ContactMeSection';
import LandingSection from './LandingSection';
import ProjectsSection from './ProjectsSection';

const Home = () => {
  return (
    <Flex flexDirection='column'>
      <LandingSection bg='teal.400' minH='100vh' />
      <ProjectsSection bg='teal.600' minH='100vh' />
      <ContactMeSection bg='teal.800' minH='100vh' />
    </Flex>
  );
};

export default Home;
