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
    <div
      className={`
      flex justify-between
      max-w-md w-full h-min p-2.5
      bg-purple-white text-background-color rounded-sm border border-bright-color-1
      ${status === "completed" && "opacity-80"}
      lg:min-h-30 lg:max-w-sm
    `}
    >
      <div
        className={`
        flex flex-col gap-2 justify-between
        width-full max-w-sm 
        `}
      >
        <span
          className={`
            text-xl font-bold text-wrap first-letter:capitalize
            ${status === "completed" && "line-through text-gray-800"}
          `}
        >
          {description}
        </span>
        <span
          className={`
            text-sm capitalize
          `}
        >
          {statusText}
        </span>
      </div>
      <div
        className={`
          flex gap-3.5 items-center
        `}
      >
        <input
          type="checkbox"
          name="completed"
          id="completed"
          className="size-6 cursor-pointer"
          checked={status === "completed"}
          onChange={toggleCompleteTask}
        />
        {/* <button className="complete-button" onClick={toggleCompleteTask}>{buttonText}</button> */}
        <button
          className={`
            h-6 text-red-800 cursor-pointer 
            hover:text-red-700 active:text-red-900
            transition-colors duration-200 ease-in-out`}
          onClick={deleteTask}
          title="Eliminar"
        >
          <TrashCan strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export { TaskItem };
