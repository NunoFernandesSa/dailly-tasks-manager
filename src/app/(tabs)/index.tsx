import useTheme from "@/src/hooks/useTheme";
import { ColorSchemeType } from "@/src/types/color-scheme-type";
import React from "react";

import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardPage() {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.context}>Dashboard</Text>
    </SafeAreaView>
  );
}

const createStyles = (colors: ColorSchemeType) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
    },
    context: {
      color: colors.text,
    },
  });

  return styles;
};
