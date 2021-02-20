import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Tennis from "../components/sections/tennis"
import Footer from "../components/footer"
import ButtonList from "../components/sections/buttonlist"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`

const TennisPage = ({ data }) => (
  <StyledWrapper>
    <SEO title="GOKIS" name="Gminny Ośrodek Kultury i Sportu w Pilniku" />
    <Layout /> 
    <Tennis />  
    <ButtonList />
    <Footer />
  </StyledWrapper>
)

export const query = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

export default TennisPage
