import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { TodoStore } from "../types/todo-store-type";

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  loadTodos: async () => {
    const data = await AsyncStorage.getItem("todos");
    const parsed = data ? JSON.parse(data) : [];
    set({ todos: parsed });
  },

  addTodo: async (task) => {
    const newTodos = [...get().todos, task];
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  },

  updateTodo: async (index, newValue) => {
    const newTodos = [...get().todos];
    newTodos[index] = newValue;
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  },

  deleteTodo: async (index) => {
    const newTodos = [...get().todos];
    newTodos.splice(index, 1);
    set({ todos: newTodos });
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  },
}));
