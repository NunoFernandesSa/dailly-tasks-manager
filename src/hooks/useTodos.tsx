import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { TodoType } from "../types/todos-types";

export default function useTodos() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  /**
   * Loads the persisted todo list from AsyncStorage and updates local state.
   * If no data exists, initializes the list as an empty array.
   */
  const loadTodos = async () => {
    const data = await AsyncStorage.getItem("todos");
    setTodos(data ? JSON.parse(data) : []);
  };

  /**
   * Adds a new todo item to the list and persists it to AsyncStorage.
   * @param task - The todo item to add.
   */
  const addTodo = async (task: TodoType) => {
    const newTodos = [...todos, task];
    setTodos(newTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  };

  /**
   * Updates a todo item at the specified index with the provided new value.
   * @param index - The index of the todo item to update.
   * @param newValue - The new value to replace the existing todo item.
   */
  const updateTodo = async (index: number, newValue: TodoType) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  };

  /**
   * Deletes a todo item from the list at the specified index and persists the updated list to AsyncStorage.
   * @param index - The index of the todo item to delete.
   */
  const deleteTodo = async (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return { todos, addTodo, updateTodo, deleteTodo };
}
