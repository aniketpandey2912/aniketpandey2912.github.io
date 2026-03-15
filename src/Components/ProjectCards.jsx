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
import { useTheme } from "../context/ThemeContext";

// Project card function
export const ProjectCards = ({
  title,
  imgUrl,
  githubUrl,
  deployedUrl,
  description,
  techs,
}) => {
  const theme = useTheme();

  return (
    <>
      <Card
        maxW="sm"
        mx="auto"
        color={theme.textPrimary}
        boxShadow="dark-lg"
        transition="all 0.3s linear"
        _hover={{ transform: "scale(0.99)" }}
      >
        {/* Image, description */}
        <CardBody>
          <Image
            src={imgUrl}
            alt={title}
            borderRadius="lg"
            w="100%"
            h="150px"
            m="auto"
          />

          <Stack mt="6" spacing="3" color={theme.textPrimary}>
            <Heading size="sm">{title} Clone</Heading>
            <Heading size="sm">Description : </Heading>

            <Text fontSize="sm" color={theme.textSecondary}>
              {description}
            </Text>

            <Flex gap={2} wrap={"wrap"}>
              {techs?.map((el, index) => (
                <Badge key={el} colorScheme={index % 2 === 0 ? "red" : "green"}>
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
