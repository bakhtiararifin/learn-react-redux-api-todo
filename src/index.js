import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './App';

let store = createStore(reducer);

store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  todo: 'emboh'
})

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
