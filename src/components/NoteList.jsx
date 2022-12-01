import React from "react";

import NoteItem from "./NoteItem";

export default function NoteList({ list, onRemove }) {
  if (!list.length) return null;
  return (
    <ul className="notes-list">
      {list.map((el) => (
        <NoteItem {...el} key={el.id} onRemove={onRemove} />
      ))}
    </ul>
  );
}
