import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import image from "../images/MCfinal.png"

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
          className="d-block w-100"
          src={image}
          style={{ height: "100vh" }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Movie Central</h3>
          <p>
            This modern and minimalist web app built using React utilizes 'The
            Movie Database' API. To gather all essential movie information. Some
            notable features are DARK MODE, Movie Search bar, User-based ratings
            and Google Oauth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image}
          style={{ height: "100vh", justifyContent: "center" }}
        />

        <Carousel.Caption>
          <h3>Playground AR</h3>
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
          src={image}
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <h3>Q R E W</h3>
          <p>
            This Progressive Web App (PWA) is a product of a 3 day Hackathon
            within Fullstack Academy. It is an event manager and task assigner
            that was inspired by the many events I belong to. It has an event
            calendar and chat functionality.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block"
          src={image}
          style={{ height: "100vh" }}
        />
        <br />

        <Carousel.Caption>
          <h3>Half-Baked goods</h3>
          <p>
            An E-commerce web application that utilizes all the technologies
            we've learned at Fullstack Academy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
