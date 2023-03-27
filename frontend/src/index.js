import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme} >

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

