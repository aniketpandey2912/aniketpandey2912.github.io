import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProjectCards } from "../Components/ProjectCards";
import { SECTION_IDS } from "../config/theme";
import { projectsList } from "../data/projects";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { colors } = useTheme();
  return (
    <Box
      h="auto"
      id={SECTION_IDS.projects}
      py="100px"
      bgColor={colors.projects}
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="50px" size="lg" color={colors.text}>
        Projects
      </Heading>
      <Box w={{ base: "90%", sm: "85%", md: "75%", lg: "65%" }} m="auto">
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
        base: "repeat(auto-fill, minmax(100px, 1fr))",
        sm: "repeat(auto-fill, minmax(130px, 1fr))",
        md: "repeat(auto-fill, minmax(165px, 1fr))",
        lg: "repeat(auto-fill, minmax(190px, 1fr))",
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
