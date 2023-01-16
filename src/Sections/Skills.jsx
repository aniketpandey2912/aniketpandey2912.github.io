import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SkillCards from "../Components/SkillCards";

const Skills = () => {
  return (
    <Box
      // border="1px solid red"
      h="auto"
      // w="100%"
      id="skills"
      py="100px"
      bgColor="#50577A"
    >
      {/* Skills */}
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
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/885e23da24e8a4cab660f069f264950c1550660e/src/Sections/Images/HTML.svg"
          title="HTML"
        />
        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/885e23da24e8a4cab660f069f264950c1550660e/src/Sections/Images/CSS.svg"
          title="CSS"
        />

        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/885e23da24e8a4cab660f069f264950c1550660e/src/Sections/Images/JavaScript.svg"
          title="Javascript"
        />

        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/885e23da24e8a4cab660f069f264950c1550660e/src/Sections/Images/React.svg"
          title="React"
        />

        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/885e23da24e8a4cab660f069f264950c1550660e/src/Sections/Images/chakra.svg"
          title="Chakra-UI"
        />

        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/885e23da24e8a4cab660f069f264950c1550660e/src/Sections/Images/Redux.svg"
          title="Redux"
        />

        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/885e23da24e8a4cab660f069f264950c1550660e/src/Sections/Images/NextJs.svg"
          title="Next.js"
        />

        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/885e23da24e8a4cab660f069f264950c1550660e/src/Sections/Images/StoryBook.svg"
          title="Storybook"
        />

        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Typescript.png?raw=true"
          title="Typescript"
        />
      </Grid>

      {/* Tools */}
      <Heading
        textAlign="center"
        mt={{ base: "50px", sm: "60px", md: "80px", lg: "100px" }}
        mb={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl", lg: "5xl" }}
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        Tools
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
        // gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
        gap={{ base: "20px", sm: "5%" }}
      >
        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/VSCode.png?raw=true"
          title="VS Code"
        />
        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/GitHub.png?raw=true"
          title="Github"
        />

        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Git.png?raw=true"
          title="Git"
        />

        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Netlify.png?raw=true"
          title="Netlify"
        />

        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Vercel.png?raw=true"
          title="Vercel"
        />

        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Codesandbox.png?raw=true"
          title="CodeSandbox"
        />

        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Replit.png?raw=true"
          title="Replit"
        />
      </Grid>
    </Box>
  );
};

export default Skills;
