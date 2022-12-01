import React, { useEffect, useState } from "react";

import NoteForm from "./NoteForm";

import NoteList from "./NoteList";

export default function Notes() {
  const [list, setList] = useState([]);

  const [note, setNote] = useState("");

  useEffect(() => {
    fetch("http://localhost:7777/notes")
      .then((response) => response.json())
      .then((notes) => setList(notes));
  }, [list]);

  function handleChange(event) {
    setNote(event.target.value);
  }

  function handleSubmite(el, event) {
    event.preventDefault();

    if (el.content.trim() === "") return null;

    fetch("http://localhost:7777/notes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(el),
    });

    setList((prevList) => [...prevList, el]);

    setNote("");
  }

  function removeItem(id) {
    fetch(`http://localhost:7777/notes/${id}`, {
      method: "delete",
    });
    setList((prevList) => [...prevList.filter((el) => el.id !== id)]);
  }

  function handleUpdate() {
    fetch("http://localhost:7777/notes")
      .then((response) => response.json())
      .then((notes) => console.log(notes));
  }

  return (
    <div className="notes">
      <div className="mb-20">
        <NoteForm
          onSubmite={handleSubmite}
          onChange={handleChange}
          note={note}
          onUpdate={handleUpdate}
        />
      </div>
      <NoteList list={list} onRemove={removeItem} />
    </div>
  );
}
