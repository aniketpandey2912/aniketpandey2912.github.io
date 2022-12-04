import { Button } from "@chakra-ui/react";
import React from "react";
import { GrDownload } from "react-icons/gr";

export const ResumeButton = () => {
  return (
    <Button
      type="download"
      colorScheme="whiteAlpha"
      size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
      w="100%"
      rightIcon={<GrDownload />}
      color="black"
    >
      Download Resume
    </Button>
  );
};

export const ProjectButton = ({ text, btnIcon }) => {
  return (
    <Button
      type="download"
      // bg="teal"
      colorScheme="whiteAlpha"
      variant="solid"
      size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
      w="100%"
      mt="15px"
      rightIcon={btnIcon}
    >
      {text}
    </Button>
  );
};
