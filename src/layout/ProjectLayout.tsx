/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

const ProjectLayout = () => {
  return (
    <>
      <h1>Projects</h1>
      <Outlet />
    </>
  );
};

export default ProjectLayout;
