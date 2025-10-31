import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function TodoActions() {
  const { colors } = useTheme();
  const styles = homePageStyles(colors);

  return (
    <View style={styles.todoActions}>
      <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
        <LinearGradient
          colors={colors.gradients.warning}
          style={styles.actionButton}
        >
          <Ionicons name="pencil" size={24} color={colors.text} />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
        <LinearGradient
          colors={colors.gradients.danger}
          style={styles.actionButton}
        >
          <Ionicons name="trash" size={24} color={colors.text} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
