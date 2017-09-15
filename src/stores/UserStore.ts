import { observable, action } from 'mobx';
import axios from 'axios';
import { 
  UserInterface,
  LoginInterface,
  RegisterInterface
 } from '../interfaces/UserInterface';

export class UserStore {
  @observable user: UserInterface;

  @action login = async (body: LoginInterface) => {
    const res = await axios.post('/user/login', body);
    this.user = res.data;
  }

  @action register = async (body: RegisterInterface) => {
    const res = await axios.post('/user/register', body);
    this.user = res.data;
  }
}

export const userStore = new UserStore();
