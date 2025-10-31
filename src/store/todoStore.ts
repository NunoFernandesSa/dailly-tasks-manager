import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { TodoStore } from "../types/todo-store-type";
import { TodoType } from "../types/todos-types";

/**
 * Zustand store hook providing CRUD operations for todo items with AsyncStorage persistence.
 *
 * @property {Todo[]} todos - Array of todo items.
 * @property {boolean} isLoading - Indicates if todos are currently being loaded.
 *
 * @method loadTodos - Loads todos from AsyncStorage, setting isLoading to true during the process.
 * @method addTodo - Adds a new todo item, updating AsyncStorage and setting isLoading to true.
 * @method updateTodo - Updates a todo item at the specified index, updating AsyncStorage and setting isLoading to true.
 * @method deleteTodo - Deletes a todo item at the specified index, updating AsyncStorage and setting isLoading to true.
 */
export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  isLoading: false,

  // Loads todos from AsyncStorage, setting isLoading to true during the process.
  /**
   * loadTodos
   * Loads todos from AsyncStorage, setting isLoading to true during the process.
   *
   * @returns {Promise<void>} - A promise that resolves when todos are loaded.
   */
  loadTodos: async () => {
    set((state) => ({ ...state, isLoading: true }));
    const data = await AsyncStorage.getItem("todos");
    const parsed = data ? JSON.parse(data) : [];
    set((state) => ({ ...state, todos: parsed, isLoading: false }));
  },

  // Adds a new todo item, updating AsyncStorage and setting isLoading to true.
  /**
   * addTodo
   * Adds a new todo item to the todos array, updating AsyncStorage and setting isLoading to true.
   *
   * @param {Todo} task - The todo item to be added.
   */
  addTodo: async (task) => {
    set((state) => ({ ...state, isLoading: true }));
    const newTodos = [...get().todos, task];
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    set((state) => ({ ...state, isLoading: false }));
  },

  // Updates a todo item at the specified index, updating AsyncStorage and setting isLoading to true.
  /**
   * updateTodo
   * Updates a todo item at the specified index, updating AsyncStorage and setting isLoading to true.
   *
   * @param {number} index - The index of the todo item to be updated.
   * @param {Todo} newValue - The new todo item values.
   */
  updateTodo: async (index, newValue) => {
    set((state) => ({ ...state, isLoading: true }));
    const newTodos = [...get().todos];
    newTodos[Number(index)] = newValue;
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    set((state) => ({ ...state, isLoading: false }));
  },

  // Toggles the completion status of a todo item with the specified ID, updating AsyncStorage and setting isLoading to true.
  /**
   * toggleTodo
   * Toggles the completion status of a todo item with the specified ID, updating AsyncStorage and setting isLoading to true.
   *
   * @param {TodoType["id"]} id - The ID of the todo item to be toggled.
   */
  toggleTodo: async (id: TodoType["id"]) => {
    const newTodos = [...get().todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (!todo) throw new Error("Todo not found");
    if (todo) todo.completed = !todo.completed;
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  },

  // Deletes a todo item at the specified index, updating AsyncStorage and setting isLoading to true.
  /**
   * deleteTodo
   * Deletes a todo item at the specified index, updating AsyncStorage and setting isLoading to true.
   *
   * @param {number} id - The index of the todo item to be deleted.
   */
  deleteTodo: async (id) => {
    const currentTodos = get().todos;
    const newTodos = currentTodos.filter((todo) => todo.id !== id);
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  },
}));
