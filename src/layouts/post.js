import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import BreakeSection from "../components/breakeSection"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
`

const Section = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
`
const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`
const Photo = styled(Image)`
  display: block;
  width: 75%;
  margin: 0 auto;
  -moz-box-shadow: 1px 1px 1px 0px #444;
  -webkit-box-shadow: 1px 1px 1px 0px #444;
  box-shadow: 1px 1px 1px 0px #444;
  color: black;
  text-decoration: none;
  :hover {
    -moz-box-shadow: 1px 1px 3px 0px #444;
    -webkit-box-shadow: 1px 1px 3px 0px #444;
    box-shadow: 1px 1px 3px 0px #444;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%; 
  position: relative;
`
const ContentHeader = styled.div`
  display: flex;
  margin: 40px 20px 0 40px;
  position: absolute;
  bottom: 0;
  width: 90%;
  height: auto;
  align-content: center;
`
const Published = styled.div`
  display: block;
  width: 50%;
  border-top: 1px solid #444;
`
const Author = styled.div`
  display: block;
  width: 50%;
  border-top: 1px solid #444;
`

const Description = styled.div`
  padding: 30px 20px 30px 40px;
  font-size: 18px;
  line-height: 32px;

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
      <div id="article" style={{ marginTop: "100px", marginBottom: "100px" }}>
        <BreakeSection>{data.mdx.frontmatter.title}</BreakeSection>
        <Section>
          <PhotoWrapper>
            <Photo
              fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed}
            />
          </PhotoWrapper>
          <Content>
            <Description>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Description>
            <ContentHeader>
              <Published>
                <small>Publikacja: {data.mdx.frontmatter.published}</small>
              </Published>
              <Author>
                <small>Autor: Admin</small>
              </Author>
            </ContentHeader>
          </Content>
        </Section>
      </div>
      <Footer />
    </StyledWrapper>
  )
}

export default PostLayout
