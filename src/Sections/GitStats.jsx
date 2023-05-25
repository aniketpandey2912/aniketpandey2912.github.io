import { Box, Heading, Image, Link } from "@chakra-ui/react";
import Calendar from "./GitCalender";

const GitStats = () => {
  return (
    <Box
      className="gitcont"
      bgColor="#404258"
      color="white"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      h="auto"
      // w="100%"
      py="100px"
      fontFamily={"sans-serif"}
    >
      <Heading textAlign="center" mb="18px" size="lg" color="white">
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
            src="https://github-readme-stats.vercel.app/api/top-langs?username=aniketpandey2912&show_icons=true&locale=en&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
            alt="aniketpandey2912"
            w={{ base: "80%", sm: "60%", md: "50%", lg: "40%" }}
            m="auto"
          />
        </Box>

        <Box>
          <Image
            align="center"
            marginTop="5px"
            src="https://github-readme-stats.vercel.app/api?username=aniketpandey2912&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117"
            alt="aniketpandey2912"
            w={{ base: "80%", sm: "60%", md: "50%", lg: "40%" }}
            m="auto"
          />
        </Box>
        <Box>
          <Image
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=aniketpandey2912&hide_border=true&theme=react&hide_border=true&bg_color=0D1117"
            alt="aniketpandey2912"
            w={{ base: "80%", sm: "60%", md: "50%", lg: "40%" }}
            m="auto"
          />
        </Box>
        <Box>
          <Link href="https://github.com/aniketpandey2912/github-readme-activity-graph">
            <Image
              alt="Aniket-Pandey Activity Graph"
              src="https://github-readme-activity-graph.vercel.app/graph?username=aniketpandey2912&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true"
              w={{ base: "90%", sm: "60%", md: "50%", lg: "40%" }}
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
