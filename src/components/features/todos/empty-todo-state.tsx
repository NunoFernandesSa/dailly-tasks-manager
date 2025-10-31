import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function EmptyTodoState() {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);

  return (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIconContainer}>
        <Ionicons name="clipboard-outline" size={48} color={colors.textMuted} />
      </View>
      <Text style={styles.emptyText}>No todos found</Text>
      <Text style={styles.emptySubtext}>Add a new todo to get started</Text>
    </View>
  );
}
