import {
  Heading,
  Image,
  Link,
  Text,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { ProjectButton } from "./MyButton";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";

// Project card function
export const ProjectCards = ({
  title,
  imgUrl,
  githubUrl,
  deployedUrl,
  description,
  techs,
}) => {
  return (
    <>
      <Card
        maxW="sm"
        m="auto"
        color="whiteAlpha.700"
        boxShadow="dark-lg"
        transition="all 0.5s linear"
        _hover={{ transform: "scale(1.03)", bgColor: "black" }}
      >
        {/* Image, description */}
        <CardBody>
          <Image
            src={imgUrl}
            alt={title}
            borderRadius="lg"
            w="100%"
            h="200px"
          />

          <Stack mt="6" spacing="3" color="white">
            <Heading as="h4" size="md">
              {title} Clone
            </Heading>
            <Heading size="md">Description : </Heading>

            <Text textAlign="justify" fontWeight="bold">
              {description}
            </Text>
            <Flex gap={2} wrap={"wrap"}>
              {techs?.map((el, index) => (
                <Badge
                  key={el}
                  colorScheme={index % 2 === 0 ? "red" : "green"}
                  fontWeight="bold"
                >
                  {el}
                </Badge>
              ))}
            </Flex>
          </Stack>
        </CardBody>

        <Divider />

        {/* Buttons */}
        <CardFooter>
          <ButtonGroup spacing="2">
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
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};
