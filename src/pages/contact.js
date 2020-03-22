import React from "react"

import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <section className="content">
        <h1 className="content__main-title bold">CONTACT ME</h1>
        <div className="content__text">
          <h2 className="bold">Hey!</h2>
          <p>
            {`If you would like to get in touch, please shoot me an email at `}
            <a href="mailto:mos.sameti@gmail.com">mos.sameti@gmail.com</a>
            {` and I’ll try get back to you within a day or so!`}
          </p>
        </div>
      </section>
    </Layout>
  )
}
