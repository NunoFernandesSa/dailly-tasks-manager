import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { TodoType } from "@/src/types/todos-types";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import TodoActions from "./todo-actions";

export default function TodoItem({ id, text, completed }: TodoType) {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);

  return (
    <View style={styles.todoItemWrapper}>
      <LinearGradient colors={colors.gradients.surface} style={styles.todoItem}>
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
        <View>
          <TodoActions id={id} />
        </View>
      </LinearGradient>
    </View>
  );
}
