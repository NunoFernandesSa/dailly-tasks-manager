import SafeAreaContent from "@/src/components/common/safe-area-content";
import useTheme from "@/src/hooks/useTheme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SettingsPage() {
  const { toggleDarkMode } = useTheme();

  return (
    <SafeAreaContent>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle theme</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaContent>
  );
}
