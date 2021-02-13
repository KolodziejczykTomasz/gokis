import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

import GlobalStyle from "../assets/styles/globalStyle"
import Hero from "./hero"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    <Hero />
    {children}
    <Footer />
  </>
)

export default Layout
