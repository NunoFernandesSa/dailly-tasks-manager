import { TodoType } from "./todos-types";

export type TodoStore = {
  todos: TodoType[];
  isLoading: boolean;
  loadTodos: () => Promise<void>;
  addTodo: (task: TodoType) => Promise<void>;
  updateTodo: (index: number, newValue: TodoType) => Promise<void>;
  deleteTodo: (index: number) => Promise<void>;
};
