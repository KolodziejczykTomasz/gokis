import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Belcanto from "../sections/belcanto"
import Footer from "../components/footer"
import ButtonList from "../sections/buttonlist"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`

const BelcantoPage = ({ data }) => (
  <StyledWrapper>
    <SEO title="GOKIS" name="Dziecięcy zespół wokalny Bel Canto" />
    <Layout />
    <Belcanto />
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

export default BelcantoPage
