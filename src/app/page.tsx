"use client";

import { useState } from 'react';
import { useTasks } from "@/hooks/useTasks";
import { CreateNewTask } from "@/components/CreateNewTask"
import { TasksList } from '@/components/TaskList';
import { FilterPanel } from '@/components/FilterPanel';
import { TaskItem } from '@/components/TaskItem';
import { FilterOptionButton } from '@/components/FilterOptionButton';
import type { filter } from '@/types/filter';
import styles from "./page.module.css";



export default function Home() {
  const { tasks, createTask, toggleCompleteTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState<filter>('all');

  const filteredQuantity = (filter: filter) => {
    return tasks.filter((task) => task.status === filter).length;
  }

  return (
    <div className={styles.App}>
      <div className={styles["title-sidebar"]}>
        <div className={styles.title}>
          <h1>GetItDone</h1>
          <p>Saca los pendientes de tu mente, anótalos y cúmplelos</p>
        </div>
        <CreateNewTask createTask={createTask} />
        <FilterPanel>
          <FilterOptionButton
            id="all"
            text="Todas"
            defaultValue={true}
            setFilter={setFilter}
            filter={filter}
            quantity={tasks.length}
          />
          <FilterOptionButton
            id="active"
            text="Pendientes"
            setFilter={setFilter}
            filter={filter}
            quantity={filteredQuantity("active")}
          />
          <FilterOptionButton
            id="completed"
            text="Completadas"
            setFilter={setFilter}
            filter={filter}
            quantity={filteredQuantity("completed")}
          />
        </FilterPanel>
      </div>
      <main className={styles["main-content"]}>
        <TasksList>
          {tasks.length === 0 ? (
            <p>No hay tareas ¡Crea una!</p>
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
  );
}
