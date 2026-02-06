import { TrashCan } from "../../svg/TrashCan";
import type { Task } from "../../types/task.js";
import styles from "./TaskItem.module.css";

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
    status === "completed" ? `${styles.TaskItem} ${styles.completed}` : styles.TaskItem;

  return (
    <div className={taskItemClassName}>
      <div className={styles.info}>
        <span className={styles.description}>{description}</span>
        <span className={styles.status}>{statusText}</span>
      </div>
      <div className={styles.panel}>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={status === "completed"}
          onChange={toggleCompleteTask}
        />
        {/* <button className="complete-button" onClick={toggleCompleteTask}>{buttonText}</button> */}
        <button className={styles["delete-button"]} onClick={deleteTask} title="Eliminar">
          <TrashCan strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export { TaskItem };
