// TODO: mobile responsiveness
// TODO: add logo
// TODO: add color change when scrolled
// TODO: add micro-interactions

import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialButton from './Button/SocialButton';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = (props) => {
  return (
    <Flex
      bg='whiteAlpha.200'
      h='50px'
      w='full'
      alignItems='center'
      pos='absolute'
      {...props}
    >
      <Container maxW='container.xl'>
        <Flex justifyContent='space-between' alignItems='center'>
          Header
          <Flex gap='4'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
          </Flex>
          <Flex gap='4'>
            <SocialButton
              label='LinkedIn'
              href='https://www.linkedin.com/in/justin-j-daniel/'
            >
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton
              label='Github'
              href='https://github.com/justinjdaniel'
            >
              <FaGithub />
            </SocialButton>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
