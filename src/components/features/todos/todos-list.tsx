import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function TodosList() {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);
  const todos = useTodoStore((state) => state.todos);

  return (
    <FlatList
      data={todos}
      keyExtractor={(index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.todoList}>
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
          </View>
        </View>
      )}
    />
  );
}
