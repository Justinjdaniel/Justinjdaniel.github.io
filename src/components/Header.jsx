import { Box, Container, Flex, Link as ExternalLink } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Todo add logo
  // Todo add nav links
  // Todo add theme toggle button with icons
  // Todo add micro-interactions

  return (
    <Box bg='whiteAlpha.200'>
      <Container maxW='container.xl'>
        <Flex justifyContent='space-between'>
          Header
          <Flex gap='2'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About</Link>
          </Flex>
          <Flex gap='2'>
            <ExternalLink href='https://github.com' isExternal>
              Github
            </ExternalLink>
            <ExternalLink href='https://linkedin.com' isExternal>
              LinkedIn
            </ExternalLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
