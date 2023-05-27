// TODO: mobile responsiveness
// TODO: implement scroll-snap

import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import MotionBox from '../../components/MotionBox';
import Projects from '../Projects';

const Home = () => {
  return (
    <Flex flexDirection='column' pt='50px' bg='blackAlpha.700'>
      <DummyLandingSection minH='calc(100vh - 50px)' scrollSnapAlign='start' />
      <Projects minH='calc(100vh - 50px)' scrollSnapAlign='start' />
      {/* <LandingSection minH='calc(100vh - 50px)' /> */}
      {/* <ProjectsSection bg='gray.800' minH='100vh' /> */}
      {/* <ContactMeSection bg='teal.800' minH='calc(100vh - 60px)' /> */}
    </Flex>
  );
};

export default Home;

const DummyLandingSection = (props) => {
  return (
    <Flex {...props}>
      <Container maxW='1000px' px={{ base: '40px', md: '80px' }} py='25px' htmlFor='landing_page'>
        <Flex h='full' gap='4' flexDir='column' justifyContent='center' textAlign='start'>
          <Text fontSize='4xl' fontWeight='bold'>
            Greetings!, <br />
            <Text as='span' fontSize='2xl'>
              I'm
              <Text as='span' color='teal.400' mx='2'>
                Justin J
              </Text>
              a Blockchain Software Developer
            </Text>
          </Text>
          <Heading as='h1' size='2xl' lineHeight='1.2'>
            Who Develops
            <Text as='span' color='teal.400' fontWeight='bold' mx='2'>
              Web Solutions
            </Text>
            for Everyone.
          </Heading>
          Learn More About My Work and How I Can Help You Achieve Your Web Goals.
        </Flex>
        <ScrollDownButton />
      </Container>
    </Flex>
  );
};

const ScrollDownButton = () => {
  const variants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        rotate: 45,
        x: 0,
        y: -20,
      },
      animate: {
        opacity: 0.8,
        x: 0,
        y: 0,
      },
      exit: {
        opacity: 0,
        rotate: 45,
        x: 20,
        y: 20,
      },
    }),
    []
  );

  return (
    <Flex justifyContent='center'>
      {[0, 0.5, 1, 1.5].map((delay, i) => (
        <MotionBox
          key={i}
          display='block'
          width='20px'
          height='20px'
          borderBottom='2px solid white'
          borderRight='2px solid white'
          transform='rotate(45deg)'
          margin='-10px'
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            duration: 2,
            repeat: Infinity,
            delay,
          }}
          variants={variants}
        />
      ))}
    </Flex>
  );
};
