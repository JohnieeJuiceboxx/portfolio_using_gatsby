import React, { useState, useRef } from "react"
import { Icon, InlineIcon } from "@iconify/react"
import linkedinIcon from "@iconify/icons-el/linkedin"
import squaregithubIcon from "@iconify/icons-whh/squaregithub"
import instagramIcon from "@iconify/icons-topcoat/instagram"
import Popover from "react-bootstrap/Popover"
import Overlay from "react-bootstrap/Overlay"
import emailMultipleOutline from "@iconify/icons-mdi/email-multiple-outline"

export default function Footer() {
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const handleClick = event => {
    setShow(!show)
    setTarget(event.target)
  }
  return (
    <div className="social">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/johnvitales" target="_blank">
          <Icon icon={linkedinIcon} />
        </a>
      </div>

      <div className="social-icons">
        <a href="https://www.github.com/johnieejuiceboxx" target="_blank">
          {" "}
          <Icon icon={squaregithubIcon} />
        </a>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/johnieejuiceboxx" target="_blank">
          <Icon icon={instagramIcon} />
        </a>
      </div>

      <div className="social-icons">
        <Icon icon={emailMultipleOutline} onClick={handleClick} />
        <Overlay
          show={show}
          target={target}
          placement="top"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">
              <strong>Let's chat!</strong>
            </Popover.Title>
            <Popover.Content>
              <strong>JohnieeJuiceboxx@gmail.com</strong>
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    </div>
  )
}
