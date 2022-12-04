// import { GrDownload } from "react-icons/gr";
import { Box, Flex, Heading, Image, Square, Text } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  const name = "Aniket Pandey";
  const role = "Full-Stack Web Developer";

  return (
    <Box
      // border="1px solid black"
      h="100%"
      id="about"
      py="100px"
      color="black"
      bgColor="#474E68"
    >
      <Heading
        textAlign="center"
        mb="50px"
        fontSize="6xl"
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        About Me
      </Heading>

      {/* Description box */}
      <Square
        size={{ base: "90%", sm: "80%", md: "70%", lg: "40%" }}
        m="auto"
        display="flex"
        flexDirection="column"
        px="1%"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bgColor="#474E68"
      >
        {/* <Heading textAlign="left">Hi there,</Heading> */}
        <Text
          letterSpacing="2px"
          fontSize={{
            base: "14px",
            sm: "17px",
            md: "20px",
            lg: "22px",
          }}
          fontWeight="800"
          textAlign="justify"
          color="black"
          fontFamily="monospace"
        >
          Hi there, My name is{" "}
          <Text
            display="inline"
            fontSize={{
              base: "14px",
              sm: "17px",
              md: "20px",
              lg: "22px",
            }}
            color="brown"
          >
            {" " + name + " "}
          </Text>{" "}
          and I am a dedicated and detail-oriented
          <Text
            display="inline"
            fontSize={{
              base: "14px",
              sm: "17px",
              md: "20px",
              lg: "22px",
            }}
            color="brown"
          >
            {" " + role + " "}
          </Text>
          skilled in{" "}
          <Text
            display="inline"
            fontSize={{
              base: "14px",
              sm: "17px",
              md: "20px",
              lg: "22px",
            }}
            color="brown"
          >
            MERN stack
          </Text>
          . Built individual and group projects, <i>1200hrs+</i> of coding and
          problem solving in DSA. Eager to apply concepts to action.
        </Text>
      </Square>
    </Box>
  );
};

export default AboutMe;
