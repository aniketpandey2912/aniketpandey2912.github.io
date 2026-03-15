import { Box, Heading, Image, Link } from "@chakra-ui/react";
import Calendar from "./GitCalender";
import { SITE_INFO, SECTION_IDS } from "../config/theme";
import { useTheme } from "../context/ThemeContext";

const GitStats = () => {
  const githubUsername = SITE_INFO.github;
  const { colors } = useTheme();

  return (
    <Box
      className="gitcont"
      bgColor={colors.gitStats}
      color={colors.text}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      h="auto"
      py="100px"
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="18px" size="lg" color={colors.text}>
        Github
      </Heading>
      <Box
        // className="git"
        align="center"
        display="flex"
        flexDirection="column"
        rowGap="30px"
      >
        <Box
          // border="1px solid red"
          textAlign={{ base: "left", sm: "center" }}
          m="auto"
        >
          <Calendar />
        </Box>

        {/* Grid container for stats - 2 per row */}
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          autoRows="1fr"
          gap="30px"
          w="100%"
          px={{ base: "20px", md: "40px" }}
        >
          <Box display="flex" justifyContent="center">
            <Image
              align="left"
              src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&show_icons=true&locale=en&layout=compact&theme=react&hide_border=true&bg_color=0D1117`}
              alt={githubUsername}
              w="100%"
              maxW="400px"
              m="auto"
            />
          </Box>

          <Box display="flex" justifyContent="center">
            <Image
              align="center"
              marginTop="5px"
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117`}
              alt={githubUsername}
              w="100%"
              maxW="400px"
              m="auto"
            />
          </Box>

          <Box display="flex" justifyContent="center">
            <Image
              align="center"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&hide_border=true&theme=react&hide_border=true&bg_color=0D1117`}
              alt={githubUsername}
              w="100%"
              maxW="400px"
              m="auto"
            />
          </Box>

          <Box display="flex" justifyContent="center">
            <Link href={`https://github.com/${githubUsername}`}>
              <Image
                alt="Activity Graph"
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true`}
                w="100%"
                maxW="400px"
                m="auto"
              />
            </Link>
          </Box>

          <Box display="flex" justifyContent="center">
            <Link href={`https://github.com/${githubUsername}`}>
              <Image
                align="center"
                src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${githubUsername}&theme=dracula`}
                alt="Profile Summary"
                w="100%"
                maxW="400px"
                m="auto"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GitStats;
