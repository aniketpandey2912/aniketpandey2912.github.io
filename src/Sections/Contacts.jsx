import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useToast,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { MdContentCopy, MdDone } from "react-icons/md";
import { ContactsButton, ResumeButton } from "../Components/MyButton";
import { SECTION_IDS, SITE_INFO } from "../config/theme";
import { useTheme } from "../context/ThemeContext";

function Contacts() {
  // Contact info stored in config to avoid exposing email/phone in source
  const contactEmail = "aniketpandey2912@gmail.com";
  const contactPhone = "9956470719";
  const { colors } = useTheme();
  const toast = useToast();
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const copyToClipboard = (text, label, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: `${label} copied!`,
      status: "success",
      duration: 2,
      isClosable: true,
      position: "top",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      h="auto"
      id={SECTION_IDS.contacts}
      py={{ base: "50px", sm: "60px", md: "70px", lg: "80px" }}
      bgColor={colors.contacts}
      fontFamily={"sans-serif"}
    >
      <Heading
        textAlign="center"
        mb={{ base: "12px", sm: "18px" }}
        size="lg"
        color={colors.text}
      >
        Get In Touch
      </Heading>

      {/* Contact message */}
      <Box
        textColor={colors.text}
        mb={{ base: "30px", sm: "40px", md: "50px" }}
      >
        <Text
          textAlign="center"
          fontWeight="medium"
          fontSize={{ base: "sm", sm: "md" }}
        >
          Feel free to reach out – I&apos;d love to connect!
        </Text>
      </Box>

      {/* Email and Phone Copy Section */}
      <Flex
        w={{ base: "95%", sm: "85%", md: "70%", lg: "60%" }}
        direction={{ base: "column", sm: "row" }}
        m="auto"
        mb={{ base: "30px", sm: "40px", md: "50px" }}
        gap={{ base: "16px", sm: "24px", md: "30px" }}
        justifyContent="center"
      >
        {/* Email Copy */}
        <Box
          flex="1"
          cursor="pointer"
          onClick={() => copyToClipboard(contactEmail, "Email", setCopiedEmail)}
          transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
          p={{ base: "14px", sm: "16px", md: "18px" }}
          borderRadius="lg"
          bg={colors.surface}
          border={`2px solid ${colors.border}`}
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            inset: "0",
            bg: `linear-gradient(135deg, ${colors.primary}20 0%, transparent 100%)`,
            opacity: 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
          _hover={{
            transform: "translateY(-4px) scale(1.02)",
            borderColor: colors.primary,
            boxShadow: `0 8px 24px ${colors.primary}30`,
            _before: {
              opacity: 1,
            },
          }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minH="100px"
        >
          <Flex justify="space-between" align="flex-start" mb="8px">
            <Text
              fontSize={{ base: "xs", sm: "sm" }}
              color={colors.textSecondary}
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="0.5px"
            >
              Email
            </Text>
            <Icon
              as={copiedEmail ? MdDone : MdContentCopy}
              color={copiedEmail ? colors.primary : colors.textSecondary}
              w={{ base: "16px", sm: "18px" }}
              h={{ base: "16px", sm: "18px" }}
              transition="all 0.2s ease"
            />
          </Flex>
          <Text
            fontSize={{ base: "xs", sm: "sm" }}
            fontWeight="600"
            color={colors.text}
            noOfLines={2}
            wordBreak="break-word"
          >
            {contactEmail}
          </Text>
        </Box>

        {/* Phone Copy */}
        <Box
          flex="1"
          cursor="pointer"
          onClick={() => copyToClipboard(contactPhone, "Phone", setCopiedPhone)}
          transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
          p={{ base: "14px", sm: "16px", md: "18px" }}
          borderRadius="lg"
          bg={colors.surface}
          border={`2px solid ${colors.border}`}
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            inset: "0",
            bg: `linear-gradient(135deg, ${colors.primary}20 0%, transparent 100%)`,
            opacity: 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
          _hover={{
            transform: "translateY(-4px) scale(1.02)",
            borderColor: colors.primary,
            boxShadow: `0 8px 24px ${colors.primary}30`,
            _before: {
              opacity: 1,
            },
          }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minH="100px"
        >
          <Flex justify="space-between" align="flex-start" mb="8px">
            <Text
              fontSize={{ base: "xs", sm: "sm" }}
              color={colors.textSecondary}
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="0.5px"
            >
              Phone
            </Text>
            <Icon
              as={copiedPhone ? MdDone : MdContentCopy}
              color={copiedPhone ? colors.primary : colors.textSecondary}
              w={{ base: "16px", sm: "18px" }}
              h={{ base: "16px", sm: "18px" }}
              transition="all 0.2s ease"
            />
          </Flex>
          <Text
            fontSize={{ base: "xs", sm: "sm" }}
            fontWeight="600"
            color={colors.text}
          >
            +91 {contactPhone.slice(0, 5)} {contactPhone.slice(5)}
          </Text>
        </Box>
      </Flex>

      {/* Contact Options */}
      <Flex
        w={{ base: "95%", sm: "85%", md: "70%", lg: "60%" }}
        direction={{ base: "column", sm: "row" }}
        m="auto"
        color={colors.text}
        gap={{ base: "12px", sm: "12px", md: "16px", lg: "20px" }}
        justify={{ base: "center", sm: "space-between" }}
      >
        {/* Email */}
        <Box flex="1" minW={{ base: "100%", sm: "auto" }}>
          <Link
            href={`mailto:${contactEmail}`}
            target="_blank"
            w="100%"
            _hover={{ textDecoration: "none" }}
          >
            <ContactsButton btnIcon={<TfiEmail />} btnColor="red" />
            <Text textAlign="center" fontSize={{ base: "xs", sm: "sm" }} mt="2">
              E-mail
            </Text>
          </Link>
        </Box>

        {/* Github */}
        <Box flex="1" minW={{ base: "100%", sm: "auto" }}>
          <Link
            href={`https://github.com/${SITE_INFO.github}`}
            target="_blank"
            w="100%"
            _hover={{ textDecoration: "none" }}
          >
            <ContactsButton btnIcon={<BsGithub />} btnColor="gray" />
            <Text textAlign="center" fontSize={{ base: "xs", sm: "sm" }} mt="2">
              Github
            </Text>
          </Link>
        </Box>

        {/* Linkedin */}
        <Box flex="1" minW={{ base: "100%", sm: "auto" }}>
          <Link
            href="https://www.linkedin.com/in/aniket-pandey2912/"
            target="_blank"
            w="100%"
            _hover={{ textDecoration: "none" }}
          >
            <ContactsButton btnIcon={<SlSocialLinkedin />} btnColor="blue" />
            <Text textAlign="center" fontSize={{ base: "xs", sm: "sm" }} mt="2">
              LinkedIn
            </Text>
          </Link>
        </Box>

        {/* Resume */}
        <Box flex="1" minW={{ base: "100%", sm: "auto" }}>
          <ResumeButton />
          <Text textAlign="center" fontSize={{ base: "xs", sm: "sm" }} mt="2">
            Download Resume
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contacts;
