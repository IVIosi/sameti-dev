import React from "react"

import Layout from "../components/layout"

export default function IndexPage() {
  const experiences = [
    {
      start: {
        month: "MAR",
        year: "2019",
      },
      end: {
        month: "today",
        year: "",
      },
      title: "Front-end Developer",
      company: "Zhaket",
      description: `1 year 1 month - Zhaket is the biggest Wordpress 
      plugins and themes marketplace in Iran. I'm working in Zhaket 
      tech team as a front end developer. Our team trying to design 
      and implement Zhaket new platform.
      Technologies and frameworks use in client side stack consists 
      of vast and different front end technologies, such as React JS, 
      Next JS, Redux, Redux-saga, SASS and other famous frameworks 
      and technologies.
      Our team works based on Agile software development and follows 
      SCRUM set of rules.`,
    },
    {
      start: {
        month: "JAN",
        year: "2018",
      },
      end: {
        month: "MAR",
        year: "2019",
      },
      title: "Front-end Developer",
      company: "ChiCheraa",
      description: `1 year 2 months - ChiCheraa is a startup trying to 
      make online shopping easier by providing suggestions on what to buy.
      I was front-end developer and designed website template based on 
      designs by UX/UI designer.
      I also developed ChiCheraa website as a single page web application 
      powered by ReactJS.`,
    },
    {
      start: {
        month: "AUG",
        year: "2013",
      },
      end: {
        month: "JAN",
        year: "2018",
      },
      title: "Freelance Front-end Developer",
      company: "Freelance",
      description: `4 years 5 months`,
    },
  ]

  return (
    <Layout>
      <section className="content">
        <h1 className="content__main-title bold">WORK EXPERIENCES</h1>
        <ul>
          {experiences.map(item => (
            <li className="experience">
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
                Bachelor of Software Engineering
              </h3>
              <h4 className="experience__details-company">
                University of Tehran
              </h4>
              <p className="experience__details-description">never done!</p>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
