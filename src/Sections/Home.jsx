import { Box, Flex, Heading, Text, VStack, Image, Link, HStack } from "@chakra-ui/react";
import React from "react";
import { ResumeButton } from "../Components/MyButton";
import { SECTION_IDS } from "../config/theme";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { colors, isDarkMode } = useTheme();
  const contactPhone = "9956470719";
  const contactPhoneFormatted = "+91 9956470719";
  const contactEmail = "aniketpandey2912@gmail.com";
  return (
    <Box
      h="auto"
      py={{ base: "40px", sm: "50px", md: "70px", lg: "90px" }}
      id={SECTION_IDS.home}
      bgColor={colors.home}
      fontFamily="sans-serif"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: isDarkMode ? "-50%" : "-30%",
        right: isDarkMode ? "-10%" : "10%",
        width: "400px",
        height: "400px",
        bg: isDarkMode ? "rgba(167,139,250,0.08)" : "rgba(14,165,233,0.05)",
        borderRadius: "50%",
        filter: "blur(60px)",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* Main Content Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: "25px", md: "40px", lg: "50px" }}
        w={{ base: "90%", sm: "85%", md: "90%", lg: "85%" }}
        maxW="1200px"
        m="auto"
        position="relative"
        zIndex={1}
      >
        {/* Profile Picture */}
        <VStack spacing="12px" flexShrink={0} align="center">
          <Box
            position="relative"
            w={{ base: "140px", sm: "160px", md: "180px", lg: "200px" }}
            h={{ base: "140px", sm: "160px", md: "180px", lg: "200px" }}
          >
            {/* Gradient Border Effect */}
            <Box
              position="absolute"
              inset="0"
              borderRadius="50%"
              bg={isDarkMode ? "rgba(167,139,250,0.3)" : "rgba(14,165,233,0.2)"}
              p="3"
            >
              <Image
                src="https://github.com/aniketpandey2912/aniketpandey2912.github.io/blob/master/src/Sections/Images/ProfilePic3.jpeg?raw=true"
                alt="Aniket Pandey"
                borderRadius="50%"
                w="100%"
                h="100%"
                objectFit="cover"
                boxShadow={isDarkMode ? "0 8px 32px rgba(167,139,250,0.2)" : "0 8px 32px rgba(14,165,233,0.15)"}
              />
            </Box>
          </Box>

          {/* Contact Info Below Profile Picture */}
          <HStack
            spacing="12px"
            fontSize={{ base: "xs", sm: "sm" }}
          >
            <Link
              href={`mailto:${contactEmail}`}
              color={colors.primary}
              fontWeight="600"
              _hover={{ textDecoration: "underline" }}
            >
              Email
            </Link>
            <Text color={colors.border}>•</Text>
            <Link
              href={`tel:${contactPhone}`}
              color={colors.primary}
              fontWeight="600"
              _hover={{ textDecoration: "underline" }}
            >
              {contactPhoneFormatted}
            </Link>
          </HStack>
        </VStack>

        {/* Content */}
        <VStack
          spacing={{ base: "12px", sm: "16px", md: "20px" }}
          align="center"
          textAlign="center"
          maxW={{ base: "100%", md: "550px" }}
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="600"
            color={colors.primary}
            textTransform="uppercase"
            letterSpacing="2px"
          >
            Welcome to my portfolio
          </Text>

          <Heading
            as="h1"
            fontSize={{ base: "2xl", sm: "3xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            color={colors.text}
            lineHeight="1.2"
          >
            Hi, I'm <span style={{ color: colors.primary }}>Aniket Pandey</span>
          </Heading>

          <Heading
            as="h2"
            fontSize={{ base: "lg", sm: "xl", md: "lg", lg: "xl" }}
            fontWeight="600"
            color={colors.textSecondary}
          >
            Software Engineer | Angular Developer
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={colors.textTertiary}
            lineHeight="1.6"
          >
            2+ years building enterprise web applications with Angular, TypeScript, and REST APIs. Experienced in scalable platform development, backend integration, and high-performance frontend solutions in Agile environments.
          </Text>

          {/* CTA Button */}
          <Box w={{ base: "70%", sm: "60%", md: "100%", lg: "50%" }} pt="8px">
            <ResumeButton />
          </Box>
        </VStack>
      </Flex>

      {/* Divider */}
      <Box w="50px" h="0.5px" bgColor={colors.border} m="30px auto 0" position="relative" zIndex={1} />

      {/* Stats Section */}
      <Flex
        gap={{ base: "30px", sm: "40px", md: "50px" }}
        justify="center"
        wrap="wrap"
        w={{ base: "90%", sm: "85%", md: "90%", lg: "85%" }}
        maxW="1200px"
        m="auto"
        mt="30px"
        position="relative"
        zIndex={1}
      >
        <VStack spacing="1">
          <Heading as="h3" size="lg" color={colors.primary}>
            5+
          </Heading>
          <Text fontSize="sm" color={colors.textTertiary}>
            Projects
          </Text>
        </VStack>
        <VStack spacing="1">
          <Heading as="h3" size="lg" color={colors.primary}>
            2+
          </Heading>
          <Text fontSize="sm" color={colors.textTertiary}>
            Years Experience
          </Text>
        </VStack>
        <VStack spacing="1">
          <Heading as="h3" size="lg" color={colors.primary}>
            15+
          </Heading>
          <Text fontSize="sm" color={colors.textTertiary}>
            Technologies
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Home;
