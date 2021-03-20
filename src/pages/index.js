import React, { useState } from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import About from "../sections/about"
import Footer from "../components/footer"
import ButtonList from "../sections/buttonlist"
import NewsPage from "../sections/news"
import AsideNavi from "../components/navigation/asideNavi"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`



const IndexPage = props => {
  const [contrastColor, setContrastColor] = useState("")
  const [fontSize, setFontSize] = useState(14)

  const Reset = () => {
    setContrastColor(""), setFontSize(14)
  }

  const Contrast = () => {
    setContrastColor("yellow")
  }

  const GrowFontSize = () => {
    setFontSize(fontSize + 1)
  }

  const ShrinkFontSize = () => {
    setFontSize(fontSize - 1)
  }

  console.log(fontSize, contrastColor)
  return (
    <StyledWrapper>
      <SEO title="GOKIS" name="Gminny Ośrodek Kultury i Sportu w Pilniku" />
      <Layout />
      <AsideNavi
        Reset={Reset}
        Contrast={Contrast}
        ShrinkFontSize={ShrinkFontSize}
        GrowFontSize={GrowFontSize}
      />
      <About />
      <NewsPage {...props} />
      <ButtonList />
      <Footer activeSize={fontSize} activeColor={contrastColor} />
    </StyledWrapper>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___published, order: DESC }) {
      nodes {
        frontmatter {
          title
          slug
          altText
          published
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`

export default IndexPage
