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
      gap={{ base: "1.5", sm: "2" }}
    >
      <Image
        src={imgUrl}
        alt={title}
        w={{ base: "36px", sm: "40px", md: "44px" }}
        h={{ base: "36px", sm: "40px", md: "44px" }}
        objectFit="contain"
        filter={
          isDarkMode
            ? "brightness(1.3) saturate(1.1) drop-shadow(0 0 8px rgba(167,139,250,0.6))"
            : "brightness(1.1) saturate(1)"
        }
        transition="all 0.3s ease"
      />

      <Heading
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
        textAlign="center"
        fontWeight="600"
        lineHeight="1.3"
        letterSpacing="0.3px"
        color={colors.text}
        noOfLines={2}
      >
        {title}
      </Heading>
    </Flex>
  );
};

export default SkillCards;
