import React from "react"
import { Link } from "gatsby"
import BreakeSection from "../breakeSection"
import CardItem from "../../components/sections/carditem"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ArticlesWrapper = styled.div`
  display: flex;
  margin-bottom: 75px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  &:last-child {
    justify-content: flex-end;
  }
`

const ButtonMore = styled.button`
  display: block;
  margin: 30px auto 0 auto;
  position: relative;
  overflow: hidden;
  width: auto;
  padding: 15px 30px;
  border: none;
  text-transform: uppercase;
  font-size: 16px;
  background: none;
  color: white;
  z-index: 1;
  letter-spacing: 1.2px;
  border: 1px solid #c23b37;
  :after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #c23b37;
    font-size: 15px;
    line-height: 40;
    z-index: -1;    
    color: black !important; 
    transition: top 0.3s ease-in-out;
  }
  :hover:after {
    left: 0;
    bottom: auto;
    top: 90%;
    color: black !important;
    border: 1px solid #c23b37;
  }
  :focus {
    border: 3px dotted #c23b37;
  }

  &:focus,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: black !important;
    border: 1px solid #c23b37;
  }
`

const NewsPage = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Container style={{ marginTop: "100px" }}> 
       <BreakeSection>Aktualności</BreakeSection>
      <Wrapper id="news" >      
        <ArticlesWrapper>
          {nodes
            .slice(0, 3)
            .map(
              ({
                excerpt,
                frontmatter: { title, published, featuredImage, slug },
              }) => (
                <CardItem
                  key={slug}
                  title={title}
                  excerpt={excerpt}
                  published={published}
                  slug={slug}
                  image={featuredImage.childImageSharp.fluid}
                />
              )
            )}
        </ArticlesWrapper>
        <ButtonMore as={Link} to="/allposts">
          Wszystkie aktualności
        </ButtonMore>
      </Wrapper>
    </Container>
  )
}

export default NewsPage
