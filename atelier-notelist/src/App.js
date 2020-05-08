import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [noteList, setNoteList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const test = localStorage.getItem('notes');
    if (test)
      setNoteList(JSON.parse(test));
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(noteList));
  }, [noteList]);

  const updateForm = index => {
    setTitle(noteList[index].title);
    setDescription(noteList[index].description);
  }

  const addNote = (title, description) => {
    if (title === '' || description === '')
      return false;
    const note = { title, description };
    setNoteList([...noteList, note]);
  }

  return (
    <div>
      <List list={noteList} update={updateForm} />
      <Form submitForm={addNote} data={{ title, description }} setter={{ setDescription, setTitle }} />
    </div>
  )
}

export default App;
