import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box
      border="1px solid red"
      h="100vh"
      py="100px"
      id="home"
      bgGradient="linear(to-l, #E7E6EF,  #009090)"
    >
      <Heading textAlign="center" color="blue.600">Home</Heading>
    </Box>
  );
};

export default Home;
