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
export const ResumeButton = () => {
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
        size={{ base: "md", sm: "lg", md: "lg" }}
        w="100%"
        px={{ base: "4", sm: "6" }}
        py={{ base: "2.5", sm: "3" }}
        rightIcon={
          <AiOutlineDownload style={{ color: "white", fontSize: "18px" }} />
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
      size={{ base: "xs", sm: "sm", md: "sm" }}
      w="100%"
      px={{ base: "2", sm: "3" }}
      py={{ base: "1.5", sm: "2" }}
      rightIcon={
        btnIcon && React.cloneElement(btnIcon, { color: "white", size: "16px" })
      }
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
  // Define button color configs
  const colorConfig = {
    red: { bg: "#EF4444", hover: "#DC2626" },
    blue: { bg: "#3B82F6", hover: "#2563EB" },
    gray: { bg: "#6B7280", hover: "#4B5563" },
  };

  const config = colorConfig[btnColor] || colorConfig.blue;

  return (
    <Button
      size={{ base: "md", sm: "lg", md: "lg" }}
      w="100%"
      px={{ base: "4", sm: "6" }}
      py={{ base: "2.5", sm: "3" }}
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
