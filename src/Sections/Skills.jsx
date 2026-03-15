import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import SkillCards from "../Components/SkillCards";
import { SECTION_IDS } from "../config/theme";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { colors } = useTheme();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          title: "HTML",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        {
          title: "CSS",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        {
          title: "Javascript",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          title: "TypeScript",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
          title: "React",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          title: "Angular",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
        },
        {
          title: "Next.js",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
          title: "Chakra-UI",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chakraui/chakraui-original.svg",
        },
        {
          title: "Redux",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        },
        {
          title: "Storybook",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",
        },
        {
          title: "PrimeNG",
          imgUrl:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='10' y='10' width='30' height='30' fill='%233B82F6' rx='4'/%3E%3Crect x='50' y='10' width='30' height='30' fill='%233B82F6' rx='4'/%3E%3Crect x='10' y='50' width='30' height='30' fill='%233B82F6' rx='4'/%3E%3Crect x='50' y='50' width='30' height='30' fill='%233B82F6' rx='4'/%3E%3Ctext x='50' y='90' font-size='14' font-weight='bold' fill='%233B82F6' text-anchor='middle'%3EP%3C/text%3E%3C/svg%3E",
        },
        {
          title: "Mapbox",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mapbox.svg",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          title: "Node.js",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          title: "Express.js",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        {
          title: "MongoDB",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          title: "Snowflake",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snowflake.svg",
        },
      ],
    },
    {
      title: "Testing",
      skills: [
        {
          title: "Cypress",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
        },
      ],
    },
    {
      title: "DevOps & Deployment",
      skills: [
        {
          title: "Git",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          title: "Github",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        },
        {
          title: "Netlify",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
        },
        {
          title: "Vercel",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        {
          title: "VS Code",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        },
        {
          title: "CodeSandbox",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codesandbox.svg",
        },
        {
          title: "Replit",
          imgUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/replit/replit-original.svg",
        },
      ],
    },
  ];

  return (
    <Box
      h="auto"
      id={SECTION_IDS.skills}
      py="80px"
      bgColor={colors.skills}
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="50px" size="lg" color={colors.text}>
        Skills
      </Heading>

      <Grid
        w={{ base: "90%", sm: "90%", lg: "85%" }}
        m="auto"
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap="50px"
      >
        {skillCategories.map((category) => (
          <Box
            key={category.title}
            p="8"
            rounded="lg"
            bgColor={colors.surface}
            borderWidth="1px"
            borderColor={colors.border}
            boxShadow={`0 2px 8px ${colors.primary}10`}
          >
            <Heading textAlign="center" mb="20px" size="sm" color={colors.text}>
              {category.title}
            </Heading>
            <Grid
              w="100%"
              gridTemplateColumns={{
                base: "repeat(3,1fr)",
                sm: "repeat(4,1fr)",
                md: "repeat(5,1fr)",
                lg: "repeat(6,1fr)",
              }}
              columnGap={{ base: "15px", sm: "20px" }}
              rowGap="12px"
            >
              {category.skills.map((skill) => (
                <SkillCards
                  key={skill.title}
                  imgUrl={skill.imgUrl}
                  title={skill.title}
                />
              ))}
            </Grid>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
