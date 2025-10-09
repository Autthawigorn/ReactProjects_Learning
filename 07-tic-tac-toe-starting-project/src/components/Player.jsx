import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);
  }

  function handleNameChange(event) {
    setEditedName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={handleNameChange}
            required
          />
        ) : (
          <span className="player-name">{editedName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
