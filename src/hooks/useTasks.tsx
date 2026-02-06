import type { Task } from "../types/task";
import { useLocalStorage } from "./useLocalStorage";

const useTasks = () => {
  const { item: tasks, saveItem: setTasks } = useLocalStorage<Task[]>("tasks", []);

  const createTask = (description: string) => {
    const newTask: Task = {
      id: Date.now(),
      description: description,
      status: "active",
    };

    setTasks([...tasks, newTask]);
    console.log("Tarea creada:", tasks);
  };

  const toggleCompleteTask = (id: Task["id"]) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].status =
        updatedTasks[taskIndex].status === "active" ? "completed" : "active";
      setTasks(updatedTasks);
      console.log("Tarea completada:", updatedTasks);
    }
  };

  const deleteTask = (id: Task["id"]) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    console.log("Tarea eliminada:", updatedTasks);
  };

  return {
    createTask,
    toggleCompleteTask,
    deleteTask,
    tasks
  };
};

export { useTasks };
