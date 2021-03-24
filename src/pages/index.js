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
  color: ${({ activeColor, value }) => {
    if (activeColor === true) return "black"
    return "white"
  }};
  background-color: ${({ activeColor, value }) => {
    if (activeColor === true) return "yellow"
    return "transparent"
  }};
`


const IndexPage = props => {
  const [contrastColor, setContrastColor] = useState(false)
  const [plusSize, setPlusSize] = useState(0)
  const [minusSize, setMinusSize] = useState(0)

  

  const Reset = () => {
    setContrastColor("black"), setPlusSize(0), setMinusSize(0)
  }

  const Contrast = () => {
    setContrastColor(!contrastColor)
  }

  const GrowFontSize = () => {
    setPlusSize(plusSize + 1)
  }

  const ShrinkFontSize = () => {
    setMinusSize(minusSize + 1)
  }
  return (
    <StyledWrapper
      plusSize={plusSize}
      minusSize={minusSize}
      activeColor={contrastColor}
    >
      <SEO title="GOKIS" name="Gminny Ośrodek Kultury i Sportu w Pilniku" />
      <Layout
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={contrastColor}     
      />
      <AsideNavi
        Reset={Reset}
        Contrast={Contrast}
        ShrinkFontSize={ShrinkFontSize}
        GrowFontSize={GrowFontSize}
      />
      <About
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={contrastColor}
      />
      <NewsPage
        {...props}
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={contrastColor}
      />
      <ButtonList
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={contrastColor}
      />
      <Footer
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={contrastColor}   
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
