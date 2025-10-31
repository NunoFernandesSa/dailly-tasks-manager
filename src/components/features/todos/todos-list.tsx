import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import React from "react";
import { FlatList } from "react-native";
import LoadingSpinner from "../../common/loading-spinner";
import EditTodoModal from "./edit-todo-modal";
import EmptyTodoState from "./empty-todo-state";
import TodoItem from "./todo-item";

export default function TodosList() {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);
  const todos = useTodoStore((state) => state.todos);
  const isLoading = useTodoStore((state) => state.isLoading);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <FlatList
        data={todos || []}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TodoItem {...item} />}
        style={styles.todoList}
        contentContainerStyle={styles.todoListContent}
        ListEmptyComponent={<EmptyTodoState />}
      />
      <EditTodoModal />
    </>
  );
}
