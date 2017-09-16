import * as React from 'react';
import { NoteInterface } from '../../interfaces/NoteInterface';

interface NoteItemPropsInterface {
  data: NoteInterface;
}

export default class NoteItem extends React.Component<NoteItemPropsInterface, {}> {

  render () {
    return (
      <div>
        <div>
          <img src="#" />
        </div>
        <div>
          <p>标题</p>
          <small>
            <span>#放假吧</span>
            <span>#让我去</span>
            <span>#刚发的</span>
            安达市大所大所多撒大所大所大所大所大所多
          </small>
        </div>
      </div>
    );
  }
}
