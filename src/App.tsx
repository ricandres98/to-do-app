import { useState } from 'react';
import { useTasks } from "./hooks/useTasks.tsx";
import { CreateNewTask } from "./components/CreateNewTask"
import { TasksList } from './components/TaskList';
import { FilterPanel } from './components/FilterPanel/index.tsx';
import { TaskItem } from './components/TaskItem/index.tsx';
import './App.css';

function App() {
  const { tasks, createTask, toggleCompleteTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState('all');

  return (
    <>
      <div className="App">
        <div className="title-sidebar">
          <div className="title">
            <h1>GetItDone</h1>
            <p>Saca los pendientes de tu mente, anótalos y cúmplelos</p>
          </div>
          <CreateNewTask createTask={createTask} />
          <FilterPanel filter={filter} setFilter={setFilter} tasks={tasks}/>
        </div>
        <main className="main-content">
          <TasksList>
            {tasks.length === 0 ? (
              <p >No hay tareas ¡Crea una!</p>
            ) : (
              tasks
                .filter((task) =>
                  filter === "all" ? true : task.status === filter,
                )
                .map((task) => (
                  <TaskItem
                    description={task.description}
                    status={task.status}
                    key={task.id}
                    toggleCompleteTask={() => toggleCompleteTask(task.id)}
                    deleteTask={() => deleteTask(task.id)}
                  />
                ))
            )}
          </TasksList>
        </main>
      </div>
    </>
  );
}

export default App
