import type React from "react";
import styles from "./TasksList.module.css";

const TasksList = ({ children }:React.PropsWithChildren) => {
  return (
    <div className={styles.TasksList}>
      {/* 
        <TaskItem description="Lavar los platos" status="active" />
        <TaskItem description="Hacer la compra" status="completada" /> 
      */}
      {children}
    </div>
  );
};

export { TasksList };
