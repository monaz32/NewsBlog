import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
//import configureStore from './stores/configureStore';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

//const store = configureStore();
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
