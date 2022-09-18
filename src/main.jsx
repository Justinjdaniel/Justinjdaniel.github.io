import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '@fontsource/inter';
import '@fontsource/poppins';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The color mode script needs to be added before the content inside the body tag for local storage syncing to work correctly. */}
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
