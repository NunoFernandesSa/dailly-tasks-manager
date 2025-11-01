import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import React from "react";
import { Text } from "react-native";
import PreferencesItems from "./preference-items";

export default function Preferences() {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <>
      <Text style={styles.sectionTitle}>Preferences</Text>
      <PreferencesItems />
    </>
  );
}
