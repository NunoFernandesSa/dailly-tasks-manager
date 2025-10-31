import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import TodoInput from "@/src/components/features/todos/todo-input";
import TodosList from "@/src/components/features/todos/todos-list";
import HeaderHomeComponent from "@/src/components/ui/header-home-component";
import useTheme from "@/src/hooks/useTheme";
import React from "react";

import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const { colors } = useTheme();

  // create the styles using the theme colors
  const homeStyles = homePageStyles(colors);

  return (
    <>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        {/* Header */}
        <HeaderHomeComponent title="Tasks Manager" />

        {/* Todo Input for add new tasks */}
        <TodoInput />

        {/* Todo List */}
        <TodosList />
      </SafeAreaView>
    </>
  );
}
