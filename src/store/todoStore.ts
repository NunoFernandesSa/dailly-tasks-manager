import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { TodoStore } from "../types/todo-store-type";

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  isLoading: false,

  loadTodos: async () => {
    set((state) => ({ ...state, isLoading: true }));
    const data = await AsyncStorage.getItem("todos");
    const parsed = data ? JSON.parse(data) : [];
    set((state) => ({ ...state, todos: parsed, isLoading: false }));
  },

  addTodo: async (task) => {
    set((state) => ({ ...state, isLoading: true }));
    const newTodos = [...get().todos, task];
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    set((state) => ({ ...state, isLoading: false }));
  },

  updateTodo: async (index, newValue) => {
    set((state) => ({ ...state, isLoading: true }));
    const newTodos = [...get().todos];
    newTodos[index] = newValue;
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    set((state) => ({ ...state, isLoading: false }));
  },

  deleteTodo: async (index) => {
    set((state) => ({ ...state, isLoading: true }));
    const newTodos = [...get().todos];
    newTodos.splice(index, 1);
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  },
}));
