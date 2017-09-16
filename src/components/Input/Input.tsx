import * as React from 'react';
import './Input.css';
import { observer } from 'mobx-react';

interface InputPropsInterface {
  name?: string;
  placeholder?: string;
  type?: string;
  // tslint:disable-next-line:no-any
  value?: any;
  // tslint:disable-next-line:no-any
  onChange(val: any): void;
}

@observer
export default class Input extends React.Component<InputPropsInterface, {}> {
  render () {
    return (
      <div className="inputField">
        <input 
          name={this.props.name}
          placeholder={this.props.placeholder} 
          className="inputField__input" 
          type={this.props.type || 'text'}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}
