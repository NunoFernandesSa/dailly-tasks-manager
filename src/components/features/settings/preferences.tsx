import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";
import SettingsItems from "./settings-items";

export default function Preferences() {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={styles.section}>
      <Text style={styles.sectionTitle}>Preferences</Text>

      <SettingsItems />
    </LinearGradient>
  );
}
