import * as React from 'react';
import Input from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { LoginInterface } from '../../interfaces/UserInterface';
import { userStore } from '../../stores';
import './Login.css';

@observer
export default class Login extends React.Component {
  @observable email: string;
  @observable password: string;

  login = async (body: LoginInterface) => {
    await userStore.login({
      email: this.email,
      password: this.password
    });
  }

  setEmail = (email: string) => this.email = email;

  setPassword = (password: string) => this.password = password;

  render () {
    return (
      <div className="login">
        <h1 className="brand login__brand">Fognote 登录</h1>
        <Form>
          <Input name="email" placeholder="邮箱:" type="email" value={this.email} onChange={this.setEmail}/>
          <Input name="password" placeholder="密码:" type="password" value={this.password} onChange={this.setPassword}/>
          <Button text="登录" onClick={this.login}/>
        </Form>
      </div>
    );
  }
}
