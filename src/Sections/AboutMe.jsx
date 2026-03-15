import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Divider,
  Link,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { SECTION_IDS, SITE_INFO } from "../config/theme";
import { useTheme } from "../context/ThemeContext";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  const { colors } = useTheme();
  return (
    <Box
      h="auto"
      id={SECTION_IDS.about}
      py="100px"
      color={colors.text}
      bgColor={colors.about}
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="50px" size="lg" color={colors.text}>
        About Me
      </Heading>

      <VStack
        w={{ base: "90%", sm: "85%", md: "75%", lg: "65%" }}
        m="auto"
        spacing="40px"
      >
        {/* Bio Section */}
        <Box
          p="8"
          rounded="lg"
          bgColor={colors.surface}
          borderWidth="1px"
          borderColor={colors.border}
          boxShadow={`0 4px 20px ${colors.primary}15`}
        >
          <VStack spacing="4" align="start">
            <Heading size="md" color={colors.primary}>
              👋 Hi, I'm Aniket Pandey
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="1.8"
              color={colors.text}
            >
              I'm a{" "}
              <span style={{ color: colors.primary, fontWeight: "bold" }}>
                Software Engineer
              </span>{" "}
              from{" "}
              <span style={{ fontWeight: "500" }}>Lucknow, Uttar Pradesh</span>,
              with a passion for building scalable, high-performance web
              applications. With{" "}
              <span style={{ color: colors.primary, fontWeight: "bold" }}>
                2+ years
              </span>{" "}
              of professional experience, I've contributed to multiple
              enterprise-level platforms that serve thousands of users.
            </Text>
          </VStack>
        </Box>

        {/* Core Competencies */}
        <Box
          p="8"
          rounded="lg"
          bgColor={colors.surface}
          borderWidth="1px"
          borderColor={colors.border}
          boxShadow={`0 4px 20px ${colors.primary}15`}
          w="100%"
        >
          <VStack spacing="6" align="start" w="100%">
            <HStack spacing="3">
              <Box color={colors.primary} fontSize="lg">
                <FaCode />
              </Box>
              <Heading size="md" color={colors.primary}>
                Core Competencies
              </Heading>
            </HStack>

            <VStack spacing="4" align="start" w="100%">
              <Box>
                <Text fontWeight="600" color={colors.text} mb="2">
                  Frontend Architecture
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={colors.textSecondary}
                >
                  Expert in Angular & TypeScript. Developing scalable,
                  maintainable frontend solutions with focus on performance and
                  user experience.
                </Text>
              </Box>

              <Box>
                <Text fontWeight="600" color={colors.text} mb="2">
                  Backend Integration
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={colors.textSecondary}
                >
                  Proficient with REST APIs, Node.js & Express.js. Strong
                  experience integrating frontend with backend services for
                  seamless data flow.
                </Text>
              </Box>

              <Box>
                <Text fontWeight="600" color={colors.text} mb="2">
                  Enterprise Platforms
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={colors.textSecondary}
                >
                  Developed monitoring systems, supply chain tools, and
                  automation platforms. Experienced in Agile methodologies and
                  cross-functional collaboration.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Box>

        {/* Highlights */}
        <Box w="100%">
          <VStack spacing="3" align="start">
            <HStack spacing="3">
              <Box color={colors.primary} fontSize="lg">
                <FaBriefcase />
              </Box>
              <Heading size="md" color={colors.primary}>
                What I Bring
              </Heading>
            </HStack>

            <Grid
              w="100%"
              gridTemplateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap="3"
            >
              {[
                "Problem Solving",
                "Clean Code",
                "Team Collaboration",
                "Performance Optimization",
                "API Design",
                "Agile Development",
              ].map((skill) => (
                <Box
                  key={skill}
                  px="3"
                  py="2"
                  rounded="lg"
                  bgColor={`${colors.primary}15`}
                  borderWidth="1px"
                  borderColor={colors.primary}
                  transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  cursor="pointer"
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
                    transform: "translateY(-6px) scale(1.03)",
                    boxShadow: `0 8px 24px ${colors.primary}30`,
                    borderColor: colors.primary,
                    _before: {
                      opacity: 1,
                    },
                  }}
                  _active={{ transform: "translateY(-2px)" }}
                >
                  <Text fontSize="xs" fontWeight="600" color={colors.primary} textAlign="center">
                    {skill}
                  </Text>
                </Box>
              ))}
            </Grid>
          </VStack>
        </Box>

        {/* Call to Action */}
        <Divider borderColor={colors.border} />

        <Link
          as="a"
          href="#contacts"
          _hover={{ textDecoration: "none" }}
          w="100%"
        >
          <Box
            p="6"
            rounded="lg"
            bgColor={`${colors.primary}10`}
            borderLeftWidth="4px"
            borderLeftColor={colors.primary}
            w="100%"
            cursor="pointer"
            transition="all 0.3s ease"
            _hover={{
              bgColor: `${colors.primary}15`,
              boxShadow: `0 4px 20px ${colors.primary}25`,
              transform: "translateX(4px)",
            }}
          >
            <VStack spacing="3" align="start">
              <Heading size="sm" color={colors.primary}>
                Let's Connect!
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color={colors.text}>
                I'm always interested in discussing new projects, creative
                ideas, or any opportunities to contribute to impactful
                solutions. Feel free to reach out!
              </Text>
              <Link
                as="a"
                href="#contacts"
                color={colors.primary}
                fontWeight="600"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                Contact →
              </Link>
            </VStack>
          </Box>
        </Link>
      </VStack>
    </Box>
  );
};

export default AboutMe;
