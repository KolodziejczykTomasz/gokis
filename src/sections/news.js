import React from "react"
import { Link } from "gatsby"
import BreakeSection from "../components/breakeSection"
import CardItem from "../components/carditem"
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

const ButtonMore = styled(Link)`
  display: block;
  min-width: 200px;
  width: auto;
  min-height: 40px;
  margin: 10px 15px;
  padding: 10px 15px;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-transform: uppercase;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: #000;
  border: 1px solid rgb(215, 58, 30);
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: .2s; 
  :after {    
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 2px;
    color: black !important;
    z-index: -1;
    text-decoration: none;
    border: 2px solid rgb(215, 58, 30);
    :active {
      bottom: 40px;
    }
  }
  :first-child {
    border-color: rgb(215, 58, 30);
  }
  :hover {
    color: #fff;
    position: relative;
    text-decoration: none;
    background-color: rgb(215, 58, 30);
  }
  :hover:after {
    width: 100%;
    height: 100%;
  }
  :focus {
    border: 3px dotted rgb(215, 58, 30) !important;
  }
`

const NewsPage = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Container style={{ marginTop: "100px" }}>
      <BreakeSection>Aktualności</BreakeSection>
      <Wrapper id="news">
        <ArticlesWrapper>
          {nodes
            .slice(0, 3)
            .map(
              ({
                excerpt,
                frontmatter: { title, altText, published, featuredImage, slug },
              }) => (
                <CardItem
                  key={slug}
                  title={title}
                  altText={altText}
                  excerpt={excerpt}
                  published={published}
                  slug={slug}
                  image={featuredImage.childImageSharp.fluid}
                />
              )
            )}
        </ArticlesWrapper>
        <ButtonMore to="/allposts">Wszystkie aktualności</ButtonMore>
      </Wrapper>
    </Container>
  )
}

export default NewsPage
