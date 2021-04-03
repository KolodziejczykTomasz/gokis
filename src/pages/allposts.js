import React, {useState} from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Footer from "../components/footer"
import AllPost from "../sections/allposts"
import AsideNavi from "../components/navigation/asideNavi"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
  background-color: ${({ activecolor, value }) => {
    if (activecolor === true) return "yellow"
    return "white"
  }};
`

const AllPostPage = ({data})  => {
  const [plussize, setplussize] = useState(0)
  const [minussize, setminussize] = useState(0)
  const [contrastColor, setContrastColor] = useState(false)

  const Reset = () => {
    setContrastColor(false), setplussize(0), setminussize(0)
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
      style={{ fontSize: `${16 + plussize - minussize}px` }}
    >
      <SEO title="GOKIS" name="Wszystkie aktualności" />
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
      <AllPost
        {...props}
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
          published
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt
      }
    }
  }
`

export default AllPostPage
