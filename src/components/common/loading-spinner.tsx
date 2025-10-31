import { homePageStyles } from "@/src/assets/styles/home-page-styles";
import useTheme from "@/src/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

/**
 * LoadingSpinner
 * A full-screen loading component that displays a gradient background,
 * an animated ActivityIndicator, and a loading message.
 *
 * Used while asynchronous data (e.g., todos) is being fetched.
 */
export default function LoadingSpinner() {
  const { colors } = useTheme();
  const homeStyles = homePageStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <View style={homeStyles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={homeStyles.loadingText}>Loading your todos...</Text>
      </View>
    </LinearGradient>
  );
}
