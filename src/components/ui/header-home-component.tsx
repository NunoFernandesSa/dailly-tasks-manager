import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import useTodos from "@/src/hooks/useTodos";
import { HeaderTypes } from "@/src/types/header-types";
import { LinearGradient } from "expo-linear-gradient";
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

  // ----- total of todos count -----
  const totalTodosCount = todos ? todos.length : 0;

  // ----- calculate progress percentage -----
  const progressPourcentage =
    totalTodosCount > 0 ? (completedTodosCount / totalTodosCount) * 100 : 0;

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {!totalTodosCount || totalTodosCount === 0
              ? "Any task available!"
              : `${completedTodosCount} tasks of ${totalTodosCount} completed`}
          </Text>
        </View>

        <Text style={styles.subtitle}>
          {day}/{month}/{year}
        </Text>
      </View>

      {totalTodosCount > 0 && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={colors.gradients.success}
                style={[
                  styles.progressFill,
                  { width: `${progressPourcentage}%` },
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {Math.round(progressPourcentage)}%
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
