import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import image from "../images/MCfinal.png"
import image2 from "../images/PGarFinal.png"
import image3 from "../images/Qfinal.png"
import image4 from "../images/HBfinal.png"
import YouTube from "react-youtube-embed"
import { Icon, InlineIcon } from "@iconify/react"
import bxsRightArrow from "@iconify/icons-bx/bxs-right-arrow"

import bxsLeftArrow from "@iconify/icons-bx/bxs-left-arrow"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 pr-image"
          src={image}
          style={{ height: "100vh" }}
          alt="First slide"
        />
        <Carousel.Caption>
          <a href="http://movie-central.herokuapp.com" target="_blank">
            <h3 className="overIcon">
              <Icon icon={bxsRightArrow} className="arrow" />
              Movie Central
              <Icon icon={bxsLeftArrow} className="arrow" />
            </h3>
          </a>
          <p>
            This modern and minimalist web app was built using React and it
            utilizes 'The Movie Database' API to gather all essential movie
            information. Some notable features are DARK MODE, Movie Search bar,
            User-based ratings and Google Oauth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="playgroundAR">
          <img
            src={image2}
            className="d-block w-100 pr-image"
            style={{ height: "100vh" }}
          />
          <div className="presentation">
            <YouTube
              id="SBZLzeQz7_U"
              aspectRatio="56.25%"
              prependSrc="https://www.youtube.com/embed/"
              appendSrc=""
            />
          </div>
        </div>

        <Carousel.Caption>
          <a
            href="https://github.com/Feisty-Flintstones/Playground"
            target="_blank"
          >
            <h3 className="overIcon">
              {" "}
              <Icon icon={bxsRightArrow} className="arrow" />
              Playground AR
              <Icon icon={bxsLeftArrow} className="arrow" />
            </h3>
          </a>
          <p>
            This Augmented Reality puzzle game was created using Viro React
            which is built upon React Native. Players are to interact with
            different 3D objects to finish the puzzle. Here's a hint.. grab the
            key and bring it to the lock!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block"
          src={image3}
          className="d-block w-100 pr-image"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <a href="http://qrew.herokuapp.com/" target="_blank">
            <h3 className="overIcon">
              <Icon icon={bxsRightArrow} className="arrow" />Q R E W
              <Icon icon={bxsLeftArrow} className="arrow" />
            </h3>
          </a>
          <p>
            This Progressive Web App (PWA) is a product of a 3 day Hackathon
            within Fullstack Academy. It is an event manager and task assigner
            that was inspired by the many events I volunteer in. It has an event
            calendar and chat functionality so you can stay up to date with your
            'crew'.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image4}
          className="d-block w-100 pr-image"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <a
            href="https://halfbaked-graceshopper.herokuapp.com"
            target="_blank"
          >
            <h3 className="overIcon">
              <Icon icon={bxsRightArrow} className="arrow" />
              Half-Baked goods
              <Icon icon={bxsLeftArrow} className="arrow" />
            </h3>
          </a>
          <p>
            An E-commerce web application that utilizes all the technologies
            we've learned at Fullstack Academy. It is built using React and
            Redux was used as a centralized state manager. Express was used to
            create our API routes. Postgres manages the relational database.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
