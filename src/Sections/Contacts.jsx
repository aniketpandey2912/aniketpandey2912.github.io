import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function Contacts() {
  return (
    <Box
      border="1px solid black"
      h="100vh"
      id="contacts"
      py="100px"
      bgGradient="linear(to-l, #E7E6EF,  #009090)"
    >
      <Heading textAlign="center" color="blue.600">Contacts</Heading>
    </Box>
  );
}

export default Contacts;
