import type React from "react";

type props = {
  children: React.ReactNode,
  tasksLength: number,
}

const TasksList = ({ children, tasksLength }: props) => {
  return (
    <div className={`
      grid gap-2.5 justify-items-center
      mt-5 max-w-xl 
      lg:max-w-none lg:min-h-[calc(100dvh-60px)]
      ${tasksLength !== 0 ? "lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]" : ""}`}>
      {/* 
        <TaskItem description="Lavar los platos" status="active" />
        <TaskItem description="Hacer la compra" status="completada" /> 
      */}
      {children}
    </div>
  );
};

export { TasksList };
