import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Blockquote = ({ content }) => {
  const blockquoteColor = useColorModeValue('#f8f8f8', 'gray.900');

  return (
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
      }}
    >
      {content}
    </Box>
  );
};

export default Blockquote;
