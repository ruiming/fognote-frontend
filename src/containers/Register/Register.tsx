import * as React from 'react';
import Input from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { RegisterInterface } from '../../interfaces/UserInterface';
import { userStore } from '../../stores';
import { withRouter } from 'react-router';
import * as H from 'history';
import './Register.css';

@observer
@withRouter
export default class Register extends React.Component<{
  history: H.History
}, {}> {
  @observable email: string;
  @observable password: string;
  @observable name: string;

  register = async (body: RegisterInterface) => {
    await userStore.register({
      name: this.name,
      email: this.email,
      password: this.password
    });
    this.props.history.replace('/');
  }

  setEmail = (email: string) => this.email = email;

  setPassword = (password: string) => this.password = password;

  setName = (name: string) => this.name = name;

  render () {
    return (
      <div className="register">
        <h1 className="brand register__brand">Fognote 注册</h1>
        <Form>
          <Input name="name" placeholder=" 用户名:" type="text" value={this.name} onChange={this.setName}/>
          <Input name="email" placeholder="邮箱:" type="email" value={this.email} onChange={this.setEmail}/>
          <Input name="password" placeholder="密码:" type="password" value={this.password} onChange={this.setPassword}/>
          <Button text="注册" onClick={this.register}/>
        </Form>
      </div>
    );
  }
}
