import { TrashCan } from "../../svg/TrashCan.tsx";
import type { Task } from "../../types/index.ts";
import "./TaskItem.css";

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
  const taskItemClassName =
    status === "completed" ? "TaskItem completed" : "TaskItem";

  return (
    <div className={taskItemClassName}>
      <div className="info">
        <span className="description">{description}</span>
        <span className="status">{statusText}</span>
      </div>
      <div className="panel">
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={status === "completed"}
          onChange={toggleCompleteTask}
        />
        {/* <button className="complete-button" onClick={toggleCompleteTask}>{buttonText}</button> */}
        <button className="delete-button" onClick={deleteTask} title="Eliminar">
          <TrashCan strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export { TaskItem };
