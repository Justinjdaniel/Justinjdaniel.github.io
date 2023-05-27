// TODO: add search and filter

import {
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { lab, tech, travel, uiUx } from '../assets';
import MotionBox from '../components/MotionBox';
import SearchBar from '../components/SearchBar';
import blogs from '../database/blogs';

const BlogsList = () => {
  return (
    <Flex>
      <Container maxW='1000px' px={{ base: '40px', md: '80px' }} py='25px' mt='50px'>
        <Flex justifyContent='space-between' mb='20px' gap='4'>
          <Heading as='h1'>Blogs</Heading>
          <SearchBar />
        </Flex>

        <Flex justifyContent='space-between' w='full' gap='6' mb='6' flexDir={{ base: 'column', lg: 'row' }}>
          <FilterButton
            bgImage={lab}
            label='Lab'
            as={MotionBox}
            initial={{ opacity: 0, translateX: -100 }}
            transition={`all 0.3s linear ${2 * 0.1}s`}
          />
          <FilterButton
            bgImage={tech}
            label='Tech'
            as={MotionBox}
            initial={{ opacity: 0, translateX: -100 }}
            transition={`all 0.3s linear ${1 * 0.1}s`}
          />
          <FilterButton
            bgImage={uiUx}
            label='UI/UX'
            as={MotionBox}
            initial={{ opacity: 0, translateX: 100 }}
            transition={`all 0.3s linear ${1 * 0.1}s`}
          />
          <FilterButton
            bgImage={travel}
            label='Travel'
            as={MotionBox}
            initial={{ opacity: 0, translateX: 100 }}
            transition={`all 0.3s linear ${2 * 0.1}s`}
          />
        </Flex>

        <Flex w='full' flexDir='column' gap='4'>
          {blogs.map((blog, i) => (
            <BlogCard
              blog={blog}
              key={i}
              as={MotionBox}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={`all 0.3s linear ${i * 0.1}s`}
            />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default BlogsList;

const BlogCard = ({ blog, index, ...rest }) => {
  const navigate = useNavigate();
  const textColor = useColorModeValue('white', 'rgba(255, 255, 255, .85)');

  const bgColor = useColorModeValue('rgba(209, 213, 219, 0.20)', 'rgba(17, 25, 40, 0.5)');

  /** redirects to the clicked blog with data as state*/
  const handleOnClick = () => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <Flex
      w='full'
      h='150px'
      borderRadius='15px'
      bgImage={blog?.headerContent?.coverImage}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      cursor='pointer'
      onClick={handleOnClick}
      {...rest}
    >
      <Flex
        w='full'
        h='full'
        p='4'
        gap='4'
        borderRadius='15px'
        color={textColor}
        bg={bgColor}
        backdropFilter='blur(16px) saturate(180%)'
      >
        <Image
          w='180px'
          src={blog?.headerContent?.coverImage}
          borderRadius='15px'
          objectFit='cover'
          border={`2px solid ${textColor}`}
        />
        <Flex flexDir='column' justifyContent='space-between'>
          <Flex flexDir='column'>
            <Heading size='md' textTransform='capitalize' mb='2'>
              {blog?.headerContent?.title}
            </Heading>

            <Text fontSize='sm' mb='2'>
              {blog?.headerContent?.subtitle}
            </Text>
          </Flex>
          <Button colorScheme='' variant='link' justifyContent='flex-end' rightIcon={<IoArrowForward />}>
            Read more...
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

const FilterButton = ({ label, ...rest }) => {
  return (
    <chakra.button
      rounded='15px'
      w='200px'
      h='100px'
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      bgPosition='center'
      bgRepeat='no-repeat'
      cursor='pointer'
      objectFit='cover'
      bgSize='cover'
      color='white'
      backdropFilter='blur(16px) saturate(180%)'
      brightness='40%'
      filter='grayscale(60%)'
      _hover={{
        brightness: '100%',
        filter: 'grayscale(20%)',
      }}
      initial={{ opacity: 0, translateX: 100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      {...rest}
    >
      <VisuallyHidden> {label}</VisuallyHidden>
      <Heading bgClip='text' bgGradient='linear(to-br, teal, teal.200)' fontWeight='extrabold'>
        {label}
      </Heading>
    </chakra.button>
  );
};
