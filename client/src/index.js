import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Provider } from 'react-redux'
import { applyMiddleware,createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers/index'


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)


ReactDom.render(
  <Provider
    store = {createStoreWithMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
  >
  <App />
  </Provider>,
  document.getElementById('root'));

  serviceWorker.unregister();

