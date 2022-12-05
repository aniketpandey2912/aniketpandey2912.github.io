import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
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
