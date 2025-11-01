import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

export default function ProgressStatsItem() {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  const { todos } = useTodoStore((state) => state);
  const totalTodos = todos ? todos.length : 0;
  const completedTodos = todos
    ? todos.filter((todo) => todo.completed).length
    : 0;
  const activeTodos = totalTodos - completedTodos;

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <Text style={styles.sectionTitle}>Progress Stats</Text>

      <View style={styles.statsContainer}>
        {/* total todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[styles.statCard, { borderLeftColor: colors.primary }]}
        >
          <View style={styles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={styles.statIcon}
            >
              <Ionicons name="list" size={24} color={colors.text} />
            </LinearGradient>
          </View>

          <View>
            <Text style={styles.statNumber}>{totalTodos}</Text>
            <Text style={styles.statLabel}>Total Todos</Text>
          </View>
        </LinearGradient>

        {/* completd todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[styles.statCard, { borderLeftColor: colors.success }]}
        >
          <View style={styles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.success}
              style={styles.statIcon}
            >
              <Ionicons name="checkmark-circle" size={24} color={colors.text} />
            </LinearGradient>
          </View>

          <View>
            <Text style={styles.statNumber}>{completedTodos}</Text>
            <Text style={styles.statLabel}>Completed Todos</Text>
          </View>
        </LinearGradient>

        {/* active todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[styles.statCard, { borderLeftColor: colors.warning }]}
        >
          <View style={styles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.warning}
              style={styles.statIcon}
            >
              <Ionicons name="time" size={24} color={colors.text} />
            </LinearGradient>
          </View>

          <View>
            <Text style={styles.statNumber}>{activeTodos}</Text>
            <Text style={styles.statLabel}>Active Todos</Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}
