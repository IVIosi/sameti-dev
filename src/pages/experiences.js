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
      title: "Senior Front-end Developer",
      company: "FANAP",
      website: "https://fanap.ir/",
      description: `1 year - Fanap ICT is one of the largest IT
      companies in the middle east. It is also the leading company
      in Iran's IT market. I am working on Behnama (IP video
      surveillance software, similar to Genetec) and Behkhan
      (License plate recognition software)`,
      tasks: [
        "Architecting web application using TypeScript, React, Redux and JSS (CSS in JS)",
        "Developing multilingual, international, and accessible application following i18n and a11y best practices",
        "Improving code quality by adding unit and E2E tests and running them in CI (Continuous Integration) using Testing Library, Jest and Cypress",
        "Reducing bundle size up to nearly 20% and improving performance around 10% with the help of React profiling tools and Chrome Lighthouse",
        "Creating a WebRTC based live streaming player with custom controls",
        "Efficiently delegating tasks, ensuring that software documentation is complete and accurate, and remediating group conflicts in an Agile team",
        "Mentoring other front-end developers to learn best practices and trending technologies",
        "Serving as a front-end consultant to the company’s other software teams (Behsima, Behkhan)",
      ],
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
      website: "https://zhaket.com/",
      description: `1 year & 2 months - Zhaket is the largest
      marketplace for website templates and plugins for Iranian
      developers and also, by far the market leader. similar to Envato`,
      tasks: [
        "Developing responsive and SSR (server-side rendered) web application using JavaScript, Next JS, React, Redux, and Sass",
        "Creating a new feature-rich WYSIWYG HTML editor which improved user satisfaction around 30% based on on-site surveys",
        "Building a state of the art front-end framework and developing three different user interfaces for retailers, customers, and admins",
      ],
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
      website: "https://chicheraa.com/",
      description: `1 year & 4 months - ChiCheraa is a start-up
      offering an AI-based guide for buying tech gadgets`,
      tasks: [
        "Working closely with the design team to move towards a more Agile methodology by quickly prototyping application using TypeScript, Sass, React, and Redux",
        "Developing PWA application as a team member within our process of writing user stories",
      ],
    },
    {
      start: {
        month: "SEP",
        year: "2015",
      },
      end: {
        month: "SEP",
        year: "2017",
      },
      title: "Front-end Developer",
      company: "Mava",
      website: "https://mava.ir/",
      description: `2 years & 1 month - Mava is an Iranian
      e-commerce company providing educational tools for students`,
      tasks: [
        "Implementing a new design system with the cooperation of the design team",
        "Refactoring Mava.ir website which had been written by jQuery, Require JS, and Handlebars JS",
      ],
    },
    {
      start: {
        month: "JUN",
        year: "2013",
      },
      end: {
        month: "SEP",
        year: "2015",
      },
      title: "Front-end Developer",
      company: "Freelance",
      website: "/projects",
      description: `2 years & 4 months - As a freelance front-end
      developer, I worked on several projects with several companies`,
      tasks: [
        "{sotudehbeton.ir} Concrete plant website (HTML, CSS, Bootstrap, Vanilla JS, ES6+)",
        "{guitarwsh.com} Music academy blog (HTML, CSS, Bootstrap, Vanilla JS, ES6+, WordPress)",
        "{robinaria.com} Law firm reservation system (HTML, CSS, Bootstrap, Vanilla JS)",
        "{parspalayesh.com} Industrial company website (HTML, CSS, Bootstrap, jQuery, Vanilla JS)",
        "{zirobamnews.com} Music news agency (HTML, CSS, Bootstrap, Vanilla JS, WordPress)",
        "{jibimarket.com} E-commerce website (HTML, CSS, Bootstrap, Vanilla JS, OpenCart)",
      ],
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
              <h4 className="experience__details-company">
                <a target="_blank" rel="noopener noreferrer" href={item.website}>{item.company}</a>
              </h4>
              <p className="experience__details-description">
                {item.description}
              </p>
              <ul className="experience__details-task-list">
                {item.tasks.map(task => (
                  <li key={task} className="experience__details-task">
                    {task}
                  </li>
                ))}
              </ul>
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
              Bachelor of Science - Electrical Engineering
            </h3>
            <h4 className="experience__details-company">
              <a target="_blank" rel="noopener noreferrer" href="https://ut.ac.ir">University of Tehran</a>
            </h4>
            <p className="experience__details-description"></p>
          </div>
        </li>
      </ul>
    </section>
  )
}
