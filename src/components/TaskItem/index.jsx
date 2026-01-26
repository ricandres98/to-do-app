
import { TrashCan } from "../../svg/TrashCan";
import "./TaskItem.css";

const TaskItem = ({ description, status, toggleCompleteTask, deleteTask }) => {
  // const buttonText = status === 'active' ? 'completar' : 'descompletar';
  const statusText = status === 'active' ? 'pendiente' : 'completada';
  const descriptionClass = status === "completed" ? "description completed" : "description";

  return (
    <div className="TaskItem">
      <div className="info">
        <span className={descriptionClass}>{description}</span>
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
