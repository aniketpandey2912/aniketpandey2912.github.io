import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const SkillCards = (props) => {
  const { imgUrl, title } = props;
  const { isDarkMode, colors } = useTheme();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="2"
    >
      <Image
        src={imgUrl}
        alt={title}
        w="40px"
        h="40px"
        objectFit="contain"
        filter={
          isDarkMode
            ? "brightness(1.3) saturate(1.1) drop-shadow(0 0 8px rgba(167,139,250,0.6))"
            : "brightness(1.1) saturate(1)"
        }
        transition="all 0.3s ease"
      />

      <Heading
        fontSize={{ base: "sm", md: "md" }}
        textAlign="center"
        fontWeight="600"
        lineHeight="1.4"
        letterSpacing="0.3px"
        color={colors.text}
      >
        {title}
      </Heading>
    </Flex>
  );
};

export default SkillCards;
