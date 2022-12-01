import React from "react";

import shortid from "shortid";

export default function NoteForm({ note, onSubmite, onChange, onUpdate }) {
  return (
    <form
      className="note-form"
      onSubmit={(event) =>
        onSubmite({ id: shortid.generate(), content: note }, event)
      }
    >
      <div className="input-box">
        <input
          className="note-input"
          type="text"
          name="note"
          value={note}
          onChange={onChange}
          placeholder="Введите заметку.."
        />
      </div>
      <button className="note-btn">Добавить</button>
      <button className="note-update" type="button" onClick={onUpdate}>
        <span className="material-symbols-outlined">update</span>
      </button>
    </form>
  );
}
