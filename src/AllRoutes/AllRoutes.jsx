import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../Sections/AboutMe";
import Contacts from "../Sections/Contacts";
import Home from "../Sections/Home";
import Projects from "../Sections/Projects";
import Resume from "../Sections/Resume";
import Skills from "../Sections/Skills";

function AllRoutes() {
  return (
    <Routes>
      <Route exact path="/home" component={<Home />}>
        Home
      </Route>
      <Route exact path="/about" component={<AboutMe />}>
        About Me
      </Route>
      <Route exact path="/skills" component={<Skills />}>
        Skills
      </Route>
      <Route exact path="/projects" component={<Projects />}>
        Projects
      </Route>
      <Route exact path="/contacts" component={<Contacts />}>
        Contacts
      </Route>
      <Route exact path="/resume" component={<Resume />}>
        Resume
      </Route>
    </Routes>
  );
}

export default AllRoutes;
