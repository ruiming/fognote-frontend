import * as React from 'react';
import { noteStore } from '../../stores';
import { observer } from 'mobx-react';

@observer
export default class Home extends React.Component {

  async componentDidMount () {
    await noteStore.fetchNoteList();
  }

  render () {
    return (
      <div>
        {(noteStore.notes || []).map((note, index) => <p key={index}>{note.title}</p>)}
      </div>
    );
  }
}
