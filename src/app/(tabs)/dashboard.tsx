import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardPage() {
  const { colors } = useTheme();

  // create the styles using the theme colors
  const styles = homePageStyles(colors);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.loadingText}>Dashboard Page</Text>
    </SafeAreaView>
  );
}
