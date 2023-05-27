import { Badge, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { IoArrowForward, IoGlobe, IoLogoGithub } from 'react-icons/io5';
import SocialButton from '../../components/Buttons/SocialButton';

const ProjectCard = ({ project, ...rest }) => {
  const textColor = useColorModeValue('white', 'rgba(255, 255, 255, .85)');
  const hoverBgColor = useColorModeValue('rgba(209, 213, 219, 0.30)', 'rgba(17, 25, 40, 0.75)');

  const bgColor = useColorModeValue('rgba(209, 213, 219, 0.20)', 'rgba(17, 25, 40, 0.5)');
  return (
    <Flex
      w='full'
      h='200px'
      borderRadius='15px'
      bgImage={project.cover_image}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      cursor='pointer'
      {...rest}
    >
      <Flex
        w='full'
        h='full'
        p='4'
        gap='4'
        borderRadius='15px'
        color={textColor}
        bg={bgColor}
        backdropFilter='blur(16px) saturate(180%)'
        _hover={{ bg: hoverBgColor }}
      >
        <Image src={project.cover_image} borderRadius='15px' border={`2px solid ${textColor}`} />
        <Flex flexDir='column' justifyContent='space-between'>
          <Flex flexDir='column'>
            <Heading size='md' textTransform='capitalize' mb='2'>
              {project.project_name}
            </Heading>
            <Flex gap='2' mb='2'>
              {project.tags.map((tag, i) => (
                <Badge colorScheme='whatsapp' key={i}>
                  {tag}
                </Badge>
              ))}
            </Flex>
            <Text fontSize='sm' mb='2'>
              {project.description}
            </Text>
            <Flex gap='2'>
              <SocialButton label={project.project_name} href={project.repo_link} title='GitHub link'>
                <IoLogoGithub />
              </SocialButton>
              <SocialButton label={project.project_name} href={project.repo_link} title='Demo website'>
                <IoGlobe />
              </SocialButton>
            </Flex>
          </Flex>
          <Button colorScheme='' variant='link' justifyContent='flex-end' rightIcon={<IoArrowForward />}>
            Read more...
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
