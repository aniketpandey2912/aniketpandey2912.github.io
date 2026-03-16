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
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        }}
      >
        {/* Image */}
        <Image
          src={imgUrl}
          alt={title}
          borderRadius="lg"
          w="100%"
          h={{ base: "100px", sm: "120px", md: "140px" }}
          objectFit="cover"
        />

        {/* Content */}
        <CardBody pb={{ base: "1", sm: "2" }} flex="1">
          <Stack spacing="1">
            <Heading size={{ base: "xs", sm: "sm" }} noOfLines={1}>
              {title}
            </Heading>
            <Tooltip
              label={description}
              bg={colors.textMuted}
              color={colors.text}
              borderRadius="md"
              maxW="200px"
            >
              <Text
                fontSize={{ base: "10px", sm: "xs" }}
                color={colors.textSecondary}
                lineHeight="1.3"
                noOfLines={2}
                cursor="help"
              >
                {description}
              </Text>
            </Tooltip>

            <Flex gap={1} wrap="wrap" pt="0.5">
              <Tooltip
                label={techs?.join(", ")}
                bg={colors.textMuted}
                color={colors.text}
                borderRadius="md"
                maxW="250px"
              >
                <Flex gap={1} wrap="wrap" w="100%">
                  {techs?.slice(0, 3).map((el, index) => (
                    <Badge
                      key={el}
                      fontSize={{ base: "9px", sm: "10px" }}
                      colorScheme={index % 2 === 0 ? "red" : "green"}
                    >
                      {el}
                    </Badge>
                  ))}
                  {techs && techs.length > 3 && (
                    <Badge
                      fontSize={{ base: "9px", sm: "10px" }}
                      colorScheme="gray"
                      cursor="help"
                    >
                      +{techs.length - 3}
                    </Badge>
                  )}
                </Flex>
              </Tooltip>
            </Flex>
          </Stack>
        </CardBody>

        {/* Buttons */}
        <CardFooter pt="0" pb={{ base: "1.5", sm: "2" }}>
          <ButtonGroup
            spacing={{ base: "0.5", sm: "1" }}
            w="100%"
            size={{ base: "xs", sm: "sm" }}
          >
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
