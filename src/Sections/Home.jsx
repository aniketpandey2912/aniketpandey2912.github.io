import { Box, Flex, Heading, Hide, Image, Show } from "@chakra-ui/react";
import React from "react";
import { ResumeButton } from "../Components/MyButton";

const Home = () => {
  return (
    <Box border="none" h="auto" py="100px" id="home" bgColor="#404258" /*w="100%"*/>
      <Heading
        textAlign="center"
        mb={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl", lg: "5xl" }}
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        Home
      </Heading>

      {/* Appearing text */}
      <Heading as="h1" size="lg">
        <Image
          src="https://readme-typing-svg.demolab.com/?lines=Hi! My name is Aniket Pandey; I am a Full-Stack%20Web%20Developer 👨🏻‍💻; Curious%20to%20learn%20new%20things !&font=Fira%20Code&center=true&width=440&height=45&color=#37bcf7&vCenter=true&size=22&pause=1000"
          m="auto"
        ></Image>
      </Heading>

      <Flex
        // border="1px solid red"
        justifyContent="center"
        alignItems="center"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        // bg="pink"
      >
        {/* Profile Pic */}
        <Box
          display="flex"
          flexDirection="column"
          columnGap="25px"
          w={{ base: "80%", sm: "71%", md: "71%", lg: "30%" }}
          h={{ base: "150px", sm: "200px", md: "350px", lg: "400px" }}
          bg="black"
          boxShadow="outer"
          p={{ base: "0", sm: "6", md: "6", lg: "6" }}
        >
          <Image
            src="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ProfilePic3.jpeg?raw=true"
            alt="prof-avatar"
            h={{ base: "140px", sm: "160px", md: "250px", lg: "300px" }}
            m="10px auto "
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
            h={{ base: "150px", sm: "200px", md: "350px", lg: "400px" }}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
            m="auto"
          />
        </Box>

        {/* resume btn for small creen */}
        <Hide above="md">
          <Box
            w={{ base: "80%", sm: "70%", md: "40%", lg: "80%" }}
            m="10px auto auto auto"
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

// https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ProfilePic3.jpeg?raw=true  // prof-pic - 3 github images

// src="https://pps.whatsapp.net/v/t61.24694-24/315346406_512092940876420_3771335194732394582_n.jpg?ccb=11-4&oh=01_AdSwLM0b-cQFhZJoAPDyVF-WRwidkA8MalTWzvCMiA7d_w&oe=639B1F17" // prof pic -2  -- whatsapp link

// src="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ProfilePic1.jpeg?raw=true" // original prof-pic-1 link
