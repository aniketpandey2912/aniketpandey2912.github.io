import { GiSkills } from "react-icons/gi";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
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
import { useThemeState } from "../context/ThemeContext";

const Navbar = () => {
  const theme = useTheme();
  const { isDark, toggleTheme } = useThemeState();

  return (
    <Box
      w="100%"
      h="auto"
      border="none"
      marginInline="auto"
      paddingInline={{ base: "10px", sm: "24px" }}
      bgColor={theme.navbar}
      position="fixed"
      top="0"
      zIndex="1"
      fontFamily={"sans-serif"}
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
            color={theme.textPrimary}
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
                <Heading as="h4" size="sm" color={theme.textPrimary}>
                  {link.label}
                </Heading>
              </Link>
            ))}
            {/* Theme Toggle Button */}
            <IconButton
              icon={isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
              onClick={toggleTheme}
              variant="ghost"
              color={theme.primary}
              _hover={{
                bgColor: theme.hover.dark,
              }}
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            />
            <Box>
              <ResumeButton size={"md"} />
            </Box>
          </Flex>
        </Show>

        {/* Hamburger - below medium size */}
        <Show below="lg">
          <Flex alignItems="center" gap="2">
            {/* Theme Toggle Button for Mobile */}
            <IconButton
              icon={isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
              onClick={toggleTheme}
              variant="ghost"
              color={theme.primary}
              _hover={{
                bgColor: theme.hover.dark,
              }}
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                bg={theme.navbar}
                color={theme.textSecondary}
              />
              <MenuList>
                {NAV_LINKS.map((link) => (
                  <Link key={link.id} smooth to={`#${link.id}`}>
                    <MenuItem>
                      <Heading as="h4" size="md">
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
