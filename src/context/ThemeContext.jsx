import React, { createContext, useState, useContext, useEffect } from "react";
import { THEME_VARIANTS } from "../config/theme";

/**
 * Theme Context - Manages dark/light theme state and persistence
 * Provides useTheme hook for accessing theme colors throughout the app
 */
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolioTheme");
    if (savedTheme && THEME_VARIANTS[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    setIsLoading(false);
  }, []);

  // Update localStorage when theme changes
  const setTheme = (themeName) => {
    if (THEME_VARIANTS[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem("portfolioTheme", themeName);
    }
  };

  // Toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const theme = THEME_VARIANTS[currentTheme];

  const value = {
    currentTheme,
    setTheme,
    toggleTheme,
    theme,
    isDark: currentTheme === "dark",
    isLight: currentTheme === "light",
  };

  // Prevent flash of unstyled content
  if (isLoading) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * Hook to access theme and theme switching functionality
 * Usage: const { theme, toggleTheme, isDark } = useTheme();
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context.theme;
};

/**
 * Hook to access theme state and controls
 * Usage: const { isDark, toggleTheme, setTheme } = useThemeState();
 */
export const useThemeState = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeState must be used within ThemeProvider");
  }
  return {
    isDark: context.isDark,
    isLight: context.isLight,
    toggleTheme: context.toggleTheme,
    setTheme: context.setTheme,
    currentTheme: context.currentTheme,
  };
};

export default ThemeContext;
