import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import useTodos from "@/src/hooks/useTodos";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function TodoInput() {
  // ----- colors theme -----
  const { colors } = useTheme();
  // ----- styles -----
  const styles = homePageStyles(colors);

  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = useTodos();

  // ----- create a new todo on AsyncStorage -----
  const handleAddTodo = async () => {
    if (newTodo.trim() === "") return;
    await addTodo({
      id: new Date(),
      text: newTodo,
      completed: false,
      createdAt: new Date(),
    });
    setNewTodo("");
  };

  return (
    <View style={styles.inputSection}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          inputMode="text"
          placeholder="Add a new task"
          placeholderTextColor={colors.textMuted}
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
          multiline={true}
          numberOfLines={3}
        />

        <TouchableOpacity
          onPress={handleAddTodo}
          activeOpacity={0.8}
          disabled={!newTodo.trim()}
        >
          <LinearGradient
            colors={
              newTodo.trim() ? colors.gradients.primary : colors.gradients.muted
            }
            style={styles.addButton}
          >
            <Ionicons name="add" size={24} color={colors.text} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
