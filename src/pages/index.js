import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%; 
`

const StyledWrapperImages = styled.img`
display: block;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  max-height: 90%;
`

const IndexPage = ({ data }) => (
  <StyledWrapper>
    <SEO title="GOKIS" name="Gminny Ośrodek Kultury i Sportu w Pilniku" />
    <StyledWrapperImages
      src={data.file.childImageSharp.fluid.src}
      srcSet={data.file.childImageSharp.fluid.srcSet}
      sizes={data.file.childImageSharp.fluid.sizes}
    />
    <Layout />
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
