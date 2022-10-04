import {
  chakra,
  IconButton,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(IoMoon, IoSunny);

  return (
    <chakra.button
      w={8}
      h={8}
      rounded={'full'}
      cursor={'pointer'}
      alignItems={'center'}
      display={'inline-flex'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      aria-label={`Switch to ${text} mode`}
      onClick={toggleColorMode}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      {...props}
    >
      <VisuallyHidden>Theme changer</VisuallyHidden>
      <SwitchIcon />
    </chakra.button>
  );
};
