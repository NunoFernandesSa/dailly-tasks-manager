import { TodoType } from "./todos-types";

// _todo store type for todo state and methods.
export type TodoStore = {
  todos: TodoType[];
  isLoading: boolean;

  // modal states
  isEditModalVisible: boolean;
  editingId: string | null;
  editingText: string;

  // modal methods
  setEditModalVisible: (visible: boolean) => void;
  setEditingId: (id: string | null) => void;
  setEditingText: (text: string) => void;

  // _todo methods
  loadTodos: () => Promise<void>;
  addTodo: (task: TodoType) => Promise<void>;
  updateTodo: (index: string, newValue: TodoType) => Promise<void>;
  toggleTodo: (id: TodoType["id"]) => Promise<void>;
  deleteTodo: (index: string) => Promise<void>;
  resetApp: () => Promise<void>;
};
