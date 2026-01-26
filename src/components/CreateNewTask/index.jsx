import React from "react";
import "./CreateNewTask.css";

const CreateNewTask = ({ createTask }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "")
      setError("La descripción no puede estar vacía");
    else {
      createTask(inputValue);
      setInputValue("");
      setError(null);
    }
  };

  return (
    <div className="CreateNewTask">
      <form onSubmit={onSubmit}>
        <label htmlFor="new-task-description">
          Crea una nueva tarea:
        </label>
        <div className="panel">
          <input
            type="text"
            id="new-task-description"
            placeholder="Ej: Lavar los platos"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>Agregar</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export { CreateNewTask };
