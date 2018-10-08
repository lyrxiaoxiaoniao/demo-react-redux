import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import titleReducer from './store/reducer';
import './index.css';
import TodoApp from './containers/index.jsx';
// PWA progressive web applocation
// https协议的服务器上
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  titleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
