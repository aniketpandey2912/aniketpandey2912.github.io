import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { GrDownload } from "react-icons/gr";

// Resume Button
export const ResumeButton = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1x0iQopDu1u7FI_gu_QY_q37EX2gCMYos/view"
    );
  };

  return (
    <Link
      // href="https://drive.google.com/file/d/1x0iQopDu1u7FI_gu_QY_q37EX2gCMYos/view"
      href="Aniket-Pandey-Resume.pdf"
      target="_blank"
      download="Aniket-Pandey-Resume.pdf"
      style={{ textDecoration: "none" }}
      onClick={handleClick}
    >
      {/* // <a download href="./Aniket-Pandey-Resume.pdf" onClick={handleClick}> */}
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
      {/* </a> */}
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

// <a
//   target={"blank"}
//   download
//   href="./Vaibhav-Mougha-Resume.pdf"
//   onClick={handleClick}
// >
//   <button>Download CV</button>
// </a>
