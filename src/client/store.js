import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(logger, thunk),
);
