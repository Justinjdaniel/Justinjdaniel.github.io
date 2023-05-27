import { Container, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import MotionBox from '../../components/MotionBox';
import SearchBar from '../../components/SearchBar';
import projects from '../../database/projects';
import ProjectCard from './ProjectCard';

const Projects = (props) => {
  // Memoize the projects array to avoid unnecessary re-rendering
  const memoizedProjects = useMemo(() => projects, []);

  // Use a breakpoint value to adjust the padding of the container
  const padding = useBreakpointValue({ base: '40px', md: '80px' });

  return (
    <Flex {...props}>
      <Container maxW='1000px' px={padding} py='25px' mt='50px'>
        <Flex justifyContent='space-between' mb='20px' gap='4'>
          <Heading as='h1'>Projects</Heading>
          <SearchBar />
        </Flex>
        <Flex w='full' flexDir='column' gap='4'>
          {memoizedProjects.map((project, i) => (
            <ProjectCard
              project={project}
              key={i}
              as={MotionBox}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={`all 0.3s linear ${i * 0.05}s`}
            />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Projects;
