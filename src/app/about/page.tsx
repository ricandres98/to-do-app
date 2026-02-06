import styles from "./about.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <Link href="/" title="Home">⬅ Home</Link>
      <h1>About this project</h1>

      <p>
        Task Manager is a small task management application built as a practical
        exercise to apply modern frontend fundamentals using React, TypeScript
        and Next.js.
      </p>

      <section>
        <h2>Project goals</h2>

        <ul>
          <li>Practice state management with React</li>
          <li>Model a simple domain using TypeScript</li>
          <li>Use Next.js App Router for routing</li>
          <li>Separate server and client components correctly</li>
          <li>Use localStorage to persist data on the client</li>
        </ul>
      </section>

      <section>
        <h2>Technical decisions</h2>

        <ul>
          <li>App Router used for file-based routing</li>
          <li>Client Components only where user interaction is required</li>
          <li>Server Component for static content</li>
          <li>Typed domain models with TypeScript</li>
          <li>Custom hook for localStorage state management</li>
          <li>Custom hook for CRUD operations on the tasks state</li>
        </ul>
      </section>

      <section>
        <h2>Author</h2>
        <p>Ricardo Ojeda – Frontend Developer</p>
      </section>
    </main>
  );
}