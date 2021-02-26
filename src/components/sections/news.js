import React from "react"
import BreakeSection from "../breakeSection"
import CardItem from "../../components/sections/carditem"
import styled from "styled-components"

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`

const NewsPage = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <>
      <div id="news" style={{ marginTop: "100px" }}>
        <BreakeSection>Aktualności</BreakeSection>
        <ArticlesWrapper>
          {nodes.map(
            ({ excerpt, featuredImage, frontmatter: { title, published } }) => (
              <CardItem
                key={title}
                title={title}
                excerpt={excerpt}
                published={published}
                featuredImage={featuredImage}
              />
            )
          )}
        </ArticlesWrapper>
      </div>
    </>
  )
}

export default NewsPage
