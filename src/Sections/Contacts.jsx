import { Box, Flex, Heading, Spacer, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
// import { FaLocationArrow } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { ContactsButton, ResumeButton } from "../Components/MyButton";

function Contacts() {
  return (
    <Box
      // border="1px solid black"
      h="auto"
      // w="100%"
      id="contacts"
      py={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
      bgColor="black"
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="18px" size="lg" color="white">
        Contacts
      </Heading>

      {/* Gmail & Mobile number */}
      <Box textColor="white" mb="50px">
        <Text textAlign="center" fontWeight="bold">
          G-mail : aniketpandey2912@gmail.com
        </Text>
        <Text textAlign="center" fontWeight="bold">
          Mobile No. : 9956470719
        </Text>
      </Box>

      {/* Contact Options */}
      <Flex
        w={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
        direction={{ base: "column", sm: "row" }}
        m="auto"
        color="white"
        rowGap="10px"
      >
        {/* Email */}
        <Box>
          <Link
            href="mailto:aniketpandey2912@gmail.com"
            target="_blank"
            w="100%"
            _hover={{ textDecoration: "none" }}
          >
            <ContactsButton btnIcon={<TfiEmail />} btnColor="red" />
            <Text textAlign="center">E-mail</Text>
          </Link>
        </Box>
        <Spacer />

        {/* Github */}
        <Box>
          <Link
            href="https://github.com/aniketpandey2912"
            target="_blank"
            w="100%"
            _hover={{ textDecoration: "none" }}
          >
            <ContactsButton btnIcon={<BsGithub />} btnColor="whiteAlpha" />
            <Text textAlign="center">Github</Text>
          </Link>
        </Box>
        <Spacer />

        {/* Linkedin */}
        <Box>
          <Link
            href="https://www.linkedin.com/in/aniket-pandey2912/"
            target="_blank"
            w="100%"
            _hover={{ textDecoration: "none" }}
          >
            <ContactsButton btnIcon={<SlSocialLinkedin />} btnColor="blue" />
            <Text textAlign="center">LinkedIn</Text>
          </Link>
        </Box>
        <Spacer />

        {/* Reume */}
        <Box>
          <ResumeButton />
          <Text textAlign="center">Download Resume</Text>
        </Box>
      </Flex>

      {/* Messege form */}
      {/* <Box border="2rem solid white">
        <form action="https://formspree.io/f/xyyagelr" method="POST">
          <Input type="text" name="name" id="name" placeholder="Name" />
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Input
            type="text"
            name="projectName"
            id="project"
            placeholder="Project Name"
          />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          />
          <button border="3rem solid pink" color="white">
            Send
          </button>
        </form>
      </Box> */}
    </Box>
  );
}

export default Contacts;
