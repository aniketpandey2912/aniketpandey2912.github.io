import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SkillCards from "../Components/SkillCards";

const Skills = () => {
  return (
    <Box
      // border="1px solid red"
      h="100%"
      id="skills"
      py="100px"
      bgColor="#50577A"
    >
      <Heading
        textAlign="center"
        mb={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl", lg: "5xl" }}
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        Skills
      </Heading>
      <Grid
        px={{ base: "80px", sm: "40px", md: "100px", lg: "100px" }}
        justifyContent="space-between"
        alignItems="center"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={{ base: "20px", sm: "5%" }}
      >
        <SkillCards
          imgUrl="https://brandeps.com/icon-download/H/Html-icon-vector-01.svg"
          title="HTML"
        />
        <SkillCards
          imgUrl="https://brandeps.com/icon-download/C/CSS-3-icon-vector-01.svg"
          title="CSS"
        />

        <SkillCards
          imgUrl="https://brandeps.com/icon-download/J/Javascript-icon-vector-04.svg"
          title="Javascript"
        />

        <SkillCards
          imgUrl="https://brandeps.com/icon-download/R/React-icon-vector-02.svg"
          title="React"
        />

        <SkillCards
          imgUrl="https://media.graphassets.com/91q3gAEGSh6HCrpnPgxS"
          title="Chakra-UI"
        />

        <SkillCards
          imgUrl="https://brandeps.com/icon-download/R/Redux-icon-vector-01.svg"
          title="Redux"
        />

        <SkillCards
          imgUrl="https://brandeps.com/icon-download/N/Nextjs-icon-vector-01.svg"
          title="Next.js"
        />

        <SkillCards
          imgUrl="https://brandeps.com/icon-download/S/Storybook-icon-vector-01.svg"
          title="Storybook"
        />

        <SkillCards
          imgUrl="https://cdn-icons-png.flaticon.com/512/5968/5968566.png"
          title="Typescript"
        />
      </Grid>
    </Box>
  );
};

export default Skills;
