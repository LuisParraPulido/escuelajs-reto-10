import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';
import initialState from './initialState';

const store = createStore(reducer, initialState);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
