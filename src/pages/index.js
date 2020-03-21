import React, { Fragment } from "react"

import "../styles/main.scss"
import InfoCard from "../components/info-card"
import Content from "../components/content"
import Copyright from "../components/copyright"

export default function IndexPage() {
  return (
    <Fragment>
      <div className="polygon polygon-left" />
      <div className="polygon polygon-right" />
      <main className="main">
        <InfoCard gravatar="b3809a056ac56a369c1d823bbf93cddc" />
        <Content />
        <nav className="navbar">icons</nav>
      </main>
      <footer className="footer">
        <Copyright />
      </footer>
    </Fragment>
  )
}
