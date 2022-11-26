import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <Box
      border="1px solid black"
      h="100vh"
      id="projects"
      py="100px"
      bgGradient="linear(to-r, #E7E6EF,  #009090)"
    >
      <Heading textAlign="center" color="blue.600">Projects</Heading>
    </Box>
  );
};

export default Projects;
