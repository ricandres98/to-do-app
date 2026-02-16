"use client";

import { useState } from 'react';
import { useTasks } from "@/hooks/useTasks";
import { CreateNewTask } from "@/components/CreateNewTask"
import { TasksList } from '@/components/TaskList';
import { FilterPanel } from '@/components/FilterPanel';
import { TaskItem } from '@/components/TaskItem';
import { FilterOptionButton } from '@/components/FilterOptionButton';
import { AbsolutePositionLink } from "@/components/AbsolutePositionLink";
import type { filter } from '@/types/filter';



export default function Home() {
  const { tasks, createTask, toggleCompleteTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState<filter>('all');

  const filteredQuantity = (filter: filter) => {
    return tasks.filter((task) => task.status === filter).length;
  }

  return (
    <div className={`
      my-0 mx-auto p-2.5 max-w-xl
      lg:grid lg:grid-cols-[min-content_1fr]
      lg:w-full lg:h-dvh lg:max-w-none lg:overflow-hidden
      `}>
      <AbsolutePositionLink href="/about" title="About">
        About
      </AbsolutePositionLink>
      <div className={`
        my-0 mx-auto max-w-lg
        lg:sticky lg:top-0 lg:grid lg:content-center 
        lg:h-dvh lg:max-w-none lg:pl-5

        `}>
        <div className={"mb-5"}>
          <h1 className="text-5xl">GetItDone</h1>
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
      <main className={`
        lg:h-dvh lg:overflow-y-auto lg:p-5 lg:scroll-smooth`}>
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
