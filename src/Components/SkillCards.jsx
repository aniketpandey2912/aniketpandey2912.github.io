import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const SkillCards = (props) => {
  const { imgUrl, title } = props;
  return (
    <Box
      // border="1px solid none"
      boxShadow="dark-lg"
      py="3"
      rounded="md"
      bg="blackAlpha"
      color="white"
      transition="all 0.3s linear"
      _hover={{ transform: "scale(0.97)", bgColor: "cyan", color: "black" }}
    >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image src={imgUrl} alt={title} w="30%" />

        <Heading fontSize={{ base: "sm", lg: "sm" }}>{title}</Heading>
      </Flex>
    </Box>
  );
};

export default SkillCards;
