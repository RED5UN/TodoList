import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;

    onSubmit(newItem.trim());
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <label htmlFor="item" className="Item">
        New Item
      </label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
