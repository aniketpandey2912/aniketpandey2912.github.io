import { GrDownload } from "react-icons/gr";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Square,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import MyButton from "../Components/MyButton";

const AboutMe = () => {
  const name = "Aniket Pandey";
  const role = "Full-Stack Web Developer";

  // useEffect(()=>{

  // },[])

  return (
    <Box
      border="1px solid black"
      h="100vh"
      id="about"
      py="100px"
      // bg="brown"
      color="black"
      bgGradient="linear(to-r, #E7E6EF,  #009090)"
    >
      <Heading as="h5" size="sm" textAlign="center" mb="0px" color="blue.600">
        Get To Know
      </Heading>
      <Heading textAlign="center" mb="20px" color="blue.600">
        About Me
      </Heading>
      <Flex
        color="white"
        justifyContent="center"
        alignItems="center"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        rowGap="20px"
      >
        {/* Image box */}
        <Square
          display="flex"
          flexDirection={{ base: "row", sm: "row", md: "row", lg: "column" }}
          columnGap="25px"
          bg="none"
          size={{ base: "90%", sm: "80%", md: "70%", lg: "40%" }}
          px="1%"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/107461782?v=4"
            alt="prof-avatar"
            borderRadius="50%"
            h={{ base: "100px", sm: "150px", md: "150px", lg: "230px" }}
          />
          <MyButton />
        </Square>

        {/* Description box */}
        <Square
          bg="none"
          size={{ base: "90%", sm: "80%", md: "70%", lg: "40%" }}
          display="flex"
          flexDirection="column"
          px="1%"
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
      </Flex>
    </Box>
  );
};

export default AboutMe;
