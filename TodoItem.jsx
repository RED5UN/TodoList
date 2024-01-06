import React, { useState, useEffect } from "react";
import "./styles.css";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  useEffect(() => {
    setEditedTitle(title);
  }, [title]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    toggleTodo(id, editedTitle, completed);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(title);
  };

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <li className={isEditing ? "editing" : ""}>
      {isEditing ? (
        <div>
          <input type="text" value={editedTitle} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleTodo(id, !completed)}
            />

            {title}
          </label>
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete" onClick={() => deleteTodo(id)}>
            Remove
          </button>
        </div>
      )}
    </li>
  );
}
