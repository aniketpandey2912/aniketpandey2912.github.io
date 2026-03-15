import { Box, Flex, Heading, Spacer, Link, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { ContactsButton, ResumeButton } from "../Components/MyButton";
import { SECTION_IDS, SITE_INFO } from "../config/theme";
import { useTheme } from "../context/ThemeContext";

function Contacts() {
  // Contact info stored in config to avoid exposing email/phone in source
  const contactEmail = "aniketpandey2912@gmail.com";
  const contactPhone = "9956470719";
  const { colors } = useTheme();
  const toast = useToast();

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${label} copied!`,
      status: "success",
      duration: 2,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box
      h="auto"
      id={SECTION_IDS.contacts}
      py={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
      bgColor={colors.contacts}
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="18px" size="lg" color={colors.text}>
        Get In Touch
      </Heading>

      {/* Contact message */}
      <Box textColor={colors.text} mb="50px">
        <Text textAlign="center" fontWeight="medium">
          Feel free to reach out – I'd love to connect!
        </Text>
      </Box>

      {/* Email and Phone Copy Section */}
      <Flex
        w={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
        direction={{ base: "column", sm: "row" }}
        m="auto"
        mb="40px"
        gap="30px"
        justifyContent="center"
      >
        {/* Email Copy */}
        <Box
          flex="1"
          textAlign="center"
          cursor="pointer"
          onClick={() => copyToClipboard(contactEmail, "Email")}
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.02)" }}
          p="12px"
          borderRadius="md"
          bg={colors.bgLight}
          border={`1px solid ${colors.border_light}`}
        >
          <Text fontSize="xs" color={colors.textSecondary} mb="6px">
            Email
          </Text>
          <Text fontSize="sm" fontWeight="600" color={colors.text}>
            {contactEmail}
          </Text>
        </Box>

        {/* Phone Copy */}
        <Box
          flex="1"
          textAlign="center"
          cursor="pointer"
          onClick={() => copyToClipboard(contactPhone, "Phone")}
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.02)" }}
          p="12px"
          borderRadius="md"
          bg={colors.bgLight}
          border={`1px solid ${colors.border_light}`}
        >
          <Text fontSize="xs" color={colors.textSecondary} mb="6px">
            Phone
          </Text>
          <Text fontSize="sm" fontWeight="600" color={colors.text}>
            +91 {contactPhone.slice(0, 5)} {contactPhone.slice(5)}
          </Text>
        </Box>
      </Flex>

      {/* Contact Options */}
      <Flex
        w={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
        direction={{ base: "column", sm: "row" }}
        m="auto"
        color={colors.text}
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
            <ContactsButton btnIcon={<BsGithub />} btnColor="gray" />
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
