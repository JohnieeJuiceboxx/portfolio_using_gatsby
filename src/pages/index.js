import React from "react"
import { Link } from "react-scroll"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Projects from "./projects"
import Experience from "./experience"
import Scroller from "../components/scroller"
import image from "../images/streetlights.jpg"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
// import "./styles.sass"

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
      <div className="navbar1" style={{}}>
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
        <div class="glitch-wrapper">
          <div class="glitch juicee" data-text="Johniee">
            Johniee
          </div>
          <div class="glitch boxx" data-text="Juiceboxx">
            Juiceboxx
          </div>
          <p className="splash3">
            Fullstack Dev | UX/UI Enthusiast | Guitarist
          </p>
        </div>
        {/* <h1 className="splash1">Johniee</h1>
        <h1 className="splash2">Juiceboxx</h1> */}

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
      <Footer />
    </div>
    <About />

    <Projects />
    <Experience />
  </Layout>
)

export default IndexPage
