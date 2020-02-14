import React from "react";

import Layout from "../components/layout.js";
import Intro from "../components/Intro";
import About from "../components/About";
import Skill from "../components/Skill";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Transition from "../components/Transition";
import Startup from "../components/Startup";
import Exp from "../components/Exp";
import Edu from "../components/Edu";

import SEO from "../components/seo.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Skill />
    <Exp />
    <Projects />

    <Startup />
  </Layout>
);

export default IndexPage;
