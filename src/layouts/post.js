import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
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
  display: flex;
  flex-direction: row;
  @media (max-width: 920px) {
      flex-direction: column;
  }
`
const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 40%;
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
  width: 60%;
  position: relative;
  @media (max-width: 920px) {
      width: 100%;
    padding: 0 30px;
  }
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
  width: 100%;
  @media (max-width: 920px) {
      width: 100%;
    padding: 30px 5px;
  }
`

const ButtonMore = styled.div`
  display: block;
  padding: 10px 15px;
  color: #fff;
  background-color: rgb(236, 0, 0);
  border: none;
  margin-right: 0;
  margin-bottom: 70px;
  width: 150px;
  text-decoration: none;
  float: right;
  text-align: center;
  border: 1px solid transparent;
  & :hover {
    border: 1px solid rgb(236, 0, 0);
    color: rgb(236, 0, 0);
    background-color: #fff;
    text-decoration: none;
  }
`
const ButtonWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 50px;
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
            <ButtonWrapper>
              <ButtonMore as={Link} to="/allposts">
                Powrót
              </ButtonMore>
            </ButtonWrapper>
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
