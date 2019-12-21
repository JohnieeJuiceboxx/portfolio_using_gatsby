import React from "react"

const Experience = () => (
  <div
    id="experience"
    style={{
      background: `#0a171f`,
      height: "100vh",
    }}
  >
    <h1 className="exp-main">
      TOOLS<span style={{ color: "#61d3d9" }}>_</span>
    </h1>
    <div className="exp-container">
      <div className="exp-title" style={{ color: "#61d3d9" }}>
        DEVELOPMENT
      </div>
      <div>
        <ul>
          <li>
            Javascript <span style={{ fontSize: ".7em" }}>es6+</span>
          </li>
          <li>NodeJS</li>
          <li>
            Version Control <span style={{ fontSize: ".7em" }}>git</span>
          </li>
          <li>HTML</li>
          <li>
            Task Runners <span style={{ fontSize: ".7em" }}>webpack/babel</span>
          </li>
          <li>Command Line</li>
          <li>CSS</li>
          <li>ReactJS</li>
          <li>Redux</li>
          <li>
            Viro React <span style={{ fontSize: ".7em" }}>ar/vr</span>
          </li>
          <li>React Native</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>Visual Studio Code</li>
        </ul>
      </div>
    </div>

    <div className="exp-container">
      <div className="exp-title" style={{ color: "#61d3d9" }}>
        DESIGN{" "}
      </div>
      <div>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Premiere Pro</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Experience
