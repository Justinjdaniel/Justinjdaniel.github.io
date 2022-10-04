import { Text } from '@chakra-ui/react';
import React from 'react';

const BlogParagraph = ({ text }) => {
  return (
    <Text mb='20px' color='#777' fontSize='1.125rem'>
      {text}
    </Text>
  );
};

export default BlogParagraph;
