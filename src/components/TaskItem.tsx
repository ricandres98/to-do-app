import { TrashCan } from "@/svg/TrashCan";
import type { Task } from "@/types/task.js";

type Props = {
  description: Task["description"],
  status: Task["status"],
  toggleCompleteTask: () => void,
  deleteTask: () => void,
}

const TaskItem = ({
  description,
  status,
  toggleCompleteTask,
  deleteTask,
}: Props) => {
  // const buttonText = status === 'active' ? 'completar' : 'descompletar';
  const statusText = status === "active" ? "pendiente" : "completada";
  // const taskItemClassName =
  //   status === "completed" ? `${styles.TaskItem} ${styles.completed}` : styles.TaskItem;

  return (
    <li
      className={` group
        flex gap-4 items-center
        w-full h-min py-8 lg:py-4
        border-gray-300 border-b
        dark:border-slate-800
    `}
    >
      <div className="flex justify-between gap-4">
        <input
          type="checkbox"
          name="completed"
          id="completed"
          className="size-4 mt-1 border-gray-300 cursor-pointer"
          checked={status === "completed"}
          onChange={toggleCompleteTask}
        />
        <div className="flex flex-col gap-1">
          <span
            className={`
              text-sm font-bold text-wrap first-letter:capitalize
              text-gray-900 dark:text-slate-100
              ${status === "completed" && "line-through text-gray-800 dark:text-slate-300"}
              lg:text-base
            `}
            onClick={toggleCompleteTask}
          >
            {description}
          </span>
        </div>
      </div>
      <button
        className={`
            p-1 text-red-800 cursor-pointer 
            hover:text-red-700 active:text-red-900
            rounded-md
            lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
            transition-colors duration-200 ease-in-out
            dark:text-red-400 dark:hover:text-red-300 dark:active:text-red-500
            dark:hover:bg-red-500/10 dark:active:bg-red-500/20`}
        onClick={deleteTask}
        title="Eliminar"
      >
        <TrashCan className="size-5" strokeWidth={2} />
      </button>
    </li>
  );
};

export { TaskItem };
