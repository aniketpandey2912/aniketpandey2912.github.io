import { Button } from "@chakra-ui/react";
import React from "react";
import { GrDownload } from "react-icons/gr";

const MyButton = () => {
  return (
    <Button
      type="download"
      colorScheme="teal"
      size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
      mt="15px"
      rightIcon={<GrDownload />}
      color="black"
    >
      Download Resume
    </Button>
  );
};

export default MyButton;
