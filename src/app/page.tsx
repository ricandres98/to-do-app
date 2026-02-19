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
import Link from 'next/link';

export default function Home() {
  const { tasks, createTask, toggleCompleteTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState<filter>('all');

  const filteredQuantity = (filter: filter) => {
    return tasks.filter((task) => task.status === filter).length;
  }

  const conditionalS = () => {
    const quantity = filteredQuantity("active");
    return quantity > 1 || quantity === 0 ? "s" : ""
  }

  return (
    <div
      className={`
      mx-auto 
      lg:grid lg:grid-cols-[min-content_1fr] lg:my-0 lg:grid-rows-[minmax(10rem,max-content)_1fr]
      lg:w-full lg:h-dvh lg:max-w-none lg:overflow-hidden
      `}
    >
      <aside
        className={`
        pt-12 pb-5 mx-auto  px-4 border-b border-gray-200
        lg:sticky lg:top-0 lg:grid lg:content-center
        lg:h-dvh lg:w-64 lg:p-5 lg:my-0
        bg-gray-50 lg:border-r lg:border-b-none

        `}
      >
        <div className={"mb-10"}>
          <h1 className="text-3xl font-semibold tracking-tight">GetItDone</h1>
          <p className="text-base">
            Saca los pendientes de tu mente, anótalos y cúmplelos
          </p>
        </div>
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
      </aside>
      <header className="px-4 py-2 border-b border-gray-200 h-min">
        <div className="absolute top-4 lg:static lg:flex lg:justify-end">
          <Link className="font-bold hover:underline text-sm" href="/about" title="About">
            About
          </Link>
        </div>
          <h2 className="mb-4 text-xl mx-auto w-min text-nowrap font-semibold">
            {filteredQuantity("active")} tarea{conditionalS()} pendiente{conditionalS()}
          </h2>
        <CreateNewTask createTask={createTask} />
      </header>
      <main
        className={`
          px-4 mx-auto
          lg:h-dvh lg:min-h-[calc(100dvh-60px)] lg:max-w-none lg:col-start-2
          lg:mx-0 
          lg:overflow-y-auto lg:scroll-smooth 
          `}
      >
        <TasksList tasksLength={tasks.length}>
          {tasks.length === 0 ? (
            <p
              className={`
                max-w-fit mx-auto place-self-center
                text-lg font-bold lg:text-2xl`}
            >
              No hay tareas ¡Crea una!
            </p>
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
