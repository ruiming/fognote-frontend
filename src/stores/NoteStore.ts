import { observable, action } from 'mobx';
import axios from 'axios';
import {
  NoteInterface,
  NoteQueryInterface
} from '../interfaces/NoteInterface';

export class NoteStore {
  @observable notes: NoteInterface[];

  @action fetchNoteList = async (query?: NoteQueryInterface) => {
    const res = await axios.get('/notes', {
      params: query
    });
    this.notes = res.data;
    console.log(this.notes);
  }
}

export const noteStore = new NoteStore();
