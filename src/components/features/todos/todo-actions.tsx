import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import { TodoType } from "@/src/types/todos-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function TodoActions({ id }: { id: TodoType["id"] }) {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);

  const { todos, deleteTodo, updateTodo } = useTodoStore((state) => state);

  const todo = todos.find((item) => item.id === id);

  return (
    <View style={styles.todoActions}>
      <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
        <LinearGradient
          colors={colors.gradients.warning}
          style={styles.actionButton}
        >
          <Ionicons name="pencil" size={24} color={colors.text} />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTodo(id)} activeOpacity={0.7}>
        <LinearGradient
          colors={colors.gradients.danger}
          style={styles.actionButton}
        >
          <Ionicons name="trash" size={24} color={colors.text} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
