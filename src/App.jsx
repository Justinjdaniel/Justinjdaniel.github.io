import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';

const Home = React.lazy(() => import('./pages/Home')); //Todo remove lazy in homepage after development
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));

// Todo updating the app to use one of the new routers from 6.4.; ref: https://reactrouter.com/en/main/routers/picking-a-router

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='about'
            element={
              <React.Suspense fallback={<>...</>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path='projects/*'
            element={
              <React.Suspense fallback={<>...</>}>
                <Projects />
              </React.Suspense>
            }
          />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
