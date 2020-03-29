import React from "react"

import MoonIcon from "../static/moon.svg"
import SunIcon from "../static/sun.svg"

export default  class ToggleDarkMode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: "light",
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
      this.setState({
        theme: localTheme
      })
      document.querySelector("body").setAttribute("class", localTheme)
    } else {
      localStorage.setItem("theme", "light")
    }
  }

  handleToggle(e) {
    const newTheme = e.target.checked ? "dark" : "light"
    this.setState({
      theme: newTheme
    })
    localStorage.setItem("theme", newTheme)
    document.querySelector("body").setAttribute("class", newTheme)
  }

  render() {
    return (
      <label className="switch">
        <div className="switch__icon">
          <MoonIcon />
          <SunIcon />
        </div>
        <input
          checked={this.state.theme === "dark"}
          type="checkbox"
          onChange={(e) => this.handleToggle(e)}
        />
        <span className="switch__slider" />
      </label>
    )
  } 
}
