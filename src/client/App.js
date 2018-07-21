import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import Login from './containers/Login';
import store from './store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#757ce8' },
    secondary: { main: '#E91E63' },
  }
});

class App extends React.Component {
  componentDidCatch() {
    console.log('App failed to mount');
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={Login} />
            </Switch>
          </Provider>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
