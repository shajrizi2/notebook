import { useState } from "react";

const NotesList = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const filterCategories =
    categoryFilter !== "all"
      ? notes.filter((e) => e.category === categoryFilter)
      : notes;

  const filterNotes =
    searchFilter.length > 3
      ? filterCategories.filter((e) => e.title.includes(searchFilter))
      : filterCategories;
  return (
    <div className="notes">
      <div className="notesHeader">
        <h1>
          <select
            name="category"
            onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="all">All Notes</option>
            <option value="personal">Personal Notes</option>
            <option value="work">Work Notes</option>
            <option value="school">School Notes</option>
            <option value="gym">Gym Notes</option>
          </select>
        </h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <input
        className="searchInput"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      <div className="notesSection">
        {filterNotes.map((note) => (
          <div
            className={`singleNote ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}>
            <div className="noteTitle">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.body && note.body.substring(0, 50) + "..."}</p>
            <small>
              Last modified {new Date(note.lastUpdated).toLocaleString()}
            </small>
            <small>{note.category}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
