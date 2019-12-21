import React from "react"
import { Link } from "react-scroll"
import image from "../images/3d.jpeg"
import Scroller from "../components/scroller"

const About = () => (
  <div
    id="about"
    style={{
      background: `#0a171f`,
      height: "100vh",

      paddingTop: "15%",
      // paddingLeft: "20%",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img src={image} className="profile_pic" />
      </div>
      <div className="about_info">
        <h1 className="name">John Vitales</h1>
        <h5 className="noun"> noun: /dʒɑn/ /viˈta.lis/ </h5>
        <p className="about_p">
          I'm a nursing student turned developer. Growing up, I've always been
          into tech, design and music. Soft-modding almost all my electronics
          from gaming consoles to music players to designing t-shirts and event
          flyers for different organizations. I enrolled in to FullStack Academy
          of Code in New York City to get an immersive experience and learn the
          best practices involving software development, a field that I've been
          curious of for the longest time. I've created many projects while I
          was at Fullstack Academy one of which is an augmented reality mobile
          game! When not in front of a computer, I enjoy noodling on my guitar
          and spending time with my favorite programming partner, Sam, my dog.{" "}
        </p>
      </div>
    </div>
    <Link
      activeClass="active"
      to="projects"
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
)

export default About
