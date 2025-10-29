import React from "react";
import { Text, View } from "react-native";

export default function HeaderContent() {
  const title = "Welcome";
  const user = "User";

  return (
    <View>
      <Text>{`${title} ${user}`}</Text>
    </View>
  );
}
