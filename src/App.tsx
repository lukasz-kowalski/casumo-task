import React from 'react';
import { ThemeProvider } from 'styled-components'
import Router from 'router/Router';
import { defaultTheme } from 'themes/default-theme'

const App = () => {
  return <ThemeProvider theme={defaultTheme}><Router /></ThemeProvider>;
};

export default App;
