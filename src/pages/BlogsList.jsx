import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { lab, tech, travel, uiUx } from '../assets';
import SearchBar from '../components/SearchBar';
import blogs from '../database/blogs';

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
        <FilterButton bgImage={lab} label='Lab' />
        <FilterButton bgImage={tech} label='Tech' />
        <FilterButton bgImage={uiUx} label='UI/UX' />
        <FilterButton bgImage={travel} label='Travel' />
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
          {blogs.map((e, i) => (
            <SmallBlogCard blog={e} />
          ))}
        </Wrap>
      </Flex>
      <Wrap spacing='6' justify='space-evenly'>
        {blogs.map((e, i) => (
          <SmallBlogCard blog={e} />
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
    navigate(`/blogs/id=${blog.id}`, { state: blog });
  };
  return (
    <WrapItem
      borderRadius='8px'
      overflow='hidden'
      bgImage={blog.headerContent.coverImage}
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

const SmallBlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const textColor = useColorModeValue('white', 'rgba(255, 255, 255, .85)');
  const cardContent = blog?.headerContent;

  const handleOnClick = () => {
    navigate(`/blogs/id=${blog.id}`, { state: blog });
  };
  return (
    <WrapItem
      borderRadius='8px'
      overflow='hidden'
      bgImage={cardContent.coverImage}
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
      onClick={() => handleOnClick()}
    >
      <Box
        color={textColor}
        bgGradient='linear(to-br, transparent, whiteAlpha.500)'
        w='full'
        h='60px'
        mt='110px'
        overflow='hidden'
        borderRadius='8px'
        p='2'
        backdropFilter='blur(16px) saturate(180%)'
        sx={{
          '.blogCard:hover &': {
            bg: 'rgba(209, 213, 219, 0.5)',
          },
        }}
      >
        {cardContent.title}
      </Box>
    </WrapItem>
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
      transition={'background 0.3s ease'}
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
      {...rest}
    >
      <VisuallyHidden> {label}</VisuallyHidden>
      <Heading
        bgClip='text'
        bgGradient='linear(to-br, teal, teal.200)'
        fontWeight='extrabold'
      >
        {label}
      </Heading>
    </chakra.button>
  );
};
