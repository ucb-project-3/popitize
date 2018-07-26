import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import Login from './containers/Login';
import Hosts from './containers/Hosts';
import Header from './presentational/Header';
import store from './store';
// import RentalDashboard from './presentational/RentalDashboard';

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
                {/* <Route path="/dashboard" component={() =>
                <p>Im the dashboard look at me</p>} /> */}
                <Route exact path="/" component={Login} />
                <Route exact path="/hosts" component={Hosts} />
              </Switch>
            </Router>
          </React.Fragment>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
