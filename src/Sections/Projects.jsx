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
      py={{ base: "60px", sm: "70px", md: "80px", lg: "100px" }}
      bgColor={colors.projects}
      fontFamily={"sans-serif"}
    >
      <Heading
        textAlign="center"
        mb={{ base: "30px", sm: "40px", md: "50px" }}
        size="lg"
        color={colors.text}
      >
        Projects
      </Heading>
      <Box w={{ base: "95%", sm: "90%", md: "85%", lg: "75%" }} m="auto">
        <ProjectsList />
      </Box>
    </Box>
  );
};

export default Projects;

export const ProjectsList = () => {
  return (
    <SimpleGrid
      spacing={{ base: "16px", sm: "20px", md: "24px", lg: "32px" }}
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
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
