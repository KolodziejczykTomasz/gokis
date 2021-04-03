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
  color: ${({ activecolor, value }) => {
    if (activecolor === true) return "black"
    return "white"
  }};
  background-color: ${({ activecolor, value }) => {
    if (activecolor === true) return "yellow"
    return "transparent"
  }};
`


const IndexPage = ({...props}) => {
  const [contrastColor, setContrastColor] = useState()
  const [plussize, setplussize] = useState(0)
  const [minussize, setminussize] = useState(0)

  const Reset = () => {
    setContrastColor(), setplussize(0), setminussize(0)
  }

  const Contrast = () => {
    setContrastColor(!contrastColor)
  }

  const GrowFontSize = () => {
    setplussize(plussize + 1)
  }

  const ShrinkFontSize = () => {
    setminussize(minussize + 1)
  }
  return (
    <StyledWrapper
      plussize={plussize}
      minussize={minussize}
      activecolor={contrastColor}
    >
      <SEO title="GOKIS" name="Gminny Ośrodek Kultury i Sportu w Pilniku" />
      <Layout
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
      <AsideNavi
        Reset={Reset}
        Contrast={Contrast}
        ShrinkFontSize={ShrinkFontSize}
        GrowFontSize={GrowFontSize}
      />
      <About
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
      <NewsPage
        {...props}
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
      <ButtonList
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
      <Footer
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
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
