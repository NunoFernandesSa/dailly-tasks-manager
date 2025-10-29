import React from "react";
import { Text } from "react-native";

export default function HeaderContent() {
  const title = "Welcome";
  const user = "User";

  return <Text>{`${title} ${user}`}</Text>;
}
