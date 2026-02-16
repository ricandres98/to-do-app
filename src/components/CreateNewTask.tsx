import React from "react";
import type { Task } from "@/types/task";

type Props = {
  createTask: (description: Task["description"]) => void,
}

const CreateNewTask = ({ createTask }: Props) => {
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
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
    <div className="mb-5">
      <form onSubmit={onSubmit} className="grid">
        <label htmlFor="new-task-description" className="mb-2.5 text-base">
          Crea una nueva tarea:
        </label>
        <div className="flex gap-2 justify-between">
          <input
            type="text"
            id="new-task-description"
            placeholder="Ej: Lavar los platos"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`
              h-9 w-full max-w-sm p-1
              text-lg rounded-md text-slate-800
              bg-slate-100
              focus:outline-1 focus:outline-bright-color-1`}
          />
          <button
            className={`
              h-9 px-2.5 py-0.5
              text-base
              text-purple-white bg-bright-color-1
              rounded-md cursor-pointer
              active:scale-98 focus-visible:outline-2 focus-visible:outline-slate-200
              transition-transform duration-150 ease-in-out`}
          >
            Agregar
          </button>
        </div>
      </form>
      {error && 
        <p className={`
          inline-block 
          p-1 mt-1
          text-sm font-bold 
          text-amber-500
          rounded-sm`}>
          {error}
        </p>}
    </div>
  );
};

export { CreateNewTask };
