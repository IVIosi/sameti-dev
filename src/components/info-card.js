import React from "react"

import MediumIcon from "../static/medium.svg"
import GithubIcon from "../static/github.svg"
import TwitterIcon from "../static/twitter.svg"
import MailIcon from "../static/mail.svg"
import LinkedinIcon from "../static/linkedin.svg"
import StackOverflowIcon from "../static/stackoverflow.svg"

export default function InfoCard({ gravatar }) {
  const socials = [
    {
      name: "Medium",
      logo: MediumIcon,
      link: "https://medium.com/@IVIosi",
    },
    {
      name: "LinkedIn",
      logo: LinkedinIcon,
      link: "https://www.linkedin.com/in/mostafasameti",
    },
    {
      name: "Email",
      logo: MailIcon,
      link: "mailto:mos.sameti@Gmail.com",
    },
    {
      name: "Twitter",
      logo: TwitterIcon,
      link: "https://twitter.com/mostafa_sameti",
    },
    {
      name: "Stack Overflow",
      logo: StackOverflowIcon,
      link: "https://stackoverflow.com/users/5354147/iviosi",
    },
    {
      name: "GitHub",
      logo: GithubIcon,
      link: "https://github.com/IVIosi",
    },
  ]

  return (
    <aside className="info-card">
      <div className="info-card__avatar">
        <img
          src={`https://www.gravatar.com/avatar/${gravatar}?s=200`}
          alt="Mostafa"
        />
      </div>
      <p className="info-card__name bold">Mostafa Sameti</p>
      <p className="info-card__job">Front-end Developer</p>
      <ul className="info-card__social-list">
        {socials.map(item => {
          const IconName = item.logo
          return (
            <li className="info-card__social-item" key={item.name}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <IconName className="info-card__social-item-icon" />
                <div className="info-card__social-item-tooltip">
                  {item.name}
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
