import React from "react";

export default function NoteItem({ id, content, onRemove }) {
  return (
    <li className="note">
      <p className="note-text">{content}</p>
      <span className="note-remove" onClick={() => onRemove(id)}>
        &#10006;
      </span>
    </li>
  );
}
