import { Button } from "@chakra-ui/react";
import React from "react";
import { GrDownload } from "react-icons/gr";

// Resume Button
export const ResumeButton = () => {
  return (
    <Button
      type="download"
      colorScheme="whiteAlpha"
      size={{ base: "md", sm: "sm", md: "md", lg: "lg" }}
      w="100%"
      rightIcon={<GrDownload />}
      color="black"
    >
      Download Resume
    </Button>
  );
};

// Projects Button
export const ProjectButton = ({ text, btnIcon }) => {
  return (
    <Button
      type="download"
      // bg="teal"
      colorScheme="whiteAlpha"
      variant="solid"
      size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }} // Keep size medium for screen size below sm because adjusted by hide/show tag
      w="100%"
      mt="15px"
      rightIcon={btnIcon}
    >
      {text}
    </Button>
  );
};

// Contact Button
export const ContactsButton = ({ btnIcon, btnColor }) => {
  return (
    <Button
      type="download"
      // bg={btnColor || "whiteAlpha"}
      colorScheme={btnColor || "whiteAlpha"}
      variant="solid"
      size={{ base: "lg", sm: "sm", md: "md", lg: "lg" }}
      w="100%"
    >
      {btnIcon}
    </Button>
  );
};
