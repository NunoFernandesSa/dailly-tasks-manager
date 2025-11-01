import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function SettingsItems() {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={[styles.statCard, { borderLeftColor: colors.primary }]}
    >
      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={styles.statIcon}
          >
            <Ionicons name="moon" size={24} color={colors.text} />
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
}
