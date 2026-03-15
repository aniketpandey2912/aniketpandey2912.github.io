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
import { COLORS, NAV_LINKS, SITE_INFO } from "../config/theme";

const Navbar = () => {
  return (
    <Box
      w="100%"
      h="auto"
      border="none"
      marginInline="auto"
      paddingInline={{ base: "10px", sm: "24px" }}
      bgColor={COLORS.navbar}
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
            color="white"
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
                <Heading as="h4" size="sm" color="white">
                  {link.label}
                </Heading>
              </Link>
            ))}
            <Box>
              <ResumeButton size={"md"} />
            </Box>
          </Flex>
        </Show>

        {/* Hamburger - below medium size */}
        <Show below="lg">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              bg={COLORS.navbar}
              color="whiteAlpha.700"
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
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
