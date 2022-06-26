import { Button, MantineProvider } from '@mantine/core';


//App component that renders the MantineProvider
const App = () => {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        colorScheme: 'dark',
        fontFamily: 'Open Sans, sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
    >
      <MyApp />
    </MantineProvider>
  );
};
export default App;

//  This component is the root of this application
const MyApp = () => {
  return (
    <>
      This is a initial component
      <Button className="my-button" mx={20}>
        My button
      </Button>
      <Button<'a'> component="a" href="#">
        Anchor button
      </Button>
      React router button
    </>
  );
};
