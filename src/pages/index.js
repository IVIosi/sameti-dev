import React from "react"

export default function IndexPage() {
  return (
    <section className="content">
      <h1 className="content__main-title bold">ABOUT ME</h1>
      <div className="content__text">
        <h2 className="bold">Hello, I'm Mostafa!</h2>
        <p>
          {`a front-end developer from Tehran, Iran. I've been creating on the
              web for around 5 years and have become pretty good at it. I hang out
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
          I’m super passionate about design, development, and business. I’ve
          been very fortunate to be able to do all three as a career. From a
          technical standpoint, I spend most of my time working with JavaScript,
          CSS3, HTML5. New and open source web technologies make me super
          excited and I can’t wait to see what is to come of the web in the next
          few years.
        </p>
        <br />
        <p>
          I’ve worked for myself my entire life. I’ve graduated of Universty of
          Tehran’s Electrical and Computer Enginering (ECE) school where I
          obtained my Bachelor of software engineering.
        </p>
        <br />
        <p>
          When not creating websites, I love to spend my time with my family and
          friends. In my free time I play flamenco ,aka spanish, guitar. I'm
          also a bookworm and obsessed with movies.
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
