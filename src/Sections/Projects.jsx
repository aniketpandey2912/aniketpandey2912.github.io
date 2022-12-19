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
      bgColor="#6B728E"
    >
      <Heading
        textAlign="center"
        mb={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl", lg: "5xl" }}
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        Projects
      </Heading>
      <Grid
        px="30px"
        justifyContent="space-between"
        alignItems="center"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={{ base: "3%", sm: "4%", md: "5%" }}
      >
        <ProjectCards
          title="ZeeApp"
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ZeeAppPoster.png?raw=true"
          githubUrl="https://github.com/aniketpandey2912/Zee5-Clone"
          deployedUrl="https://kaleidoscopic-alpaca-f60e4a.netlify.app/"
          description="It is a clone of website Zee5.com. It was an individual project. Duration was 5 days"
        />

        <ProjectCards
          title="Lately.ai"
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Lately.png?raw=true"
          githubUrl="https://github.com/aniketpandey2912/acceptable-popcorn-8320"
          deployedUrl="https://aniketpandey2912-makes-great-sites.netlify.app/"
          description="It is a clone of website Lately.ai. It was an individual project. Duration was 5 days"
        />
        <ProjectCards
          title="Cult.fit"
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Cult.png?raw=true"
          githubUrl="https://github.com/aniketpandey2912/flawless-vegetable-3066"
          deployedUrl="https://cult-fit-aniket-clone.netlify.app/"
          description="It is a clone of website Cult.fit. It was an individual project. Duration was 5 days"
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
