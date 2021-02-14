import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

import GlobalStyle from "../assets/styles/globalStyle"
import Hero from "./hero"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <Hero />
    {children}
    <Footer />
  </>
)

export default Layout
