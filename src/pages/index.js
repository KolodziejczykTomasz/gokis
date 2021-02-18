import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import About from "../components/about"
import Footer from "../components/footer"
import BreakeSection from "../components/breakeSection"
import ButtonList from "../components/buttonlist"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`

const IndexPage = ({ data }) => (
  <StyledWrapper>
    <SEO title="GOKIS" name="Gminny Ośrodek Kultury i Sportu w Pilniku" />
    <Layout />
    <BreakeSection>O nas</BreakeSection>
    <About />
    <BreakeSection>Pracownie</BreakeSection>
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

export default IndexPage
