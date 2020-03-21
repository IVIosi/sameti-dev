import React from "react"
import { Link } from "gatsby"

import ExperiencesIcon from "../static/list.svg"
import AboutIcon from "../static/info.svg"
import SkillIcon from "../static/award.svg"
import ContactIcon from "../static/phone.svg"
import ProjectsIcon from "../static/codepen.svg"

export default function Content() {
  const menu = [
    {
      name: "About",
      logo: AboutIcon,
      link: "/",
    },
    {
      name: "Skills",
      logo: SkillIcon,
      link: "/skills",
    },
    {
      name: "Experiences",
      logo: ExperiencesIcon,
      link: "/experiences",
    },
    {
      name: "Projects",
      logo: ProjectsIcon,
      link: "/projects",
    },
    {
      name: "Contact",
      logo: ContactIcon,
      link: "/contact",
    },
  ]

  return (
    <nav className="navbar">
      <ul>
        {menu.map(item => {
          const IconName = item.logo
          return (
            <li className="navbar__item" key={item.name}>
              <Link to={item.link}>
                <IconName className="navbar__item-icon" />
                <div className="navbar__item-tooltip">{item.name}</div>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
