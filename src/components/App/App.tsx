import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import TextInput from '../TextInput/TextInput';

import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Switch>
          <Route exact={true} path="/input" component={TextInput} />
        </Switch>
      </div>
    );
  }
}

export default App;
