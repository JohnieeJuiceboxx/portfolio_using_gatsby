import React, { Component } from "react"

export default class Scroller extends Component {
  render() {
    return (
      <div>
        <div className="clickMe">CLICK ME</div>
        <span
          id="chevron"
          class="iconify"
          data-icon="el-chevron-down"
          data-inline="false"
        ></span>
      </div>
    )
  }
}
