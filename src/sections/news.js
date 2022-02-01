import React from "react"
import { Link } from "gatsby"
import BreakeSection from "../components/breakeSection"
import CardItem from "../components/carditem"
import styled from "styled-components"

const Container = styled.div`
  display: block;
  margin: 0 auto;
  padding: 0 144px;
  width: 100%;
  color: ${({ activecolor }) => (activecolor ? "black" : "black")};
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
        width: 100%;
  }
`

const ArticlesWrapper = styled.div`
  display: flex;
  margin-bottom: 75px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;   
  @media (max-width: 800px) {
        width: 100%;
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
  transition: 0.2s;
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

const NewsPage = ({ data, activecolor, plussize, minussize }) => {
  const {
    allMdx: { nodes },
  } = data

  return (
    <Container
      style={{ marginTop: "100px" }}
      activecolor={activecolor}
      plussize={plussize}
      minussize={minussize}
    >
      <BreakeSection>Aktualności</BreakeSection>
      <Wrapper
        id="news"
        activecolor={activecolor}
        plussize={plussize}
        minussize={minussize}
      >
        <ArticlesWrapper
          activecolor={activecolor}
          plussize={plussize}
          minussize={minussize}
        >
          {nodes
            .slice(0, 4)
            .map(
              ({
                excerpt,
                body,
                rawBody,
                frontmatter: { title, altText, published, featuredImage, slug },
              }) => (
                <CardItem
                  key={slug}
                  title={title}
                  body={body}
                  rawBody={rawBody}
                  altText={altText}
                  excerpt={excerpt}
                  published={published}
                  slug={slug}
                  image={featuredImage.childImageSharp.fluid}
                  plussize={plussize}
                  minussize={minussize}
                  activecolor={activecolor}
                />
              )
            )}
        </ArticlesWrapper>
        <ButtonMore
          plussize={plussize}
          minussize={minussize}
          style={{ fontSize: `${16 + plussize - minussize}px` }}
          to="/allposts"
        >
          Wszystkie aktualności
        </ButtonMore>
      </Wrapper>
    </Container>
  )
}

export default NewsPage
