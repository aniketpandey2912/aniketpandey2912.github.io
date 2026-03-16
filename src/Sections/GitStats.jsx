import { Box, Heading, Image, Link } from "@chakra-ui/react";
import Calendar from "./GitCalender";
import { SITE_INFO } from "../config/theme";
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
      py={{ base: "60px", sm: "70px", md: "80px", lg: "100px" }}
      px={{ base: "12px", sm: "16px", md: "24px" }}
      fontFamily={"sans-serif"}
    >
      <Heading
        textAlign="center"
        mb={{ base: "12px", sm: "18px" }}
        size="lg"
        color={colors.text}
      >
        Github
      </Heading>
      <Box
        // className="git"
        align="center"
        display="flex"
        flexDirection="column"
        rowGap={{ base: "20px", sm: "25px", md: "30px" }}
        w="100%"
      >
        <Box
          // border="1px solid red"
          textAlign={{ base: "center", sm: "center" }}
          m="auto"
          w="100%"
          overflowX="auto"
        >
          <Calendar />
        </Box>

        {/* Grid container for stats - responsive */}
        <Box
          display="grid"
          gridTemplateColumns="1fr"
          autoRows="auto"
          gap={{ base: "4px", sm: "6px", md: "8px" }}
          w="100%"
          px={{ base: "0", sm: "12px", md: "40px" }}
          maxW="100%"
        >
          <Box display="flex" justifyContent="center" w="100%">
            <Image
              align="left"
              src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&show_icons=true&locale=en&layout=compact&theme=react&hide_border=true&bg_color=0D1117`}
              alt={githubUsername}
              w="100%"
              maxW={{ base: "320px", sm: "350px", md: "400px" }}
              m="auto"
            />
          </Box>

          <Box display="flex" justifyContent="center" w="100%">
            <Image
              align="center"
              marginTop="5px"
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117`}
              alt={githubUsername}
              w="100%"
              maxW={{ base: "320px", sm: "350px", md: "400px" }}
              m="auto"
            />
          </Box>

          <Box display="flex" justifyContent="center" w="100%">
            <Image
              align="center"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&hide_border=true&theme=react&hide_border=true&bg_color=0D1117`}
              alt={githubUsername}
              w="100%"
              maxW={{ base: "320px", sm: "350px", md: "400px" }}
              m="auto"
            />
          </Box>

          <Box display="flex" justifyContent="center" w="100%">
            <Link href={`https://github.com/${githubUsername}`} w="100%">
              <Image
                alt="Activity Graph"
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true`}
                w="100%"
                maxW={{ base: "320px", sm: "350px", md: "400px" }}
                m="auto"
              />
            </Link>
          </Box>

          <Box display="flex" justifyContent="center" w="100%">
            <Link href={`https://github.com/${githubUsername}`} w="100%">
              <Image
                align="center"
                src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${githubUsername}&theme=dracula`}
                alt="Profile Summary"
                w="100%"
                maxW={{ base: "320px", sm: "350px", md: "400px" }}
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
