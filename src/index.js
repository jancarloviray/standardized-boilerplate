import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/globalStyle';
import appStore from './AppStore';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
