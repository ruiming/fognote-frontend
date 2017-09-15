export interface UserInterface {
  id: number;
  /** 邮箱 */
  email: string;
  /** 用户名 */
  name: string;
  /** 密码 */
  password: string;
  /** 创建时间 */
  createdAt: string;
  /** 更新时间 */
  updatedAt: string;
  /** 该用户订阅的笔记 */
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface RegisterInterface {
  name: string;
  email: string;
  password: string;
}
