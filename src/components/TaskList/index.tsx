import type React from "react";
import "./TasksList.css";

const TasksList = ({ children }:React.PropsWithChildren) => {
  return (
    <div className="TasksList">
      {/* 
        <TaskItem description="Lavar los platos" status="active" />
        <TaskItem description="Hacer la compra" status="completada" /> 
      */}
      {children}
    </div>
  );
};

export { TasksList };
