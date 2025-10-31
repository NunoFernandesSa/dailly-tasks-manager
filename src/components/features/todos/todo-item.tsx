import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import { TodoType } from "@/src/types/todos-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TodoActions from "./todo-actions";

export default function TodoItem({ id, text, completed }: TodoType) {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);
  // zustand toggleTodo action
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

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

  return (
    <View style={styles.todoItemWrapper}>
      <LinearGradient colors={colors.gradients.surface} style={styles.todoItem}>
        {/* Checkbox */}
        <TouchableOpacity
          style={styles.checkbox}
          activeOpacity={0.7}
          onPress={() => handleToggleComplete(id)}
        >
          <LinearGradient
            colors={
              completed ? colors.gradients.success : colors.gradients.muted
            }
            style={[
              styles.checkboxInner,
              { borderColor: completed ? "transparent" : colors.border },
            ]}
          >
            {completed && (
              <Ionicons name="checkmark" size={24} color={"#ffffff"} />
            )}
          </LinearGradient>
        </TouchableOpacity>

        {/* todo text */}
        <Text
          style={[
            styles.todoText,
            completed && {
              textDecorationLine: "line-through",
              color: colors.textMuted,
              opacity: 0.5,
            },
          ]}
        >
          {text}
        </Text>

        {/* actions */}
        <TodoActions id={id} />
      </LinearGradient>
    </View>
  );
}
