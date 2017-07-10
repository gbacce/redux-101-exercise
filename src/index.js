import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxStudents from './containers/ReduxStudents'

// Fetch the createStore method from the redux module
import { createStore } from 'redux';

// Import the Provider from react-redux (so react and redux can talk)
import {Provider } from 'react-redux';

// Import the rootReducer (so it can access the Store)
import reducers from './reducers/index'

// Create the store.
const theStore = createStore(reducers);

ReactDOM.render(
  <Provider store={theStore} >
    <ReduxStudents />
  </Provider >,
  document.getElementById('root')
);