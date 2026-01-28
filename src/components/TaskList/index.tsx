import "./TasksList.css";

const TasksList = ({ children }) => {
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
