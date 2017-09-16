import * as React from 'react';
import './Button.css';

interface ButtonPropsInterface {
  type?: 'button' | 'reset' | 'submit';
  text: string;
  // tslint:disable-next-line:no-any
  onClick(body: any): Promise<void>;
}

export default class Button extends React.Component<ButtonPropsInterface, {}> {
  render () {
    return (
      <div className="ButtonField">
        <button
          className="ButtonField__button"
          type={this.props.type || 'button'}
          onClick={this.props.onClick}
        >
        {this.props.text}
        </button>
      </div>
    );
  }
}
