import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Router from './router/Router';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
