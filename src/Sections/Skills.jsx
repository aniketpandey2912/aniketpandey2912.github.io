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
      fontFamily={"sans-serif"}
    >
      {/* Skills */}
      <Heading textAlign="center" mb="18px" size="lg" color="white">
        Skills
      </Heading>
      <Grid
        w={{ base: "80%", sm: "75%", lg: "60%" }}
        m="auto"
        px={{ base: "20px", sm: "30px", md: "50px", lg: "70px" }}
        justifyContent="space-between"
        alignItems="center"
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
        }}
        columnGap={{ base: "20px", sm: "3%" }}
        rowGap="20px"
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

        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/6b1ada18b6a6500390c6c41f5956238b872a2c1a/src/Sections/Images/cypress.svg"
          title="Cypress"
        />

        <SkillCards
          imgUrl="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/mongodb.png?raw=true"
          title="Node.js"
        />

        <SkillCards
          imgUrl="https://raw.githubusercontent.com/aniketpandey2912/aniketpandey2912.github.io/6b1ada18b6a6500390c6c41f5956238b872a2c1a/src/Sections/Images/express-js.svg"
          title="Express.js"
        />

        <SkillCards
          imgUrl="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png"
          title="MongoDB"
        />
      </Grid>

      {/* Tools */}
      <Heading
        textAlign="center"
        mt={{ base: "50px", sm: "60px", md: "80px", lg: "100px" }}
        mb="18px"
        size="lg"
        color="white"
      >
        Tools
      </Heading>
      <Grid
        w={{ base: "80%", sm: "75%", lg: "60%" }}
        m="auto"
        px={{ base: "20px", sm: "30px", md: "50px", lg: "70px" }}
        justifyContent="space-between"
        alignItems="center"
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
        }}
        columnGap={{ base: "20px", sm: "3%" }}
        rowGap="20px"
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
