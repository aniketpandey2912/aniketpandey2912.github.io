import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box
      border="1px solid red"
      h="100vh"
      id="skills"
      py="100px"
      bgGradient="linear(to-l, #E7E6EF,  #009090)"
    >
      <Heading textAlign="center" color="blue.600">Skills</Heading>
    </Box>
  );
};

export default Skills;
