import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import NotesList from "./components/notesList/NotesList";
import Note from "./components/note/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const id = uuid();
    const newNote = {
      id: id,
      title: "Untitled Note",
      body: "Modify your note content",
      category: "uncategorized",
      lastUpdated: Date.now(),
    };
    setActiveNote(id);
    setNotes([newNote, ...notes]);
  };

  const onEditNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotes);
  };

  const onDeleteNote = (idNote) => {
    setNotes(notes.filter((note) => note.id !== idNote));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <NotesList
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Note activeNote={getActiveNote()} onEditNote={onEditNote} />
    </div>
  );
}

export default App;
