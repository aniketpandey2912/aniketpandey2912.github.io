import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";

// Common button styles
const commonButtonStyles = {
  fontFamily: "sans-serif",
  borderRadius: "md",
  fontWeight: "600",
  transition: "all 0.2s ease",
};

// Resume Button
export const ResumeButton = ({ size }) => {
  const { colors } = useTheme();

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1DTOAehRPQ2Buwl-ESmgDvfpDVyk4sDO9/view"
    );
  };

  return (
    <Link
      href="Aniket-Pandey-Resume.pdf"
      target="_blank"
      download="Aniket-Pandey-Resume.pdf"
      _hover={{ textDecoration: "none" }}
      textDecoration="none"
      onClick={handleClick}
    >
      <Button
        size={{ base: "md", sm: "sm", md: "md", lg: size || "lg" }}
        w="100%"
        rightIcon={
          <AiOutlineDownload style={{ color: "white", fontSize: "20px" }} />
        }
        color="white"
        bg={colors.primary}
        {...commonButtonStyles}
        _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
        _active={{ transform: "translateY(0)" }}
      >
        Resume
      </Button>
    </Link>
  );
};

// Projects Button - Theme-aware
export const ProjectButton = ({ text, btnIcon }) => {
  const { colors } = useTheme();

  return (
    <Button
      size="sm"
      w="100%"
      rightIcon={btnIcon && React.cloneElement(btnIcon, { color: "white" })}
      bg={colors.primary}
      color="white"
      {...commonButtonStyles}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      _active={{ transform: "translateY(0)" }}
    >
      {text}
    </Button>
  );
};

// Contact Button - Theme-aware with consistent styling
export const ContactsButton = ({ btnIcon, btnColor }) => {
  const { isDarkMode } = useTheme();

  // Define button color configs
  const colorConfig = {
    red: { bg: "#EF4444", hover: "#DC2626" },
    blue: { bg: "#3B82F6", hover: "#2563EB" },
    gray: { bg: "#6B7280", hover: "#4B5563" },
  };

  const config = colorConfig[btnColor] || colorConfig.blue;

  return (
    <Button
      size={{ base: "lg", sm: "sm", md: "md", lg: "lg" }}
      w="100%"
      bg={config.bg}
      color="white"
      {...commonButtonStyles}
      _hover={{
        bg: config.hover,
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
      _active={{ transform: "translateY(0)" }}
    >
      {btnIcon}
    </Button>
  );
};
