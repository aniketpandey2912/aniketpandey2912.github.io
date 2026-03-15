import { Box, Heading, Image, Link } from "@chakra-ui/react";
import Calendar from "./GitCalender";
import { SITE_INFO, SECTION_IDS } from "../config/theme";
import { useTheme } from "../context/ThemeContext";

const GitStats = () => {
  const theme = useTheme();
  const githubUsername = SITE_INFO.github;

  return (
    <Box
      className="gitcont"
      bgColor={theme.gitStats}
      color={theme.textPrimary}
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
      <Heading textAlign="center" mb="18px" size="lg" color={theme.textPrimary}>
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
        <Box>
          <Image
            align="left"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&show_icons=true&locale=en&layout=compact&theme=react&hide_border=true&bg_color=0D1117`}
            alt={githubUsername}
            w={{ base: "80%", sm: "60%", md: "50%", lg: "40%" }}
            m="auto"
          />
        </Box>

        <Box>
          <Image
            align="center"
            marginTop="5px"
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117`}
            alt={githubUsername}
            w={{ base: "80%", sm: "60%", md: "50%", lg: "40%" }}
            m="auto"
          />
        </Box>
        <Box>
          <Image
            align="center"
            src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${githubUsername}&theme=dracula`}
            alt="GitHub Stats"
            w={{ base: "80%", sm: "60%", md: "50%", lg: "40%" }}
            m="auto"
          />
        </Box>
        <Box>
          <Link href={`https://github.com/${githubUsername}`}>
            <Image
              alt="Activity Graph"
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true`}
              w={{ base: "90%", sm: "60%", md: "50%", lg: "40%" }}
              m="auto"
            />
          </Link>
        </Box>
        <Box>
          <Link href={`https://github.com/${githubUsername}`}>
            <Image
              align="center"
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${githubUsername}&theme=dracula`}
              alt="Profile Summary"
              w={{ base: "90%", sm: "60%", md: "50%", lg: "40%" }}
              m="auto"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default GitStats;
