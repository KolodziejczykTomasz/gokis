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
  height: 90%;
  color: ${({ activecolor }) => (activecolor ? "yellow" : "transparent")};
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const IndexPage = ({ ...props }) => {
  const [activecolor, setactivecolor] = useState(false)
  const [plussize, setplussize] = useState(0)
  const [minussize, setminussize] = useState(0)

  const Reset = () => {
    setplussize(0), setminussize(0)
  }

  const Contrast = () => setactivecolor(!activecolor)
  const GrowFontSize = () => setplussize(plussize + 1)
  const ShrinkFontSize = () => setminussize(minussize + 1)

  return (
    <StyledWrapper
      plussize={plussize}
      minussize={minussize}
      activecolor={activecolor}
    >
      <SEO title="GOKIS" name="Gminny Ośrodek Kultury i Sportu w Pilniku" />
      <Layout
        plussize={plussize}
        minussize={minussize}
        activecolor={activecolor}
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
        activecolor={activecolor}
      />
      <NewsPage
        {...props}
        plussize={plussize}
        minussize={minussize}
        activecolor={activecolor}
      />
      <ButtonList
        plussize={plussize}
        minussize={minussize}
        activecolor={activecolor}
      />
      <Footer
        plussize={plussize}
        minussize={minussize}
        activecolor={activecolor}
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
        body
        rawBody
      }
    }
  }
`

export default IndexPage
