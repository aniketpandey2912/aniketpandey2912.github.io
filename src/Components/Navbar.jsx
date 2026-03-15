import { GiSkills } from "react-icons/gi";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { MdContacts } from "react-icons/md";
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
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { colors, isDarkMode } = useTheme();

  return (
    <Box
      w="100%"
      h="auto"
      border="none"
      marginInline="auto"
      paddingInline={{ base: "10px", sm: "24px" }}
      bgColor={colors.navbar}
      position="fixed"
      top="0"
      zIndex="1"
      fontFamily={"sans-serif"}
      boxShadow={isDarkMode ? "0 2px 8px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.1)"}
      transition="all 0.3s ease"
    >
      <Flex
        // border="1px solid red"
        bgColor="none"
        justifyContent="center"
        alignItems="center"
      >
        {/* name */}
        <Box p="4" bg="none">
          <Heading
            as="h1"
            color={colors.text}
            size={{ base: "md", sm: "md", md: "md", lg: "md" }}
          >
            {SITE_INFO.brandName}
          </Heading>
        </Box>
        <Spacer />

        {/* menu options */}
        <Show above="lg">
          <Flex p="4" bg="none" gap="4" alignItems="center">
            {NAV_LINKS.map((link) => (
              <Link key={link.id} smooth to={`#${link.id}`}>
                <Heading as="h4" size="sm" color={colors.text}>
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
          <Flex alignItems="center" gap="2">
            <ThemeToggle />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                bg={colors.navbar}
                color={colors.textSecondary}
              />
              <MenuList bg={colors.navbar} borderColor={colors.border}>
                {NAV_LINKS.map((link) => (
                  <Link key={link.id} smooth to={`#${link.id}`}>
                    <MenuItem bg={colors.navbar} _hover={{ bg: colors.primary }}>
                      <Heading as="h4" size="md" color={colors.text}>
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
