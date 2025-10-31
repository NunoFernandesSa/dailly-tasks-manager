import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { TodoType } from "@/src/types/todos-types";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

export default function TodoItem({ text }: TodoType) {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);

  return (
    <View style={styles.todoItemWrapper}>
      <LinearGradient colors={colors.gradients.surface} style={styles.todoItem}>
        <Text style={styles.todoText}>{text}</Text>
      </LinearGradient>
    </View>
  );
}
