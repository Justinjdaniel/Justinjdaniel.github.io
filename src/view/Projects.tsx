import { Box, Card, } from '@mantine/core';
import { Link } from 'react-router-dom';
import { BadgeCard } from '../components/ProjectCard';

const Projects = () => {
  return (
    <>
      {/* <BadgeCard /> */}
      <Card>
        <h2>Project Name</h2>
        <p>Project Description.</p>
      </Card>
    </>
  );
};

export default Projects;
