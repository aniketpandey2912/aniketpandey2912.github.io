import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

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
      return (
        <Box
          w="100%"
          h="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgColor="#1a1a1a"
          color="white"
          p="4"
        >
          <Heading size="lg" mb="4" color="#37bcf7">
            Oops! Something went wrong
          </Heading>
          <Text fontSize="md" textAlign="center" maxW="500px" mb="4">
            We&apos;re sorry for the inconvenience. Please try refreshing the page.
          </Text>
          {process.env.NODE_ENV === "development" && (
            <Box
              bgColor="#2a2a2a"
              p="4"
              borderRadius="md"
              maxW="600px"
              overflow="auto"
              maxH="200px"
            >
              <Text fontSize="sm" fontFamily="monospace" color="#ff6b6b">
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
