import { Box, Flex, Grid, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import ProjectCards from "../Components/ProjectCards";

const Projects = () => {
  return (
    <Box
      border="1px solid black"
      h="100%"
      id="projects"
      py="100px"
      bgGradient="linear(to-r, #E7E6EF,  #009090)"
    >
      <Heading textAlign="center" color="blue.600" mb="50px">
        Projects
      </Heading>
      <Grid
        px="30px"
        justifyContent="space-between"
        alignItems="center"
        // direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="5%"
      >
        <ProjectCards
          title="Cult.fit"
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Cult.png?raw=true"
          githubUrl="https://github.com/aniketpandey2912/flawless-vegetable-3066"
          deployedUrl="https://cult-fit-aniket-clone.netlify.app/"
          description="It is a clone of website Cult.fit. It was an individual project. Duration was 5 days"
        />

        <ProjectCards
          title="Lately.ai"
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Lately.png?raw=true"
          githubUrl="https://github.com/aniketpandey2912/acceptable-popcorn-8320"
          deployedUrl="https://aniketpandey2912-makes-great-sites.netlify.app/"
          description="It is a clone of website Lately.ai. It was an individual project. Duration was 5 days"
        />

        <ProjectCards
          title="Mailtrap"
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Mailtrap.png?raw=true"
          githubUrl="https://github.com/SubhadeepBid/alleged-partner-6503"
          deployedUrl="https://super-pithivier-ba36c1.netlify.app/email_api"
          description="It is a clone of website Mailtrap. It was an individual project. Duration was 5 days"
        />
      </Grid>
    </Box>
  );
};

export default Projects;
