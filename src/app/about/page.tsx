import { AbsolutePositionLink } from "@/components/AbsolutePositionLink";


export default function AboutPage() {
  return (
    <main
      className={`
        w-full text-md text-background-color
        lg:text-lg`}
    >
      <AbsolutePositionLink href="/" title="Home">
        ⬅ Home
      </AbsolutePositionLink>
      <h1 className="text-3xl font-bold mb-2 lg:text-4xl">About this project</h1>

      <p>
        Task Manager is a small task management application built as a practical
        exercise to apply modern frontend fundamentals using React, TypeScript
        and Next.js.
      </p>

      <section className="mt-7">
        <h2 className="text-2xl font-bold lg:text-3xl mb-2">Project goals</h2>

        <ul className="list-disc list-inside">
          <li>Practice state management with React</li>
          <li>Model a simple domain using TypeScript</li>
          <li>Use Next.js App Router for routing</li>
          <li>Separate server and client components correctly</li>
          <li>Use localStorage to persist data on the client</li>
        </ul>
      </section>

      <section className="mt-7">
        <h2 className="text-2xl font-bold lg:text-3xl mb-2">Technical decisions</h2>

        <ul className="list-disc list-inside">
          <li>App Router used for file-based routing</li>
          <li>Client Components only where user interaction is required</li>
          <li>Server Component for static content</li>
          <li>Typed domain models with TypeScript</li>
          <li>Custom hook for localStorage state management</li>
          <li>Custom hook for CRUD operations on the tasks state</li>
        </ul>
      </section>

      <section className="mt-7">
        <h2 className="text-2xl font-bold lg:text-3xl mb-2">Author</h2>
        <p>Ricardo Ojeda – Frontend Developer</p>
      </section>
    </main>
  );
}