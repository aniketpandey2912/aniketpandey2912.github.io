import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useTheme } from "../context/ThemeContext";
import { THEME_VARIANTS } from "../config/theme";

/**
 * Error Boundary - Catches JavaScript errors in child components
 * Displays a fallback UI instead of crashing the entire app
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Use dark theme colors since this is a class component that can't use hooks
      const theme = THEME_VARIANTS.dark;
      return (
        <Box
          w="100%"
          h="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgColor={theme.home}
          color={theme.textPrimary}
          p="4"
        >
          <Heading size="lg" mb="4" color={theme.primary}>
            Oops! Something went wrong
          </Heading>
          <Text fontSize="md" textAlign="center" maxW="500px" mb="4">
            We&apos;re sorry for the inconvenience. Please try refreshing the page.
          </Text>
          {process.env.NODE_ENV === "development" && (
            <Box
              bgColor={theme.gray800}
              p="4"
              borderRadius="md"
              maxW="600px"
              overflow="auto"
              maxH="200px"
            >
              <Text fontSize="sm" fontFamily="monospace" color={theme.error}>
                {this.state.error?.toString()}
              </Text>
            </Box>
          )}
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

