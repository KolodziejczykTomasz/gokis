import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        published
        featuredImage {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`
const PostLayout = ({ data }) => {
  return (
    <StyledWrapper>
      <SEO title="GOKIS" name="Gminny Ośrodek Kultury i Sportu w Pilniku" />
      <Layout />
      <div>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.author}</p>
        <Image
          fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed}
        />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <Footer />
    </StyledWrapper>
  )
}

export default PostLayout
