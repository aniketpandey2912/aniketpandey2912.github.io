import React from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tooltip label={isDarkMode ? "Light Mode" : "Dark Mode"} placement="bottom">
      <IconButton
        aria-label="Toggle theme"
        icon={isDarkMode ? <SunIcon color="white" /> : <MoonIcon color="black" />}
        onClick={toggleTheme}
        variant="ghost"
        fontSize="lg"
        _hover={{
          bg: "transparent",
          transform: "scale(1.1)",
          transition: "all 0.2s",
        }}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
