import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { IoPricetagSharp, IoTime } from 'react-icons/io5';
import HeaderImage from '../assets/sparrow.avif';
import { blogContent } from '../database/article';
import { getFormattedDate } from '../utils';

const Blogs = () => {
  return (
    <Container maxW='1000px' p='100px'>
      <article w='full'>
        <HeaderImageCard headerContent={blogContent.headerContent} />
        <SummaryCard summary={blogContent.summary} />
        <MainArticle articleContent={blogContent.articleContent} />
      </article>
    </Container>
  );
};

export default Blogs;

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
      p='50px'>
      <Flex pb='20px' justify='space-between'>
        <Heading
          fontSize='1.125rem'
          fontWeight='bold'
          textTransform='uppercase'
          letterSpacing='0.4rem'
          opacity='0.9'>
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
          mb='12px'>
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
          opacity='0.9'>
          {headerContent?.title}
        </Heading>
        <Text mt='10px' opacity='0.75' lineHeight='1.75'>
          {headerContent?.subtitle}
        </Text>
      </Box>
    </Flex>
  );
};

const SummaryCard = ({ summary }) => {
  return (
    <Flex
      w='full'
      mt='50px'
      p='30px 50px'
      justifyContent='space-between'
      flexDir={{ base: 'column', md: 'row' }}
      borderRadius='1rem'
      boxShadow='0 0 0 1px #f2f2f2'>
      {summary.map((summaryItem, i) => (
        <Box w='full' pr='20px' key={i}>
          <Text size='sm' color='#999'>
            {summaryItem.title}
          </Text>
          <Heading
            mt={{ md: '12px' }}
            mb='12px'
            size='lg'
            fontWeight='medium'
            textTransform='capitalize'>
            {summaryItem.value} {summaryItem.unit}
          </Heading>
        </Box>
      ))}
    </Flex>
  );
};

const MainArticle = ({ articleContent }) => {
  const blockquoteColor = true ? 'gray.900' : '#f8f8f8';
  const textColor = true ? '#777' : '';

  return (
    <Box w='full' mt='50px' pb='50px' lineHeight='1.75'>
      {articleContent.map(section => (
        <React.Fragment key={section}>
          {section.stack.map(order => (
            <React.Fragment key={order}>
              {order.startsWith('heading') && (
                <Heading as='h4' mt='60px' mb='20px' fontSize='1.45rem'>
                  {section[order]}
                </Heading>
              )}
              {order.startsWith('paragraph') && (
                <Text mb='20px' color={textColor} fontSize='1.125rem'>
                  {section[order]}
                </Text>
              )}
              {order.startsWith('image') && (
                <Flex flexDir='column'>
                  <Image
                    src={section[order].src}
                    alt={section[order].alt}
                    minW='200px'
                    rounded='8px'
                    loading='lazy'
                  />
                  {section[order].figCaption && (
                    <Text
                      fontSize='xs'
                      color={textColor}
                      px='6'
                      my='2'
                      textAlign='center'>
                      {section[order].figCaption}
                    </Text>
                  )}
                </Flex>
              )}
              {order.startsWith('gallery') && (
                <Wrap
                  spacing='20px'
                  mt='40px'
                  align='center'
                  justify='center'
                  cursor='pointer'
                  mb='20px'>
                  <WrapItem
                    as={Image}
                    src={HeaderImage}
                    alt='{image.alt}'
                    maxW='800px'
                    boxSize='full'
                    w='calc( 100% - 20px)'
                    h='auto'
                    borderRadius='8px'
                    loading='lazy'
                    cursor='default'
                    objectFit='cover'
                  />
                  <br />
                  {section[order].map((image, i) => (
                    <WrapItem
                      as={Image}
                      src={image.src}
                      alt={image.alt}
                      boxSize='185px'
                      h='auto'
                      minH='200px'
                      rounded='8px'
                      loading='lazy'
                      objectFit='cover'
                      key={i}
                    />
                  ))}
                </Wrap>
              )}
              {order.startsWith('blockquote') && (
                <Box
                  bg={blockquoteColor}
                  p='40px'
                  rounded='16px'
                  m='40px 0'
                  pos='relative'
                  sx={{
                    '&::before': {
                      content:
                        'url("https://icons.craftwork.design/static/media/QuotesFill.f65b03951f44e212816420b00909f4df.svg")',
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      transform: 'scale(2)',
                      opacity: 0.4,
                    },
                    '&::after': {
                      content:
                        'url("https://icons.craftwork.design/static/media/QuotesFill.f65b03951f44e212816420b00909f4df.svg")',
                      position: 'absolute',
                      bottom: '-10px',
                      right: '-10px',
                      transform: 'scale(2) rotate(180deg)',
                      opacity: 0.4,
                    },
                  }}>
                  {section[order]}
                </Box>
              )}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </Box>
  );
};
