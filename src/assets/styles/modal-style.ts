import { ColorSchemeType } from "@/src/types/color-scheme-type";
import { StyleSheet } from "react-native";

export const modalStyles = (colors: ColorSchemeType) => {
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colors.bg,
    },
    modalContent: {
      margin: 20,
      padding: 20,
      backgroundColor: "",
      borderRadius: 10,
    },
    inputWrapper: {},
    input: {
      borderBottomWidth: 1,
      marginBottom: 10,
      padding: 8,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    addButton: {
      flexDirection: "row",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
    },
    cancelButton: {
      flexDirection: "row",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
    },
  });

  return styles;
};
