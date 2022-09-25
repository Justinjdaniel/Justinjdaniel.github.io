import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { IoPricetagSharp, IoTime } from 'react-icons/io5';
import HeaderImage from '../assets/sparrow.avif';

const Blogs = () => {
  return (
    <Container maxW='1000px' p='100px'>
      <article maxW='1000px' w='full'>
        <HeaderImageCard />
        <SummaryCard />
      </article>
    </Container>
  );
};

export default Blogs;

const HeaderImageCard = () => {
  return (
    <Flex
      bgImage={HeaderImage}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      minH='400px'
      flexDir='column'
      w='full'
      rounded='1rem'
      color='#fff'
      p='50px'>
      <Flex pb='20px' justify='space-between'>
        <Heading
          fontSize='1.125rem'
          fontWeight='bold'
          textTransform='uppercase'
          letterSpacing='0.4rem'
          opacity='0.9'>
          article
        </Heading>
        <Flex alignItems='center' opacity='0.5' fontSize='0.875rem'>
          <Text pb='2px' id='sinceData'>
            6 months ago
          </Text>
          <Icon as={IoTime} w={5} h={5} ml='10px' />
        </Flex>
      </Flex>
      <Box pt='50px' class='lower-header'>
        <Flex
          flexDir='row'
          gap='2'
          alignItems='center'
          opacity='0.75'
          mb='12px'>
          <Icon as={IoPricetagSharp} w={5} h={5} mr='10px' />
          <Text fontSize='0.875rem'>Nature,</Text>
          <Text fontSize='0.875rem'>Animal</Text>
        </Flex>
        <Heading
          as='h1'
          m='20px 0'
          fontSize='3rem'
          fontWeight='semibold'
          opacity='0.9'>
          Birds, Birds, Birds!
        </Heading>
        <Text
          w='50%'
          mt='10px'
          opacity='0.75'
          lineHeight='1.75'
          class='subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          imperdiet ut quam sit amet vehicula.
        </Text>
      </Box>
    </Flex>
  );
};

const SummaryCard = () => {
  const summary = [
    {
      title: 'Reading Time',
      value: 6,
      unit: 'mins',
    },
    {
      title: 'View',
      value: 1200,
      unit: 'views',
    },
    {
      title: 'Publish Date',
      value: 'April 26, 2022',
      unit: '',
    },
  ];

  return (
    <Flex
      w='full'
      mt='50px'
      p='30px 50px'
      justifyContent='space-between'
      flexDir={{ base: 'column', md: 'row' }}
      borderRadius='1rem'
      boxShadow='0 0 0 1px #f2f2f2'>
      {summary.map(summaryItem => (
        <Box w='full' pr='20px'>
          <Text as='h5' color='#999'>
            {summaryItem.title}
          </Text>
          <Text
            mt='12px'
            fontSize='1.5rem'
            class='item-text'
            textTransform='capitalize'>
            {summaryItem.value} {summaryItem.unit}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
