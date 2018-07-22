import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import Login from './containers/Login';
import { Header } from './presentational/Layouts';
import store from './store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#BADA55' },
    secondary: { main: '#E91E63' },
  }
});

class App extends Component {
  componentDidCatch() {
    console.log('App failed to mount');
  }

  render() {
    return (
      <Fragment>
        <ListItem>
          <Login />
        </ListItem>
        <Router>
          <MuiThemeProvider theme={theme}>
            <Provider store={store}>
              <Switch>
                <Route exact path="/" component={Header} />
              </Switch>
            </Provider>
          </MuiThemeProvider>
        </Router>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
