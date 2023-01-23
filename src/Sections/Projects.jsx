import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProjectCards } from "../Components/ProjectCards";

const Projects = () => {
  return (
    <Box
      // border="1px solid black"
      h="auto"
      // w="100%"
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
      <Box w="90%" m="auto">
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
        base: "repeat(auto-fill, minmax(200px, 1fr))",
        sm: "repeat(auto-fill, minmax(300px, 1fr))",
        md: "repeat(auto-fill, minmax(350px, 1fr))",
      }}
    >
      {/* Movie List */}
      {myProjects &&
        myProjects.map((project) => (
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

// My Projects Details
const myProjects = [
  {
    id: 1,
    title: "Zee5.com",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ZeeAppPoster.png?raw=true",
    githubUrl: "https://github.com/aniketpandey2912/Zee5-Clone",
    deployedUrl: "https://creative-macaron-cbefa7.netlify.app/",
    description:
      "It is a clone of website Zee5.com. It is a collaborative project. Built and executed in 5 days.",
    techs: ["React", "Chakra-Ui", "Javascript", "Html", "Css"],
  },
  {
    id: 2,
    title: "Paytmmall.com",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ApnaMall.png?raw=true",
    githubUrl: "https://github.com/bhav1kmaru/familiar-wilderness-510",
    deployedUrl: "https://apnamall.vercel.app/",
    description:
      "It is a clone of website Paytmmall. It is a collaborative project. Built and executed in 5 days.",
    techs: ["Next.Js", "React", "Chakra-Ui", "Javascript", "Html"],
  },
  {
    id: 3,
    title: "Lately.ai",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Lately.png?raw=true",
    githubUrl: "https://github.com/aniketpandey2912/acceptable-popcorn-8320",
    deployedUrl: "https://aniketpandey2912-makes-great-sites.netlify.app/",
    description:
      "It is a clone of website Lately.ai. It is an individual project. Built and executed in 5 days.",
    techs: ["React", "Chakra-Ui", "Javascript", "Html", "Css"],
  },
  {
    id: 4,
    title: "Cult.fit",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Cult.png?raw=true",
    githubUrl: "https://github.com/aniketpandey2912/flawless-vegetable-3066",
    deployedUrl: "https://cult-fit-aniket-clone.netlify.app/",
    description:
      "It is a clone of website Cult.fit. It is an individual project. Built and executed in 5 days.",
    techs: ["React", "Chakra-Ui", "Javascript", "Html", "Css"],
  },
  {
    id: 5,
    title: "Mailtrap",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Mailtrap.png?raw=true",
    githubUrl: "https://github.com/SubhadeepBid/alleged-partner-6503",
    deployedUrl: "https://super-pithivier-ba36c1.netlify.app/email_api",
    description:
      "It is a clone of website Mailtrap. It is an individual project. Built and executed in 5 days.",
    techs: ["Javascript", "Html", "Css"],
  },
];
