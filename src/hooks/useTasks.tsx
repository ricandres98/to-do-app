// import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useTasks = () => {
  const { item: tasks, saveItem: setTasks} = useLocalStorage("tasks", []);
  // const [tasks, setTasks] = useState([]);

  const createTask = (description) => {
    const newTask = {
      id: Date.now(),
      description: description,
      status: "active",
    };

    setTasks([...tasks, newTask]);
    console.log("Tarea creada:", tasks);
  };

  const toggleCompleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].status =
        updatedTasks[taskIndex].status === "active" ? "completed" : "active";
      setTasks(updatedTasks);
      console.log("Tarea completada:", updatedTasks);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    console.log("Tarea eliminada:", updatedTasks);
  };

  return {
    createTask,
    toggleCompleteTask,
    deleteTask,
    tasks,
  };
};

export { useTasks };
