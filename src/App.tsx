import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import ProjectLayout from './layout/ProjectLayout';
import About from './view/About';
import Blog from './view/Blog';
import Contact from './view/Contact';
import Home from './view/Home';
import NotFound from './view/NotFound';
import Project from './view/Project';
import Projects from './view/Projects';

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
          <Route path='/' element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<ProjectLayout />}>
              <Route index element={<Projects />} />
              <Route path=':id' element={<Project />} />
            </Route>
            <Route path='blog' element={<Blog />} />
            <Route path='404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};
export default App;
