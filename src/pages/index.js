import React from "react"
// import { Link } from "gatsby"
import { Link } from "react-scroll"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "./about"
import Projects from "./projects"
import Experience from "./experience"
import Scroller from "../components/scroller"
import image from "../images/streetlights.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      id="index"
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="navbar"
        style={{
          width: "100%",
          position: "fixed",
          top: "0",
          textAlign: "right",
        }}
      >
        <Link
          activeClass="active"
          to="index"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ marginRight: "20px" }}
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ marginRight: "20px" }}
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ marginRight: "20px" }}
        >
          PROJECTS
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ marginRight: "20px" }}
        >
          EXPERIENCE
        </Link>{" "}
      </div>
      <div className="splash-div">
        <h1 className="splash1">Johniee</h1>
        <h1 className="splash2">Juiceboxx</h1>
        <p className="splash3">Fullstack Dev | UX/UI Enthusiast | Guitarist</p>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ marginRight: "20px" }}
        >
          <div className="scroller">
            <Scroller />
          </div>
        </Link>
      </div>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </div>
    <About />
    <Projects />
    <Experience />
  </Layout>
)

export default IndexPage
