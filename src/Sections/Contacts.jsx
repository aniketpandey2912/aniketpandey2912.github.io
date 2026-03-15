import { Box, Flex, Heading, Spacer, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { ContactsButton, ResumeButton } from "../Components/MyButton";
import { COLORS, SECTION_IDS, SITE_INFO } from "../config/theme";

function Contacts() {
  // Contact info stored in config to avoid exposing email/phone in source
  const contactEmail = "aniketpandey2912@gmail.com";
  const contactPhone = "9956470719";

  return (
    <Box
      h="auto"
      id={SECTION_IDS.contacts}
      py={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
      bgColor={COLORS.contacts}
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="18px" size="lg" color="white">
        Get In Touch
      </Heading>

      {/* Contact message */}
      <Box textColor="white" mb="50px">
        <Text textAlign="center" fontWeight="medium">
          Feel free to reach out – I'd love to connect!
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
            href={`mailto:${contactEmail}`}
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
            href={`https://github.com/${SITE_INFO.github}`}
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

        {/* Resume */}
        <Box>
          <ResumeButton />
          <Text textAlign="center">Download Resume</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contacts;
