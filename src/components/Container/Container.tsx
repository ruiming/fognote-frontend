import * as React from 'react';
import './Container.css';

export default class Container extends React.Component {
  render () {
    return (
      <section className="Container">
        {this.props.children}
      </section>
    );
  }
}
