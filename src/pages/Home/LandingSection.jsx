// TODO: mobile responsiveness

import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const LandingSection = (props) => (
  <Flex {...props}>
    <Container
      maxW='1000px'
      px={{ base: '40px', md: '80px' }}
      py='25px'
      mt='50px'
      border='1px solid'
      htmlFor='landing_page'
    >
      <Flex
        h='full'
        gap='4'
        flexDir='column'
        justifyContent='center'
        // alignItems='center'
        textAlign='start'
      >
        <Heading as='h2' size='xl'>
          Hi I'm Justin,
        </Heading>
        <Heading as='h1' size='2xl' lineHeight='1.2'>
          Making the user web experience more <br />
          <Text as='span' fontSize='larger'>
            Enjoyable, Engaging, & Easy
          </Text>
        </Heading>
      </Flex>
    </Container>
  </Flex>
);

export default LandingSection;
