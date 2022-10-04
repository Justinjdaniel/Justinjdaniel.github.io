import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SocialButton from './Button/SocialButton';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = () => {
  // Todo add logo
  // Todo add nav links
  // Todo add theme toggle button with icons
  // Todo add micro-interactions

  return (
    <Flex bg='whiteAlpha.200' h='50px' w='full' alignItems='center'>
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
              <IoLogoLinkedin />
            </SocialButton>
            <SocialButton
              label='Github'
              href='https://github.com/justinjdaniel'
            >
              <IoLogoGithub />
            </SocialButton>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
