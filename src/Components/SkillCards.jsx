import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const SkillCards = (props) => {
  const { imgUrl, title } = props;
  const theme = useTheme();
  return (
    <Box
      boxShadow="dark-lg"
      py="3"
      rounded="md"
      bg="blackAlpha"
      color={theme.textPrimary}
      transition="all 0.3s linear"
      _hover={{
        transform: "scale(0.97)",
        bgColor: theme.primary,
        color: theme.black,
      }}
    >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image src={imgUrl} alt={title} w="30%" />
        <Heading fontSize={{ base: "sm", lg: "sm" }}>{title}</Heading>
      </Flex>
    </Box>
  );
};

export default SkillCards;
