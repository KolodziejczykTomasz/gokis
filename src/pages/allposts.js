import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Footer from "../components/footer"
import AllPost from "../sections/allposts"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`

const AllPostPage = ( props ) => (
  <StyledWrapper>
    <SEO title="GOKIS" name="Wszystkie aktualności" />
    <Layout />   
    <AllPost {...props} />    
    <Footer />
  </StyledWrapper>
)

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
