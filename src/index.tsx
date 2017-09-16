import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'mobx-react';
import * as stores from './stores';

import 'antd/dist/antd.css';  // TODO: 按需加载

import './index.css';

axios.defaults.baseURL = 'http://127.0.0.1:8080/v1';

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')  as HTMLElement
);

registerServiceWorker();
