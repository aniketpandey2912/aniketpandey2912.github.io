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
        {/* <Heading textAlign="left">Hi there,</Heading> */}
        <Text
          // letterSpacing="2px"
          fontSize={{
            base: "22px",
            sm: "24px",
            md: "27px",
            lg: "30px",
          }}
          fontWeight="800"
          textAlign="justify"
          // color="whiteAlpha.700"
          color="gray.500"
          fontFamily="monospace"
        >
          Hi there, My name is{" "}
          <Text
            display="inline"
            fontSize={{
              base: "22px",
              sm: "24px",
              md: "27px",
              lg: "30px",
            }}
            color="black"
          >
            {" " + name + " "}
          </Text>{" "}
          and I am from Lucknow, Uttar Pradesh. I am a dedicated and
          detail-oriented
          <Text
            display="inline"
            fontSize={{
              base: "22px",
              sm: "24px",
              md: "27px",
              lg: "30px",
            }}
            color="black"
          >
            {" " + role + " "}
          </Text>
          skilled in{" "}
          <Text
            display="inline"
            fontSize={{
              base: "22px",
              sm: "24px",
              md: "27px",
              lg: "30px",
            }}
            color="black"
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
