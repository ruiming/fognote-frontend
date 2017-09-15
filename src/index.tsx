import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import { Provider } from 'mobx-react';
import * as stores from './stores';

axios.defaults.baseURL = 'http://127.0.0.1:8000/v1';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
