import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import React from "react";
import { ScrollView, View } from "react-native";
import Preferences from "./preferences";

export default function SetttingsContainer() {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Preferences />
      </ScrollView>
    </View>
  );
}
