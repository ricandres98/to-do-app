import { AbsolutePositionLink } from "@/components/AbsolutePositionLink";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { TextGroup } from "@/components/TextGroup";
import Link from "next/link";


export default function AboutPage() {
  return (
    <main
      className={`
        max-w-3xl mx-auto px-6 py-16 text-base
        `}
    >
      <Hero
        title="About this project"
        description="Task Manager is a small task management application built as a
          practical exercise to apply modern frontend fundamentals using React,
          TypeScript and Next.js."
      />
      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Project goals
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="State Management"
            description="Practice state managemen using React Hooks."
          />
          <ProjectCard
            title="Type Safety"
            description="Model a simple domain using TypeScript."
          />
          <ProjectCard
            title="App Routing"
            description="Use Next.js App Router for routing"
          />
          <ProjectCard
            title="Client and Server Components"
            description="Separate server and client components correctly"
          />
          <ProjectCard
            title="Client-Side Persistence"
            description="Use localStorage to persist data on the client"
          />
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          How It’s Built
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          <TextGroup
            title="App Router Architecture"
            description="File-based routing using the App Router
            to separate layouts and server/client responsibilities."
          />
          <TextGroup
            title="Client vs Server Components"
            description="Client components only where interaction
            is required, keeping static content server-rendered."
          />
          <TextGroup
            title="Strongly Typed Domain Modeling"
            description="Improving the development experience by using 
            TypeScript to model the task domain and ensure type safety across the application."
          />
          <TextGroup
            title="Custom hooks for state management"
            description="Encapsulating logic for localStorage state management 
            and CRUD operations on the tasks state in custom React hooks for 
            better code organization and reusability."
          />
        </div>

        <ul className="list-disc list-inside">
          {/* <li>App Router used for file-based routing</li> */}
          {/* <li>Client Components only where user interaction is required</li>
          <li>Server Component for static content</li> */}
          {/* <li>Typed domain models with TypeScript</li> */}
          {/* <li>Custom hook for localStorage state management</li>
          <li>Custom hook for CRUD operations on the tasks state</li> */}
        </ul>
      </section>

      <section className="py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Built by</p>
        <h3 className="text-2xl font-semibold mt-2">Ricardo Ojeda</h3>
        <p className="text-slate-600 mt-2 text-base dark:text-slate-300">Frontend Developer</p>
      </section>
    </main>
  );
}