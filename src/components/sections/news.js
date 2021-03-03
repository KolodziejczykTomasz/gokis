import React from "react"
import BreakeSection from "../breakeSection"
import CardItem from "../../components/sections/carditem"
import styled from "styled-components"

const Container = styled.div`
 margin: 0 auto;
 width: 90%;
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

const NewsPage = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Container>
      <div id="news" style={{ marginTop: "100px" }}>
        <BreakeSection>Aktualności</BreakeSection>
        <ArticlesWrapper>
          {nodes.map(
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
      </div>
    </Container>
  )
}

export default NewsPage
