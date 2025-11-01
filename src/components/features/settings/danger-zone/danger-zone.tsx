import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DangerZone() {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <View style={styles.container}>
      <LinearGradient colors={colors.gradients.surface} style={styles.section}>
        <Text style={styles.sectionTitleDanger}>Danger Zone</Text>

        <TouchableOpacity onPress={() => {}}>
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
