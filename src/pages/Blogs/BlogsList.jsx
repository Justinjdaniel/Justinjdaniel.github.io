import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BigImage from '../../assets/sparrow.jpg';
import SearchBar from '../../components/SearchBar';
import blogs from '../../database/blogs';

// Todo: Add search and filter

const BlogsList = () => {
  return (
    <Container maxW='1000px' px={{ base: '40px', md: '80px' }} py='25px'>
      <Flex justifyContent='space-between' mb='20px' gap='4'>
        <Heading as='h1'>Blogs</Heading>
        <SearchBar />
      </Flex>
      <Flex
        justifyContent='space-between'
        w='full'
        gap='6'
        mb='6'
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <BigBlogCard />
        <Wrap spacing='6' justify='space-evenly'>
          {[...Array(4)].map((e, i) => (
            <SmallBlogCard />
          ))}
        </Wrap>
      </Flex>
      <Wrap spacing='6' justify='space-evenly'>
        {[...Array(8)].map((e, i) => (
          <SmallBlogCard />
        ))}
      </Wrap>
    </Container>
  );
};

export default BlogsList;

const BigBlogCard = () => {
  const textColor = useColorModeValue('white', 'rgba(255, 255, 255, .85)');
  const navigate = useNavigate();
  const blog = blogs[0];

  const handleOnClick = () => {
    navigate(`/blogs/${blog.id}`, { state: blog });
  };
  return (
    <WrapItem
      borderRadius='8px'
      overflow='hidden'
      bgImage={BigImage}
      bgPosition='center'
      bgRepeat='no-repeat'
      w='full'
      h='400px'
      maxW={{ base: 'full', lg: '400px' }}
      cursor='pointer'
      objectFit='cover'
      bgSize='cover'
      p='4'
      className='blogCard'
      onClick={() => handleOnClick()}
    >
      <Box
        color={textColor}
        bgGradient='linear(to-br, transparent, whiteAlpha.500)'
        w='full'
        h='60px'
        mt='310px'
        p='3'
        overflow='hidden'
        borderRadius='8px'
        backdropFilter='blur(16px) saturate(180%)'
        sx={{
          '.blogCard:hover &': {
            bg: 'rgba(209, 213, 219, 0.5)',
          },
        }}
      >
        <Heading size='sm'>{blog?.headerContent?.title}</Heading>
        <Text fontSize='xs'>{blog.description}</Text>
      </Box>
    </WrapItem>
  );
};

const SmallBlogCard = () => {
  const textColor = useColorModeValue('white', 'rgba(255, 255, 255, .85)');

  return (
    <WrapItem
      borderRadius='8px'
      overflow='hidden'
      bgImage={BigImage}
      bgPosition='center'
      bgRepeat='no-repeat'
      w='full'
      maxW={{ base: '288px', lg: '188px' }}
      h='188px'
      cursor='pointer'
      objectFit='cover'
      bgSize='cover'
      p='2'
      className='blogCard'
    >
      <Box
        color={textColor}
        bgGradient='linear(to-br, transparent, whiteAlpha.500)'
        w='full'
        h='60px'
        mt='110px'
        overflow='hidden'
        borderRadius='8px' p='2'
        backdropFilter='blur(16px) saturate(180%)'
        sx={{
          '.blogCard:hover &': {
            bg: 'rgba(209, 213, 219, 0.5)',
          },
        }}
      >
        Blog Title
      </Box>
    </WrapItem>
  );
};
