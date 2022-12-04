import { GiSkills } from "react-icons/gi";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import { EditIcon, HamburgerIcon } from "@chakra-ui/icons";
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

const name = "<Aniket Pandey/>";

const Navbar = () => {
  const activeStyle = {
    color: "blackAlpha.800",
  };

  return (
    <Box
      w="100%"
      h="auto"
      border="none"
      marginInline="auto"
      paddingInline={{ base: "10px", sm: "24px" }}
      bgColor="black"
      position="fixed"
      top="0"
      zIndex="1"
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
            color="whiteAlpha.700"
            size={{ base: "md", sm: "lg", md: "lg", lg: "lg" }}
          >
            {name}
          </Heading>
        </Box>
        <Spacer />

        {/* menu options */}
        <Show above="lg">
          <Flex p="4" bg="none" gap="4" alignItems="center">
            <Link
              smooth
              to="#home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              <Heading as="h4" size="md" color="whiteAlpha.700">
                Home
              </Heading>
            </Link>

            <Link
              smooth
              to="#about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              <Heading as="h4" size="md" color="whiteAlpha.700">
                About Me
              </Heading>
            </Link>

            <Link
              smooth
              to="#skills"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              <Heading as="h4" size="md" color="whiteAlpha.700">
                Skills
              </Heading>
            </Link>

            <Link
              smooth
              to="#projects"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              <Heading as="h4" size="md" color="whiteAlpha.700">
                Projects
              </Heading>
            </Link>

            <Link
              smooth
              to="#contacts"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              <Heading as="h4" size="md" color="whiteAlpha.700">
                Contacts
              </Heading>
            </Link>
            <Box>
              <ResumeButton />
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
              bg="black"
              color="whiteAlpha.700"
            />
            <MenuList>
              <Link
                smooth
                to="#home"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                <MenuItem icon={<FaHome />}>
                  <Heading as="h4" size="md">
                    Home
                  </Heading>
                </MenuItem>
              </Link>
              <Link
                smooth
                to="#about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                <MenuItem icon={<SiAboutdotme />}>
                  <Heading as="h4" size="md">
                    About Me
                  </Heading>
                </MenuItem>
              </Link>
              <Link
                smooth
                to="#skills"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                <MenuItem icon={<GiSkills />}>
                  <Heading as="h4" size="md">
                    Skills
                  </Heading>
                </MenuItem>
              </Link>
              <Link
                smooth
                to="#projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                <MenuItem icon={<FaProjectDiagram />}>
                  <Heading as="h4" size="md">
                    Projects
                  </Heading>
                </MenuItem>
              </Link>

              <Link
                smooth
                to="#contacts"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                <MenuItem icon={<MdContacts />}>
                  <Heading as="h4" size="md">
                    Contacts
                  </Heading>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Show>
      </Flex>
    </Box>
  );
};

export default Navbar;
