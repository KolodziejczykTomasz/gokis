import React from "react"
import Navigation from "./navigation"
import Hero from "./hero"

import GlobalStyle from "../assets/styles/globalStyle"


const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <Hero />
    {children}  
  </>
)

export default Layout
