import React, { Fragment } from "react"
import SEO from "./SEO"

import "../styles/main.scss"
import InfoCard from "./info-card"
import Copyright from "./copyright"
import Navigation from "./navigation"

export default function Layout({ children }) {
  return (
    <Fragment>
      <SEO />
      <div className="polygon polygon-left" />
      <div className="polygon polygon-right" />
      <main className="main">
        <InfoCard gravatar="b3809a056ac56a369c1d823bbf93cddc" />
        {children}
        <Navigation />
      </main>
      <footer className="footer">
        <Copyright />
      </footer>
    </Fragment>
  )
}
