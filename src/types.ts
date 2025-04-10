export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string; // Consider using `Date` if working with actual dates
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High"; // Union type for strict priority values
}
