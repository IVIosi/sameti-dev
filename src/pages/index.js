import React from "react"

export default function IndexPage() {
  return (
    <section className="content">
      <h1 className="content__main-title bold">ABOUT ME</h1>
      <div className="content__text">
        <h2 className="bold">Hello, I'm Mostafa!</h2>
        <p>
          {`a front-end developer from Tehran, Iran. I've been creating on the
              web for around 6 years and have become pretty good at it. I hang out
              on `}
          <a
            href="https://twitter.com/mostafa_sameti"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {` and would love to meet you!`}
        </p>
      </div>
      <hr />
      <div className="content__text">
        <h2 className="bold">A little more...</h2>
        <p>
          I’m super passionate about design, development, and business. From a
          technical standpoint, I spend most of my time working with JavaScript,
          CSS3, HTML5. New and open source web technologies make me super
          excited and I can’t wait to see what is to come of the web in the next
          few years.
        </p>
        <br />
        <p>
          I’ve worked for several companies. I’ve graduated of Universty of
          Tehran’s Electrical and Computer Enginering (ECE) school where I
          obtained my Bachelor of electrical engineering.
        </p>
        <br />
        <p>
          When not creating websites and web applications, I love to spend my time
          with my family and friends. In my free time I play flamenco ,aka spanish,
          guitar. I'm also a bookworm and obsessed with movies.
        </p>
        <br />
        <p>
          {`If you have a question about me, you can send an `}
          <a href="mailto:mos.sameti@gmail.com">Email</a>
          {` or DM me on `}
          <a
            href="https://twitter.com/mostafa_sameti"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
      </div>
    </section>
  )
}
