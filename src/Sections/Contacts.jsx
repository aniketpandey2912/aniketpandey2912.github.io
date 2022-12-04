import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function Contacts() {
  return (
    <Box
      border="1px solid black"
      h="100%"
      id="contacts"
      py="100px"
      bgColor="black"
    >
      <Heading
        textAlign="center"
        mb="50px"
        fontSize="6xl"
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        Contacts
      </Heading>
    </Box>
  );
}

export default Contacts;
