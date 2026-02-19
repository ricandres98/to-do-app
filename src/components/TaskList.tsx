import type React from "react";

type props = {
  children: React.ReactNode,
  tasksLength: number,
}

const TasksList = ({ children, tasksLength }: props) => {
  return (
    <ul className={`
      flex flex-col items-center gap-5
      mt-4
      lg:max-w-none
      ${tasksLength !== 0 ? "lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]" : ""}`}>
      {/* 
        <TaskItem description="Lavar los platos" status="active" />
        <TaskItem description="Hacer la compra" status="completada" /> 
      */}
      {children}
    </ul>
  );
};

export { TasksList };
