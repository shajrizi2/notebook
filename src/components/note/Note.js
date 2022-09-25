import React from "react";

const Note = ({ activeNote, onEditNote }) => {
  const onEdit = (key, value) => {
    onEditNote({
      ...activeNote,
      [key]: value,
      lastUpdated: Date.now(),
    });
  };

  if (!activeNote) return <div className="noActiveNote">No note selected</div>;
  return (
    <div className="appMain">
      <div className="noteEdit">
        <div className="noteTitleContent">
          <input
            type="text"
            id="title"
            value={activeNote.title}
            onChange={(e) => onEdit("title", e.target.value)}
            autoFocus
          />
          <select
            value={
              activeNote.category === "uncategorized"
                ? "selecet category"
                : activeNote.category
            }
            name="category"
            onChange={(e) => onEdit("category", e.target.value)}>
            <option value="selecet category" selected disabled hidden>
              Select category
            </option>
            <option value="personal">personal</option>
            <option value="work">work</option>
            <option value="school">school</option>
            <option value="gym">gym</option>
          </select>
        </div>
        <textarea
          id="body"
          placeholder="write your note here..."
          value={activeNote.body}
          onChange={(e) => onEdit("body", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Note;
