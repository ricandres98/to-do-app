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
        <label htmlFor="new-task-description" className="mb-2.5 text-lg font-bold">
          Crea una nueva tarea:
        </label>
        <div className="flex gap-2 justify-between">
          <input
            type="text"
            id="new-task-description"
            placeholder="Ej: Lavar los platos"
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value); setError(null)}}
            className={`
              h-9 w-full px-3 py-2
              text-sm rounded-md text-slate-800
              bg-white border-1  outline-none
              focus:ring-1  focus:border-none
              ${error ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-gray-400"}`}
          />
          <button
            className={`
              h-9 px-4 py-2
              text-sm leading-4
              text-white bg-gray-900
              rounded-md cursor-pointer outline-none
              active:scale-98 
              hover:bg-gray-800
              transition duration-150 ease-in-out`}
          >
            Agregar
          </button>
        </div>
      </form>
      {error && 
        <p className={`
          inline-block 
          mt-1
          text-xs font-bold 
          text-red-500
          `}>
          {error}
        </p>}
    </div>
  );
};

export { CreateNewTask };
