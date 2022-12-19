import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import Calendar from "./GitCalender";

const GitStats = () => {
  return (
    <Box
      className="gitcont"
      bgColor="#404258"
      color="whiteAlpha.600"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      h="100%"
      w="100vmax"
      py="100px"
    >
      <Heading
        textAlign="center"
        mb={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl", lg: "5xl" }}
        fontWeight="extrabold"
        color="whiteAlpha.700"
      >
        Github
      </Heading>
      <Box
        className="git"
        align="center"
        display="flex"
        flexDirection="column"
        rowGap="30px"
      >
        <Box>
          <Calendar />
        </Box>
        <Box>
          <Image
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=aniketpandey2912&show_icons=true&locale=en&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
            alt="aniketpandey2912"
            w={{ base: "80%", sm: "80%", md: "70%", lg: "70%" }}
            m="auto"
          />
        </Box>

        <Box>
          <Image
            align="center"
            margin-Top="5px"
            src="https://github-readme-stats.vercel.app/api?username=aniketpandey2912&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117"
            alt="aniketpandey2912"
            w={{ base: "80%", sm: "80%", md: "70%", lg: "70%" }}
            m="auto"
          />
        </Box>
        <Box>
          <Image
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=aniketpandey2912&theme=react&hide_border=true&bg_color=0D1117"
            alt="aniketpandey2912"
            w={{ base: "80%", sm: "80%", md: "70%", lg: "70%" }}
            m="auto"
          />
        </Box>
        <Box>
          <Link href="https://github.com/aniketpandey2912/github-readme-activity-graph">
            <Image
              alt="Aniket-Pandey Activity Graph"
              src="https://github-readme-activity-graph.cyclic.app/graph?username=aniketpandey2912&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true"
              w={{ base: "90%", sm: "90%", md: "70%", lg: "70%" }}
              m="auto"
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://github.com/aniketpandey2912">
            <Image
              align="center"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=aniketpandey2912&theme=dracula"
              alt="img"
              w={{ base: "90%", sm: "90%", md: "70%", lg: "70%" }}
              m="auto"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default GitStats;
