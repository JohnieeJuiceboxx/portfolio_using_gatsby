import React from "react"
import { Icon, InlineIcon } from "@iconify/react"
import linkedinIcon from "@iconify/icons-el/linkedin"
import squaregithubIcon from "@iconify/icons-whh/squaregithub"
import instagramIcon from "@iconify/icons-topcoat/instagram"

import emailMultipleOutline from "@iconify/icons-mdi/email-multiple-outline"

export default function Footer() {
  return (
    <div className="social">
      <div className="social-icons">
        <Icon icon={linkedinIcon} />
      </div>

      <div className="social-icons">
        <Icon icon={squaregithubIcon} />
      </div>

      <div className="social-icons">
        <Icon icon={instagramIcon} />
      </div>

      <div className="social-icons">
        <Icon icon={emailMultipleOutline} />
      </div>
    </div>
  )
}
