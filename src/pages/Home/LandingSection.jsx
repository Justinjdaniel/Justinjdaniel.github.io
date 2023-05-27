// TODO: mobile responsiveness

import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

const LandingSection = (props) => {
  // write a function that make the span in h1 in the below jsx swap one by one after a delay
  const [text, setText] = useState(['Design', 'Code', 'Build']);
  const [index, setIndex] = useState(0);
  const timeout = useRef(null);
  useEffect(() => {
    timeout.current = setTimeout(() => {
      setIndex((prevIndex) => {
        if (prevIndex >= text.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000);
    return () => clearTimeout(timeout.current);
  }, [index]);

  return (
    <Flex {...props}>
      <Container maxW='1000px' px={{ base: '40px', md: '80px' }} py='25px' border='1px solid' htmlFor='landing_page'>
        <Flex h='full' gap='4' flexDir='column' justifyContent='center' alignItems='center' textAlign='start'>
          <Text fontSize='4xl' fontWeight='bold'>
            Hi I'm Justin,
          </Text>
          <Heading as='h1' size='2xl' lineHeight='1.2' ref={timeout}>
            {text[index]} For Everyone
          </Heading>
        </Flex>
      </Container>
    </Flex>
  );
};

export default LandingSection;
