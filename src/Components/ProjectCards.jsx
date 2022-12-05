import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import React from "react";
import { ProjectButton } from "./MyButton";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";

const ProjectCards = (props) => {
  const { imgUrl, title, githubUrl, deployedUrl, description } = props;

  return (
    <Box
      border="1px solid none"
      boxShadow="dark-lg"
      p={{ base: "6", sm: "6", md: "6", lg: "6" }}
      rounded="md"
      bg="#6B728E"
      color="white"
    >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image
          src={imgUrl}
          alt={title}
          w="100%"
          h={{ base: "120px", sm: "200px", md: "150px", lg: "230px" }}
        />

        <Heading as="h4" size="md">
          {title} Clone
        </Heading>
        <Text textAlign="center">{description}</Text>
        <Link
          href={`${githubUrl}`}
          target="_blank"
          w="100%"
          _hover={{ textDecoration: "none" }}
        >
          <ProjectButton text="Github" btnIcon={<BsGithub />}>
            Git
          </ProjectButton>
        </Link>
        <Link
          href={`${deployedUrl}`}
          target="_blank"
          w="100%"
          _hover={{ textDecoration: "none" }}
        >
          <ProjectButton text="Live" btnIcon={<GrDeploy />}>
            Live
          </ProjectButton>
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectCards;
