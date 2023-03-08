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
    title: "Paytmmall.com",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ApnaMall.png?raw=true",
    githubUrl: "https://github.com/bhav1kmaru/familiar-wilderness-510",
    deployedUrl: "https://apnamall.vercel.app/",
    description:
      "Apna Mall is an e-commerce website that allows users to shop for a wide range of products online. The website offers a wide range of collections of products, including electronics, fashion, home and kitchen appliances, beauty and personal care items, and more.",
    techs: [
      "Next.Js",
      "React",
      "Chakra-Ui",
      "Javascript",
      "Html",
      "CSS",
      "firebase-authentication",
    ],
  },
  {
    id: 2,
    title: "Flipkart.com",
    imgUrl:
      "https://user-images.githubusercontent.com/110104542/221482200-6a080f16-cfc0-442e-b61c-1567631b11c6.jpg",
    deployedUrl: "https://flopcart-nine.vercel.app/",
    description:
      "A Flopkart website is an e-commerce platform. It allows users to browse and purchase a wide range of products such as electronics, fashion, and more. Like Flipkart, the Flopkart website typically includes features such as a user-friendly interface, product reviews and ratings, product search, user registration and login, user profile section, add to cart and checkout page.",
    techs: [
      "Node.js",
      "Express.js",
      "Mongodb",
      "React",
      "Chakra-Ui",
      "Javascript",
      "Cloudinary",
    ],
  },
  {
    id: 3,
    title: "Zee5.com",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ZeeAppPoster.png?raw=true",
    githubUrl: "https://github.com/rittik24/Zee5.com.clone",
    deployedUrl: "https://comfy-dragon-c64b1f.netlify.app/",
    description:
      "ZEE-5 is a subscription-based streaming service that allows our members to watch TV shows, movies, web series, and News on an internet-connected device. It was a collaborative project and there were 5 members. The duration was 5 days.",
    techs: ["React", "Chakra-Ui", "Javascript", "Html", "Css"],
  },

  {
    id: 4,
    title: "Lately.ai",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Lately.png?raw=true",
    githubUrl: "https://github.com/aniketpandey2912/acceptable-popcorn-8320",
    deployedUrl: "https://aniketpandey2912-makes-great-sites.netlify.app/",
    description:
      "Lately is an AI-powered content generator and social media management platform that re-purposes long-form text, video, and podcasts. It is an individual project, built and executed in 5 days.",
    techs: ["React", "Chakra-Ui", "Javascript", "Html", "Css"],
  },
  {
    id: 5,
    title: "Cult.fit",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Cult.png?raw=true",
    githubUrl: "https://github.com/aniketpandey2912/flawless-vegetable-3066",
    deployedUrl: "https://cult-fit-aniket-clone.netlify.app/",
    description:
      "Cult brings Meditation sessions and Goal based workout at your home. It also provides gym equipments. It is an individual project. Built and executed in 5 days.",
    techs: ["React", "Chakra-Ui", "Javascript", "Html", "Css"],
  },
  {
    id: 6,
    title: "Mailtrap",
    imgUrl:
      "https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/Mailtrap.png?raw=true",
    githubUrl: "https://github.com/SubhadeepBid/alleged-partner-6503",
    deployedUrl: "https://super-pithivier-ba36c1.netlify.app/email_api",
    description:
      "Mailtrap is an Email Delivery Platform that allows customers to manage the email infrastructure in one place. It is an individual project. Built and executed in 5 days.",
    techs: ["Javascript", "Html", "Css"],
  },
];
