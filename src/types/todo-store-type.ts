import { TodoType } from "./todos-types";

// _todo store type for todo state and methods.
export type TodoStore = {
  todos: TodoType[];
  isLoading: boolean;
  loadTodos: () => Promise<void>;
  addTodo: (task: TodoType) => Promise<void>;
  updateTodo: (index: number, newValue: TodoType) => Promise<void>;
  deleteTodo: (index: number) => Promise<void>;
};
