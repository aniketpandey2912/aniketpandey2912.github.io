import { Box, Heading, Image } from "@chakra-ui/react";
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
      <Heading textAlign="center" color="blue.600">
        Projects
      </Heading>
      {/* <Image
        src="../src/Sections/Images/Cult.png"
        alt="prof-avatar"
        // borderRadius="50%"
        // h={{ base: "100px", sm: "150px", md: "150px", lg: "230px" }}
      /> */}
    </Box>
  );
};

export default Projects;
