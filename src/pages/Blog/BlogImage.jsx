import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const BlogImage = ({ image }) => {
  const textColor = true ? '#777' : '';
  return (
    <Flex flexDir='column'>
      <Image src={image.src} alt={image.alt} minW='200px' rounded='8px' loading='lazy' />
      {image.figCaption && (
        <Text fontSize='xs' color={textColor} px='6' my='2' textAlign='center'>
          {image.figCaption}
        </Text>
      )}
    </Flex>
  );
};

export default BlogImage;
