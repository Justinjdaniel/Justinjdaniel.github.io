import { Box, Button, Card, Container, MantineProvider } from '@mantine/core';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

//App component that renders routes which are wrapped in the MantineProvider.
// Also some default theme are changed.
const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // Override any other properties from default theme
        fontFamily: 'Poppins, Open Sans, sans serif',
      }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<ProjectLayout />}>
            <Route index element={<Projects />} />
            <Route path=':id' element={<Project />} />
          </Route>
          <Route path='blog' element={<Blog />} />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};
export default App;

//  This component is the root of this application
const Home = () => {
  const navLinks = [
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Contact',
      to: '/contact',
    },
    {
      label: 'Projects',
      to: '/projects',
    },
    {
      label: 'Blog',
      to: '/blog',
    },
  ];

  return (
    <Box p='md'>
      <Container size='xl'>
        <h1>Home</h1>
        here we are adding new components
        {navLinks.map((link, i) => (
          <Button key={i} m={2}>
            <Link to={link.to}>{link.label}</Link>
          </Button>
        ))}
      </Container>
    </Box>
  );
};

// This is a layout
const ProjectLayout = () => {
  return (
    <Box p='md'>
      <Container size='xl'>
        <h1>Projects</h1>
        <Outlet />
      </Container>
    </Box>
  );
};

const About = () => {
  return (
    <Box p='md'>
      <Container size='xl'>
        <h1>About</h1>
        <p>This is a simple example of a React component that renders HTML.</p>
      </Container>
    </Box>
  );
};
const Projects = () => {
  return (
    <Box>
      <Card>
        <h2>Project Name</h2>
        <p>Project Description.</p>
      </Card>
    </Box>
  );
};
const Project = () => {
  return (
    <Box p='md'>
      <Container size='xl'>
        <h1>Project</h1>
        <p>This is a simple example of a React component that renders HTML.</p>
      </Container>
    </Box>
  );
};

const Contact = () => {
  return (
    <Box p='md'>
      <Container size='xl'>
        <h1>Contact</h1>
        <p>This is a simple example of a React component that renders HTML.</p>
      </Container>
    </Box>
  );
};

const Blog = () => {
  return (
    <Box p='md'>
      <Container size='xl'>
        <h1>Blog</h1>
        <p>This is a simple example of a React component that renders HTML.</p>
      </Container>
    </Box>
  );
};

const NotFound = () => {
  return (
    <Box p='md'>
      <Container size='xl'>
        <h1>Not Found</h1>
        <p>404 - Page not found</p>
      </Container>
    </Box>
  );
};
