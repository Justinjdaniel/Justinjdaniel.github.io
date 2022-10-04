import { Image, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useState } from 'react';

const BlogGallery = ({ gallery }) => {
  const [selected, setSelected] = useState(0);
  return (
    <Wrap
      spacing='20px'
      mt='40px'
      align='center'
      justify='center'
      cursor='pointer'
      mb='20px'
    >
      <WrapItem
        as={Image}
        src={gallery[selected].src}
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
      {gallery.map((image, i) => (
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
          onClick={() => setSelected(i)}
        />
      ))}
    </Wrap>
  );
};

export default BlogGallery;
