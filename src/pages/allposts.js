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
  background-color: ${({ activeColor, value }) => {
    if (activeColor === true) return "yellow"
    return "white"
  }};
`

const AllPostPage = ( props ) => {
  const [plusSize, setPlusSize] = useState(0)
  const [minusSize, setMinusSize] = useState(0)
  const [contrastColor, setContrastColor] = useState(false)

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
    <StyledWrapper>
      <SEO title="GOKIS" name="Wszystkie aktualności" />
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
      <AllPost
        {...props}
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
