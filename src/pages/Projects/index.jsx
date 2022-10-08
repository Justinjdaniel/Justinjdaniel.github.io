import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import projects from '../../database/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Flex>
      <Container
        maxW='1000px'
        px={{ base: '40px', md: '80px' }}
        py='25px'
        mt='50px'
      >
        <Flex justifyContent='space-between' mb='20px' gap='4'>
          <Heading as='h1'>Projects</Heading>
          <SearchBar />
        </Flex>
        <Flex w='full' flexDir='column' gap='4'>
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Projects;
