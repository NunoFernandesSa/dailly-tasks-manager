import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { darkColors, lightColors } from "../constants/colors";
import { ThemeContextType } from "../types/theme-context-type";

// create the theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider wraps the app and provides global theme state.
 * It loads the persisted theme preference on mount and exposes
 * `isDarkMode`, `toggleDarkMode`, and the current `colors` object
 * to all child components via React Context.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // get the user's choice of theme from async storage
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  // toggle the theme and save the user's choice in async storage
  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme is a custom hook that consumes the ThemeContext.
 * It throws an error if used outside of ThemeProvider to ensure
 * the theme values are always available when the hook is called.
 */
export default function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme || theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
}
