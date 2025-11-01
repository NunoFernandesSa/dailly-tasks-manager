import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import DangerZone from "@/src/components/features/settings/danger-zone/danger-zone";
import SetttingsContainer from "@/src/components/features/settings/settings-container";
import HeaderHomeComponent from "@/src/components/ui/header-home-component";
import useTheme from "@/src/hooks/useTheme";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsPage() {
  const { colors } = useTheme();

  // create the styles using the theme colors
  const styles = homePageStyles(colors);

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderHomeComponent title="Settings" />

      <SetttingsContainer />

      <DangerZone />
    </SafeAreaView>
  );
}
