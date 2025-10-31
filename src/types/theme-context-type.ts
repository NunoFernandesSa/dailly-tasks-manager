import { ColorSchemeType } from "./color-scheme-type";

// Theme context type for theme state and methods.
export type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorSchemeType;
};
