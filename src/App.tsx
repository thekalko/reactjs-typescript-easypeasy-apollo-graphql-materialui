import React from 'react';
import { StoreProvider } from 'easy-peasy';
import store from './stores';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { AppRouter } from './router/AppRouter';

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
});

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
