import * as React from 'react';
import './MenuItem.css';

interface MenuItemPropsInterface {
  icon: string;
  title: string;
}

export default class MenuItem extends React.Component<MenuItemPropsInterface, {}> {
  render() {
    return (
      <div className="MenuItem">
        <span className="MenuItem__icon">{this.props.icon}</span>
        <p>{this.props.title}</p>
        <a className="MenuItem__link" href="/" />
      </div>
    );
  }
}
