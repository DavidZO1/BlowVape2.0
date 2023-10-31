import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './features/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);
