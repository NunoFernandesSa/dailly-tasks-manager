// _todo type for todo items.
export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
  priority?: "low" | "medium" | "high";
  createdAt: Date;
};
