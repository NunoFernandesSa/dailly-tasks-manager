import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import useTodos from "@/src/hooks/useTodos";
import { HeaderTypes } from "@/src/types/header-types";
import React from "react";
import { Text, View } from "react-native";

export default function HeaderHomeComponent({
  icon,
  title,
  description,
}: HeaderTypes) {
  const { colors } = useTheme();
  const { todos } = useTodos();

  // ----- styles for header component -----
  const styles = homePageStyles(colors);

  // ----- get current date -----
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // ----- count completed tasks -----
  const completedTodosCount = todos
    ? todos.filter((todo) => todo.completed).length
    : 0;

  // total of todos count
  const totalTodosCount = todos ? todos.length : 0;

  const progresspourcentage =
    totalTodosCount > 0 ? (completedTodosCount / totalTodosCount) * 100 : 0;

  return (
    <View style={styles.header}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 12,
        }}
      >
        <Text style={styles.title}>My Tasks |</Text>
        <Text style={styles.subtitle}>
          {day}/{month}/{year}
        </Text>
      </View>

      <Text style={styles.subtitle}>
        {!totalTodosCount || totalTodosCount === 0
          ? "Any task available. Add a new one!"
          : `${completedTodosCount} tasks of ${totalTodosCount} completed`}
      </Text>
    </View>
  );
}
