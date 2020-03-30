import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Routes from './routes';

import { Container } from './global';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
  }
`
function App() {
  return (
   <Container>
    <GlobalStyle/>
    <Routes/>
   </Container>
  );
}

export default App;
