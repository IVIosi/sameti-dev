import React from "react"

export default function IndexPage() {
  const experiences = [
    {
      start: {
        month: "JAN",
        year: "2020",
      },
      end: {
        month: "Today",
        year: "",
      },
      title: "Lead Front-end Developer",
      company: "FANAP",
      description: `7 months - I joined FANAP corporation (Biggest IT holding in country) as
      senior front-end developer to help company with several products. My focus is on Behnama
      (an app like GENETEC to manage surveillance cameras in buildings) front-end technologies.
      I architect app using React, Redux, Material UI, and JSS. I also lead front-end team and
      mentor junior developers.`,
    },
    {
      start: {
        month: "DEC",
        year: "2018",
      },
      end: {
        month: "JAN",
        year: "2020",
      },
      title: "Front-end Developer",
      company: "Zhaket",
      description: `1 year 1 month - Zhaket is the biggest Wordpress 
      plugins and themes marketplace in Iran. I'm working in Zhaket 
      tech team as a front end developer. Our team trying to design 
      and implement Zhaket new platform.
      Technologies and frameworks used in client side stack consists 
      of vast and different front end technologies, such as React JS, 
      Next JS, Redux, Redux-saga, SASS.
      Our team works based on Agile software development and follows 
      SCRUM set of rules.`,
    },
    {
      start: {
        month: "SEP",
        year: "2017",
      },
      end: {
        month: "DEC",
        year: "2018",
      },
      title: "Front-end Developer",
      company: "ChiCheraa",
      description: `1 year 3 months - ChiCheraa is a startup trying to 
      make online shopping easier by using AI to provide suggestions on what
      digital products you want to buy.
      I was front-end developer and implemented website template based on 
      designs by UX/UI designer.
      I also developed ChiCheraa website as a single page web application 
      powered by ReactJS.`,
    },
    {
      start: {
        month: "AUG",
        year: "2014",
      },
      end: {
        month: "SEP",
        year: "2017",
      },
      title: "Front-end Developer (Part Time)",
      company: "Several...",
      description: `3 years & 1 month - As my university education going to end,
      I found my passion in front-end development. So I tried to find part-time jobs
      and build my career around this subject. During this period I worked in several
      companies as Front-end developer. Such as: Jibimarket.com (e-commerce website),
      Guitaracademy.com (biggest guitar academy in country), Zirobamnews.com (Iran music
      news agency) and mava.ir (educational website for elementary students).`,
    },
    {
      start: {
        month: "JUN",
        year: "2013",
      },
      end: {
        month: "AUG",
        year: "2014",
      },
      title: "Web Designer & Developer",
      company: "Freelance",
      description: `1 year & 2 months - Start my journey in web development, 
      alongside studying electrical engineering at university of Tehran.
      I designed and implemented several corporate and educational websites.
      During this period I developed my skills in HTML, CSS, some CMSs
      (Wordpress, Opencart and etc.). \
      Some of my works during this period: parspalayesh.com, robinaraia.com, sotudehbeton.com`,
    },
  ]

  return (
    <section className="content">
      <h1 className="content__main-title bold">WORK EXPERIENCES</h1>
      <ul>
        {experiences.map(item => (
          <li className="experience" key={item.company}>
            <div className="experience__date">
              <span className="experience__date-badge">
                {item.start.month}
                <time className="bold">{item.start.year}</time>
                {` - `}
                {item.end.month}
                <time className="bold">{item.end.year}</time>
              </span>
            </div>
            <div className="experience__details">
              <h3 className="experience__details-title bold">{item.title}</h3>
              <h4 className="experience__details-company">{item.company}</h4>
              <p className="experience__details-description">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <h1 className="content__main-title bold">EDUCATION</h1>
      <ul>
        <li className="experience">
          <div className="experience__date">
            <span className="experience__date-badge">
              SEP
              <time className="bold">2013</time>
              {` - `}
              JAN
              <time className="bold">2018</time>
            </span>
          </div>
          <div className="experience__details">
            <h3 className="experience__details-title bold">
              Bachelor of Electrical Engineering
            </h3>
            <h4 className="experience__details-company">
              University of Tehran
            </h4>
            <p className="experience__details-description">never done!</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
