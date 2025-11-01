import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function DangerZone() {
  const router = useRouter();
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  const { resetApp } = useTodoStore((state) => state);

  const handleResetApp = async () => {
    try {
      Alert.alert(
        "Reset App",
        "Are you sure you want to reset the app? This will delete all your todos.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Reset",
            style: "destructive",
            onPress: async () => {
              await resetApp();
              router.replace("/(tabs)");
            },
          },
        ]
      );
    } catch (error) {
      console.error("Error resetting app:", error);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={colors.gradients.surface} style={styles.section}>
        <Text style={styles.sectionTitleDanger}>Danger Zone</Text>

        <TouchableOpacity onPress={handleResetApp}>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <LinearGradient
                colors={colors.gradients.danger}
                style={styles.settingIcon}
              >
                <Ionicons name="trash" size={24} color={colors.text} />
              </LinearGradient>
              <Text style={styles.actionTextDanger}>Reset App</Text>
            </View>

            <View>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={colors.danger}
              />
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
