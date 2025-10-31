import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import { TodoType } from "@/src/types/todos-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";

export default function TodoActions({ id }: { id: TodoType["id"] }) {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);
  // zustand toggleTodo action
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const { todos, deleteTodo } = useTodoStore((state) => state);
  const { setEditModalVisible, setEditingId, setEditingText } = useTodoStore();

  const todo = todos.find((todo) => todo.id === id);

  // Handle toggle complete
  /**
   * handleToggleComplete
   * Toggles the completion status of a todo item with the specified ID, updating AsyncStorage and setting isLoading to true.
   *
   * @param {TodoType["id"]} id - The ID of the todo item to be toggled.
   */
  const handleToggleComplete = async (id: TodoType["id"]) => {
    try {
      await toggleTodo(id);
    } catch (error) {
      console.log("Error updating todo:", error);
    }
  };

  // Handle delete todo
  /**
   * handleDeleteTodo
   * Prompts the user for confirmation before deleting a todo item with the specified ID, updating AsyncStorage and setting isLoading to true.
   *
   * @param {TodoType["id"]} id - The ID of the todo item to be deleted.
   */
  const handleDeleteTodo = async (id: TodoType["id"]) => {
    try {
      if (todo?.completed) {
        Alert.alert(
          "Delete Todo",
          "Are you sure you want to delete this todo?",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Delete",
              style: "destructive",
              onPress: () => deleteTodo(id),
            },
          ]
        );
      }
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
  };

  return (
    <View style={styles.todoActions}>
      {/* edit button */}
      <TouchableOpacity
        onPress={() => {
          setEditingId(id);
          setEditingText(todo?.text || "");
          setEditModalVisible(true);
        }}
        activeOpacity={0.7}
      >
        <LinearGradient
          colors={colors.gradients.warning}
          style={styles.actionButton}
        >
          <Ionicons name="pencil" size={24} color={colors.text} />
        </LinearGradient>
      </TouchableOpacity>

      {/* delete button */}
      <TouchableOpacity
        onPress={() => handleDeleteTodo(id)}
        activeOpacity={0.7}
      >
        <LinearGradient
          colors={
            todo?.completed ? colors.gradients.danger : colors.gradients.muted
          }
          style={styles.actionButton}
        >
          <Ionicons name="trash" size={24} color={colors.text} />
        </LinearGradient>
      </TouchableOpacity>

      {/* Checkbox */}
      <TouchableOpacity
        style={styles.checkbox}
        activeOpacity={0.7}
        onPress={() => handleToggleComplete(id)}
      >
        <LinearGradient
          colors={
            todos.find((todo) => todo.id === id)?.completed
              ? colors.gradients.success
              : colors.gradients.muted
          }
          style={[
            styles.checkboxInner,
            {
              borderColor: todos.find((todo) => todo.id === id)?.completed
                ? "transparent"
                : colors.border,
            },
          ]}
        >
          {todos.find((todo) => todo.id === id)?.completed && (
            <Ionicons name="checkmark" size={24} color={"#ffffff"} />
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
