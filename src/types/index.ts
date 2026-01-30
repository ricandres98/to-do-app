export interface Task {
  id: number,
  description: string,
  status: "active" | "completed",
}

export type filter = "all" | Task["status"];