import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
// import { FaLocationArrow } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { ContactsButton, ResumeButton } from "../Components/MyButton";

function Contacts() {
  return (
    <Box
      border="1px solid black"
      h="100%"
      id="contacts"
      py={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
      bgColor="black"
    >
      <Heading
        textAlign="center"
        mb={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl", lg: "5xl" }}
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        Contacts
      </Heading>

      {/* Contact Options */}
      <Flex
        w={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
        direction={{ base: "column", sm: "row" }}
        m="auto"
        color="whiteAlpha.600"
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
            <Text textAlign="center" fontWeight="extrabold">
              E-mail
            </Text>
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
            <Text textAlign="center" fontWeight="extrabold">
              Github
            </Text>
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
            <Text textAlign="center" fontWeight="extrabold">
              LinkedIn
            </Text>
          </Link>
        </Box>
        <Spacer />

        {/* Reume */}
        <Box>
          <ResumeButton />
          <Text textAlign="center" fontWeight="extrabold">
            Download Resume
          </Text>
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
