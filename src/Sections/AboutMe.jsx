import { Box, Heading, Square, Text } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  const name = "Aniket Pandey";

  return (
    <Box
      // border="1px solid black"
      h="100%"
      w="100vmax"
      id="about"
      py="100px"
      color="black"
      bgColor="#474E68"
    >
      <Heading
        textAlign="center"
        mb={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl", lg: "5xl" }}
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        About Me
      </Heading>

      {/* Description box */}
      <Square
        w={{ base: "90%", sm: "90%", md: "80%", lg: "80%" }}
        m="auto"
        display="flex"
        flexDirection="column"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bgColor="#474E68"
      >
        <Text
          fontSize={{
            base: "22px",
            sm: "24px",
            md: "27px",
            lg: "30px",
          }}
          fontWeight="800"
          color="whiteAlpha.700"
          fontFamily="monospace"
        >
          Hi there, My name is {name} and I am from Lucknow, Uttar Pradesh. I am
          a dedicated and detail-oriented Full Stack Web Developer skilled in
          Javascript, HTML, CSS, and MERN stack. Has experience in building
          individual and group projects with 1200+ hours of coding and
          problem-solving in DSA.
        </Text>
      </Square>
    </Box>
  );
};

export default AboutMe;
