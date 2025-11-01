import { createSettingsStyles } from "@/src/assets/styles/settings-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Switch, Text, View } from "react-native";

export default function PreferencesItems() {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const styles = createSettingsStyles(colors);

  // variable to store the title of the mode
  const titleMode = "Dark mode";

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={styles.settingIcon}
          >
            <Ionicons name="moon" size={24} color={colors.text} />
          </LinearGradient>
          <Text style={styles.settingText}>{titleMode}</Text>
        </View>

        <View>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>
    </LinearGradient>
  );
}
