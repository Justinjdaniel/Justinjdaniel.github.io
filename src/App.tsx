import { Box, Button, Container, MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
      }}
    >
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    </MantineProvider>
  );
};
export default App;

//  This component is the root of this application
const MyApp = () => {
  return (
    <Box p="md">
      <Container size="xl">
        here we are adding new components
        <Button<'a'> component="a" href="#" mx={20}>
          Anchor button
        </Button>
      </Container>
    </Box>
  );
};
