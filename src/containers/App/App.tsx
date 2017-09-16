import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import MenuItem from '../../components/MenuItem/MenuItem';
import { userStore } from '../../stores';
import './App.css';
import Login from '../Login/Login';

class App extends React.Component {
  render() {
    if (userStore.user) {
      return (
        <div className="App">
          <Menu>
            <MenuItem icon="图标1" title="啊啊所大所大所多"/>
            <MenuItem icon="图标2" title="发生发啥是否发生"/>
          </Menu>
          <Switch>
            <Route exact={true} path="/input" component={Menu} />
          </Switch>
        </div>
      );
    } else {
      return <Login />;
    }
    
  }
}

export default App;
