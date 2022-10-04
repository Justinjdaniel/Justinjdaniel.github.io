import { Heading } from '@chakra-ui/react';
import React from 'react';

const BlogHeading = ({ heading }) => {
  return (
    <Heading as='h4' mt='60px' mb='20px' fontSize='1.45rem'>
      {heading}
    </Heading>
  );
};

export default BlogHeading;
