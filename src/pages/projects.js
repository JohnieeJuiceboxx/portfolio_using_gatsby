import React from "react"
import ControlledCarousel from "../components/carousel"

const Projects = () => (
  <div
    id="projects"
    style={{
      background: "rgb(98,98,98)",
      background:
        "linear-gradient(0deg, rgba(98,98,98,1) 0%, rgba(74,72,67,1) 25%, rgba(10,23,31,1) 100%)",
      height: "100vh",
    }}
  >
    {/* <h1 className="name">This be my projects yao</h1> */}
    <ControlledCarousel />
  </div>
)

export default Projects
