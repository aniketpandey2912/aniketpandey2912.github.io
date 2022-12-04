
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import AboutMe from "./Sections/AboutMe";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contacts from "./Sections/Contacts";
import Resume from "./Sections/Resume";
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      {/* <Resume /> */}
    </Box>
  );
}

export default App;
