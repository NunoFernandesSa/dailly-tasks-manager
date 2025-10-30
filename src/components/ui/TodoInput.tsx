import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

export default function TodoInput() {
  // ----- colors theme -----
  const { colors } = useTheme();
  // ----- styles -----
  const styles = homePageStyles(colors);

  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = useTodoStore();

  // ----- create a new todo on AsyncStorage -----
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      try {
        addTodo({
          id: new Date(),
          text: newTodo.trim(),
          completed: false,
          createdAt: new Date(),
        });
        setNewTodo("");
      } catch (error) {
        console.log("Error adding todo:", error);
        Alert.alert("Error", "Failed to add todo");
      }
    }
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
