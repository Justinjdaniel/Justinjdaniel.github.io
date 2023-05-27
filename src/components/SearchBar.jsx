import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ ...rest }) => {
  const textColor = useColorModeValue('white', 'rgba(255, 255, 255, .85)');
  const hoverBgColor = useColorModeValue(
    'rgba(209, 213, 219, 0.5)',
    'rgba(17, 25, 40, 0.75)'
  );

  const bgColor = useColorModeValue(
    'rgba(209, 213, 219, 0.6)',
    'rgba(17, 25, 40, 0.5)'
  );
  const borderColor = useColorModeValue(
    'rgba(209, 213, 219, 0.3)',
    'rgba(255, 255, 255, 0.125)'
  );

  const handleSearchQuery = (query) => {
    console.log(query);
  };

  return (
    <InputGroup
      w='max-content'
      borderRadius='full'
      color={textColor}
      bg={bgColor}
      border={`1px solid ${borderColor}`}
      backdropFilter='blur(16px) saturate(180%)'
      _hover={{ bg: hoverBgColor }}
      {...rest}
    >
      <InputLeftElement pointerEvents='none' fontSize='1.2em'>
        <FiSearch />
      </InputLeftElement>
      <Input
        placeholder='Search...'
        maxW='350px'
        bg='transparent'
        border='none'
        type='search'
        focusBorderColor='none'
        _placeholder={{ opacity: 0.75, color: textColor }}
        onChange={(e) => {
          handleSearchQuery(e.target.value);
        }}
      />
    </InputGroup>
  );
};

export default SearchBar;
