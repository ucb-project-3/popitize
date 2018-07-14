import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';


class App extends React.Component {
  componentWillMount() {
    console.log('App mounting...');
  }

  componentDidMount() {
    console.log('App has been mounted');
  }

  componentDidCatch() {
    console.log('App failed to mount');
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/" component={() => <p>router works</p>} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
