import { Box, Heading, Square, Text } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  const name = "Aniket Pandey";

  return (
    <Box
      // border="1px solid black"
      h="auto"
      // w="100%"
      id="about"
      py="100px"
      color="black"
      bgColor="#474E68"
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="18px" size="lg" color="white">
        About Me
      </Heading>

      {/* Description box */}
      <Square
        w={{ base: "80%", sm: "70%", md: "60%", lg: "50%" }}
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
            base: "16px",
            sm: "17px",
            md: "19px",
            lg: "21px",
          }}
          color="white"
        >
          Hi there, my name is {name} and I am from Lucknow, Uttar Pradesh. I am
          a Software Engineer with 2+ years of experience building scalable web
          applications using Angular, TypeScript, and REST APIs. Experienced in
          developing enterprise-level platforms including monitoring systems,
          supply chain tools, and automation platforms. Skilled in frontend
          architecture, API integration, and collaborating with backend teams to
          deliver high-performance applications. Strong problem-solving
          abilities with hands-on experience working in Agile development
          environments.
        </Text>
      </Square>
    </Box>
  );
};

export default AboutMe;
