import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { TodoType } from "@/src/types/todos-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function TodoItem({ text, completed }: TodoType) {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);

  return (
    <View style={styles.todoItemWrapper}>
      <LinearGradient colors={colors.gradients.surface} style={styles.todoItem}>
        <Text style={styles.todoText}>{text}</Text>

        <TouchableOpacity
          style={styles.checkbox}
          activeOpacity={0.7}
          onPress={() => {}}
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
            {true && <Ionicons name="checkmark" size={24} color={"#ffffff"} />}
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
