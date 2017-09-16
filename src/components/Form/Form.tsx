import * as React from 'react';
import './Form.css';

interface FormPropsInterface {
  // tslint:disable-next-line:no-any
  onSubmit?(body: any): Promise<void>;
}

export default class Form extends React.Component<FormPropsInterface, {}> {
  render () {
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}
