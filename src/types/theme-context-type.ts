import { ColorSchemeType } from "./color-scheme-type";

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorSchemeType;
};
