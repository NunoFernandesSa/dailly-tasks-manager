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
      borderRadius: 10,
    },
    inputSection: {
      paddingBottom: 12,
    },
    inputWrapper: {
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
      paddingVertical: 30,
    },
    input: {
      width: "100%",
      borderWidth: 2,
      borderRadius: 9,
      paddingHorizontal: 20,
      paddingVertical: 16,
      fontSize: 17,
      maxHeight: 120,
      fontWeight: "500",
      backgroundColor: colors.backgrounds.input,
      borderColor: colors.border,
      color: colors.text,
    },
    inputFocused: {
      borderColor: colors.primary,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    addButton: {
      flexDirection: "row",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      marginTop: 20,
    },
    cancelButton: {
      flexDirection: "row",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
    },
    text: {
      fontSize: 17,
      fontWeight: "500",
      color: colors.text,
    },
  });

  return styles;
};
