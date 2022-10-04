import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const SummaryCard = ({ summary }) => {
  return (
    <Flex
      w='full'
      mt='50px'
      p='30px 50px'
      justifyContent='space-between'
      flexDir={{ base: 'column', md: 'row' }}
      borderRadius='1rem'
      boxShadow='0 0 0 1px #f2f2f2'
    >
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
            textTransform='capitalize'
          >
            {summaryItem.value} {summaryItem.unit}
          </Heading>
        </Box>
      ))}
    </Flex>
  );
};

export default SummaryCard;
