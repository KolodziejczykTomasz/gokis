import React from "react"
import BreakeSection from "../breakeSection"
import CardItem from "../../components/sections/carditem"
import styled from "styled-components"

const ArticlesWrapper = styled.div`
  display: flex;
  margin-bottom: 75px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
            ({
              excerpt,
              frontmatter: { title, published, featuredImage, slug },
            }) => (
              <CardItem
                key={title}
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
    </>
  )
}

export default NewsPage
