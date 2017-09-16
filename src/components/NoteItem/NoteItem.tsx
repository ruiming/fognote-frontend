import * as React from 'react';
import { NoteInterface } from '../../interfaces/NoteInterface';
import './NoteItem.css';
import { observer } from 'mobx-react';

interface NoteItemPropsInterface {
  data: NoteInterface;
}

@observer
export default class NoteItem extends React.Component<NoteItemPropsInterface, {}> {

  render () {
    return (
      <div className="note">
        <div className="note_img">
          <img src="#" />
        </div>
        <div className="note_intro">
          <p>{this.props.data.title}</p>
          <small>
            {(this.props.data.tags || []).map((tag, index) => <a key={index}><span>{tag}</span></a>)}
            {this.props.data.summary}
          </small>
        </div>
      </div>
    );
  }
}
