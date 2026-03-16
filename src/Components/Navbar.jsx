import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
} from "@chakra-ui/react";

import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { ResumeButton } from "./MyButton";
import { NAV_LINKS, SITE_INFO } from "../config/theme";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { colors, isDarkMode } = useTheme();
  const activeSection = useActiveSection();

  return (
    <Box
      w="100%"
      h="auto"
      border="none"
      marginInline="auto"
      paddingInline={{ base: "12px", sm: "16px", md: "24px" }}
      paddingBlock={{ base: "4px", sm: "6px", md: "8px" }}
      bgColor={colors.navbar}
      position="fixed"
      top="0"
      zIndex="100"
      fontFamily={"sans-serif"}
      boxShadow={
        isDarkMode ? "0 2px 8px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.1)"
      }
      transition="all 0.3s ease"
    >
      <Flex
        // border="1px solid red"
        bgColor="none"
        justifyContent="center"
        alignItems="center"
      >
        {/* name */}
        <Box p={{ base: "1", sm: "1.5", md: "2" }} bg="none">
          <Heading
            as="h1"
            color={colors.text}
            size={{ base: "sm", sm: "md", md: "md", lg: "md" }}
          >
            {SITE_INFO.brandName}
          </Heading>
        </Box>
        <Spacer />

        {/* menu options */}
        <Show above="lg">
          <Flex
            p={{ base: "1", sm: "1.5", md: "2" }}
            bg="none"
            gap={{ base: "3", md: "4" }}
            alignItems="center"
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.id} smooth to={`#${link.id}`}>
                <Heading
                  as="h4"
                  size="sm"
                  color={
                    activeSection === link.id ? colors.primary : colors.text
                  }
                  borderBottom={
                    activeSection === link.id
                      ? `2px solid ${colors.primary}`
                      : "none"
                  }
                  pb="2px"
                  transition="all 0.2s ease"
                  _hover={{ color: colors.primary }}
                >
                  {link.label}
                </Heading>
              </Link>
            ))}
            <ThemeToggle />
            <Box>
              <ResumeButton size={"md"} />
            </Box>
          </Flex>
        </Show>

        {/* Hamburger - below medium size */}
        <Show below="lg">
          <Flex alignItems="center" gap={{ base: "1", sm: "2" }}>
            <ThemeToggle />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                bg={colors.navbar}
                color={colors.textSecondary}
                size={{ base: "md", sm: "lg" }}
              />
              <MenuList bg={colors.navbar} borderColor={colors.border}>
                {NAV_LINKS.map((link) => (
                  <Link key={link.id} smooth to={`#${link.id}`}>
                    <MenuItem
                      bg={
                        activeSection === link.id
                          ? colors.primary
                          : colors.navbar
                      }
                      _hover={{ bg: colors.primary }}
                    >
                      <Heading
                        as="h4"
                        size="md"
                        color={
                          activeSection === link.id ? "white" : colors.text
                        }
                      >
                        {link.label}
                      </Heading>
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
