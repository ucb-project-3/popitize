import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import Login from './containers/Login';
import Hosts from './containers/Hosts';
import Renters from './containers/Renters';
import Dashboard from './containers/Dashboard';
import Header from './presentational/Header';
import store from './store';
// import PayPal from './containers/PaypalSetup';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFCCBC' },
    secondary: { main: '#FFAB91' },
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
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={Login} />
                {/* <Route exact path="/hosts" component={Hosts} />
                <Route exact path="/renters" component={Renters} /> */}
                {/* <Route exact path="/paypal" component={PayPal} /> */}
              </Switch>
            </Router>
          </React.Fragment>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
