import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers/root';

import './css/index.css'

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App className='root'/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();