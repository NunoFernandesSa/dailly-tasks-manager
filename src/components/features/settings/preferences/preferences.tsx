import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";
import PreferencesItems from "./preference-items";

export default function Preferences() {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <Text style={styles.sectionTitle}>Preferences</Text>

      <PreferencesItems />
    </LinearGradient>
  );
}
