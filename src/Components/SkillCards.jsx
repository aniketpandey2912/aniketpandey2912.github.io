import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const SkillCards = (props) => {
  const { imgUrl, title } = props;
  return (
    <Box
      border="1px solid none"
      boxShadow="dark-lg"
      p="3"
      rounded="md"
      bg="blackAlpha"
      color="white"
      transition="all 0.5s linear"
      _hover={{ transform: "scale(1.1)", bgColor: "cyan", color: "black" }}
    >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image src={imgUrl} alt={title} w="30%" />

        <Heading as="h4" size="md">
          {title}
        </Heading>
      </Flex>
    </Box>
  );
};

export default SkillCards;
