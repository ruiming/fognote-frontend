import * as React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
  render() {
    return (
      <aside className="menu">
        <header className="menu__header">Fognote</header>
        <section className="menu__content">
          {this.props.children}
        </section>
      </aside>
    );
  }
}
