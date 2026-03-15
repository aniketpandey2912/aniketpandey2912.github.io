import {
  Heading,
  Image,
  Link,
  Text,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Badge,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { ProjectButton } from "./MyButton";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
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
  const { colors } = useTheme();
  return (
    <>
      <Card
        maxW="sm"
        mx="auto"
        color={colors.text}
        bgColor={colors.hover}
        boxShadow="dark-lg"
        borderWidth="1px"
        borderColor={colors.border}
        transition="all 0.3s linear"
        h="100%"
        display="flex"
        flexDirection="column"
      >
        {/* Image */}
        <Image
          src={imgUrl}
          alt={title}
          borderRadius="lg"
          w="100%"
          h="120px"
          objectFit="cover"
        />

        {/* Content */}
        <CardBody pb="2" flex="1">
          <Stack spacing="1.5">
            <Heading size="sm" noOfLines={1}>{title}</Heading>
            <Tooltip label={description} bg={colors.textMuted} color={colors.text} borderRadius="md" maxW="200px">
              <Text
                fontSize="xs"
                color={colors.textSecondary}
                lineHeight="1.4"
                noOfLines={2}
                cursor="help"
              >
                {description}
              </Text>
            </Tooltip>

            <Flex gap={1} wrap="wrap" pt="0.5">
              <Tooltip label={techs?.join(", ")} bg={colors.textMuted} color={colors.text} borderRadius="md" maxW="250px">
                <Flex gap={1} wrap="wrap" w="100%">
                  {techs?.slice(0, 3).map((el, index) => (
                    <Badge key={el} fontSize="10px" colorScheme={index % 2 === 0 ? "red" : "green"}>
                      {el}
                    </Badge>
                  ))}
                  {techs && techs.length > 3 && (
                    <Badge fontSize="10px" colorScheme="gray" cursor="help">
                      +{techs.length - 3}
                    </Badge>
                  )}
                </Flex>
              </Tooltip>
            </Flex>
          </Stack>
        </CardBody>

        {/* Buttons */}
        <CardFooter pt="0" pb="2">
          <ButtonGroup spacing="1" w="100%" size="sm">
            <Link
              href={`${githubUrl}`}
              target="_blank"
              flex="1"
              _hover={{ textDecoration: "none" }}
            >
              <ProjectButton text="Github" btnIcon={<BsGithub />}>
                Git
              </ProjectButton>
            </Link>
            <Link
              href={`${deployedUrl}`}
              target="_blank"
              flex="1"
              _hover={{ textDecoration: "none" }}
            >
              <ProjectButton text="Live" btnIcon={<FiExternalLink />}>
                Live
              </ProjectButton>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};
