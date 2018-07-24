import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
// import ListItem from '@material-ui/core/ListItem';
// import RentalDashboard from './containers/RentalDashboard';
import Login from './containers/Login';
import Header from './presentational/Header';
import store from './store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#BADA55' },
    secondary: { main: '#E91E63' },
  }
});

class App extends React.Component {
  componentDidCatch() {
    console.log('App failed to mount');
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <React.Fragment>
            <Header />
            <Router>
              <Switch>
                {/* <Route path="/dashboard" component={RentalDashboard} /> */}
                <Route exact path="/" component={Login} />
              </Switch>
            </Router>
          </React.Fragment>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
