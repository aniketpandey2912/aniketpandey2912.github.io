import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProjectCards } from "../Components/ProjectCards";
import { COLORS, SECTION_IDS } from "../config/theme";
import { projectsList } from "../data/projects";

const Projects = () => {
  return (
    <Box
      h="auto"
      id={SECTION_IDS.projects}
      py="100px"
      bgColor={COLORS.projects}
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="18px" size="lg" color="white">
        Projects
      </Heading>
      <Box w={{ base: "80%", sm: "75%", lg: "60%" }} m="auto">
        <ProjectsList />
      </Box>
    </Box>
  );
};

export default Projects;

export const ProjectsList = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns={{
        base: "repeat(auto-fill, minmax(220px, 1fr))",
        md: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {projectsList &&
        projectsList.map((project) => (
          <ProjectCards
            key={project.id}
            title={project.title}
            imgUrl={project.imgUrl}
            githubUrl={project.githubUrl}
            deployedUrl={project.deployedUrl}
            description={project.description}
            techs={project.techs}
          />
        ))}
    </SimpleGrid>
  );
};
