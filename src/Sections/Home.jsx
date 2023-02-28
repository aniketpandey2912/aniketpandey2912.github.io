import { Box, Flex, Heading, Hide, Image, Show } from "@chakra-ui/react";
import React from "react";
import { ResumeButton } from "../Components/MyButton";

const Home = () => {
  return (
    <Box
      border="none"
      h="auto"
      py="100px"
      id="home"
      bgColor="#404258" /*w="100%"*/
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="18px" size="lg" color="white">
        Home
      </Heading>

      {/* Appearing text */}
      <Heading as="h1" size="sm">
        <Image
          src="https://readme-typing-svg.demolab.com/?lines=Hi! My name is Aniket Pandey; I am a Full-Stack%20Web%20Developer 👨🏻‍💻; Curious%20to%20learn%20new%20things !&font=Fira%20Code&center=true&width=440&height=45&color=#37bcf7&vCenter=true&size=20&pause=1000"
          m="auto"
        />
      </Heading>

      <Flex
        // border="1px solid red"
        justifyContent="center"
        alignItems="center"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        // bg="pink"
        w={{ base: "100%", md: "80%" }}
        m="auto"
      >
        {/* Profile Pic */}
        <Box
          display="flex"
          flexDirection="column"
          columnGap="25px"
          w={{ base: "80%", sm: "71%", md: "71%", lg: "30%" }}
          h={{ base: "150px", sm: "200px", md: "300px", lg: "350px" }}
          bg="black"
          boxShadow="outer"
          p={{ base: "0", sm: "6", md: "6", lg: "6" }}
        >
          <Image
            src="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ProfilePic3.jpeg?raw=true"
            alt="prof-avatar"
            h={{ base: "140px", sm: "160px", md: "180px", lg: "220px" }}
            m="10px auto"
            borderRadius="50%"
          />

          {/* Resume button md and above screen size */}
          <Show above="md">
            <Box
              w={{ base: "none", sm: "none", md: "40%", lg: "80%" }}
              m="auto"
              textAlign="center"
            >
              <ResumeButton />
            </Box>
          </Show>
        </Box>

        {/* MERN Image */}
        <Box w={{ base: "80%", sm: "71%", md: "71%", lg: "50%" }}>
          <Image
            src="https://codesandbox.io/api/v1/sandboxes/171d3/screenshot.png"
            h={{ base: "150px", sm: "170px", md: "220px", lg: "350px" }}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
            m="auto"
          />
        </Box>

        {/* resume btn for small creen */}
        <Hide above="md">
          <Box
            w={{ base: "80%", sm: "70%", md: "40%", lg: "80%" }}
            m="0px auto auto auto"
            textAlign="center"
          >
            <ResumeButton />
          </Box>
        </Hide>
      </Flex>
    </Box>
  );
};

export default Home;
