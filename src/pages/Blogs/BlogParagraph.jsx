import { Text } from '@chakra-ui/react';
import React from 'react';

const BlogParagraph = ({ text }) => {
  const textColor = true ? '#777' : '';

  return (
    <Text mb='20px' color={textColor} fontSize='1.125rem'>
      {text}
    </Text>
  );
};

export default BlogParagraph;
