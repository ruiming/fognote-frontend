import * as React from 'react';
import { noteStore } from '../../stores';
import { observer } from 'mobx-react';
import NoteItem from '../../components/NoteItem/NoteItem';
import './Home.css';

@observer
export default class Home extends React.Component {

  async componentDidMount () {
    await noteStore.fetchNoteList();
  }

  render () {
    return (
      <section className="home">
        <div>
          {(noteStore.notes || []).map((note, index) => <NoteItem data={note} key={index} />)}
        </div>
      </section>
    );
  }
}
