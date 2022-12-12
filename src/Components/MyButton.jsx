import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { GrDownload } from "react-icons/gr";

// Resume Button
export const ResumeButton = () => {
  return (
    <Link
      // href="https://drive.google.com/file/d/1x0iQopDu1u7FI_gu_QY_q37EX2gCMYos/view"
      href="./resumedownload/resume.pdf"
      target="_blank"
      download={true}
      style={{ textDecoration: "none" }}
    >
      <Button
        type="download"
        colorScheme="whiteAlpha"
        size={{ base: "md", sm: "sm", md: "md", lg: "lg" }}
        w="100%"
        rightIcon={<GrDownload />}
        color="black"
      >
        Resume
      </Button>
    </Link>
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
