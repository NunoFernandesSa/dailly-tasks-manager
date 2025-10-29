import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeAreaContent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 16 }}>{children}</View>
    </SafeAreaView>
  );
}
