import React, { Component } from "react"
import { Link } from "react-scroll"
import { Icon, InlineIcon } from "@iconify/react"
import chevronDown from "@iconify/icons-fa-solid/chevron-down"

export default class Scroller extends Component {
  render() {
    return (
      <div>
        <div className="clickMe">CLICK ME</div>
        <Icon icon={chevronDown} id="chevron" />
      </div>
    )
  }
}
