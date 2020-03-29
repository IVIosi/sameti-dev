import React from "react"

import MoonIcon from "../static/moon.svg"
import SunIcon from "../static/sun.svg"

export default function ToggleDarkMode() {
  const initialTheme = localStorage.getItem("theme") || "light"
  const setTheme = theme => {
    localStorage.setItem("theme", theme)
    document.querySelector("body").setAttribute("class", theme)
  }

  setTheme(initialTheme)

  const handleToggle = e => {
    setTheme(!e.target.checked ? "light" : "dark")
  }
  return (
    <label className="switch">
      <div className="switch__icon">
        <MoonIcon />
        <SunIcon />
      </div>
      <input
        defaultChecked={initialTheme === "dark"}
        type="checkbox"
        onChange={handleToggle}
      />
      <span className="switch__slider" />
    </label>
  )
}
