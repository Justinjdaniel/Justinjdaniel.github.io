import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { IoPricetagSharp, IoTime } from 'react-icons/io5';
import { getFormattedDate } from '../../utils';

const HeaderImageCard = ({ headerContent }) => {
  return (
    <Flex
      bgImage={headerContent.coverImage}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      minH='400px'
      flexDir='column'
      w='full'
      rounded='1rem'
      color='#fff'
      p='50px'
    >
      <Flex pb='20px' justify='space-between'>
        <Heading
          fontSize='1.125rem'
          fontWeight='bold'
          textTransform='uppercase'
          letterSpacing='0.4rem'
          opacity='0.9'
        >
          {!!headerContent.type ? headerContent.type : 'article'}
        </Heading>
        <Flex alignItems='center' opacity='0.6' fontSize='0.875rem'>
          <Text pb='2px' textTransform='capitalize'>
            {getFormattedDate(headerContent.publishedDate)}
          </Text>
          <Icon as={IoTime} w={5} h={5} ml='10px' />
        </Flex>
      </Flex>
      <Box pt='50px'>
        <Flex
          flexDir='row'
          gap='2'
          alignItems='center'
          opacity='0.75'
          mb='12px'
        >
          <Icon as={IoPricetagSharp} w={5} h={5} mr='10px' />
          {headerContent.tags.length > 0 && (
            <Text fontSize='0.875rem' textTransform='capitalize'>
              {headerContent.tags.join(', ')}
            </Text>
          )}
        </Flex>
        <Heading
          as='h1'
          m='20px 0'
          fontSize='3rem'
          fontWeight='semibold'
          opacity='0.9'
        >
          {headerContent?.title}
        </Heading>
        <Text mt='10px' opacity='0.75' lineHeight='1.75'>
          {headerContent?.subtitle}
        </Text>
      </Box>
    </Flex>
  );
};

export default HeaderImageCard;
