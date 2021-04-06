import React from "react"
import BreakeSection from "../components/breakeSection"
import PostItem from "../components/postItem"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const ArticlesWrapper = styled.div`
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
  padding-bottom: 75px;
`

const AllPost = ({ data, plussize, minussize, activecolor }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Container
      plussize={plussize}
      minussize={minussize}
      activecolor={activecolor}
    >
      <div id="news" style={{ marginTop: "100px" }}>
        <BreakeSection>Wszystkie aktualności</BreakeSection>
        <ArticlesWrapper
          plussize={plussize}
          minussize={minussize}
          activecolor={activecolor}
          style={{
            fontSize: `${16 + plussize - minussize}px`,
            backgroundColor: activecolor ? "yellow" : "white",
          }}
        >
          {nodes.map(
            ({
              excerpt,
              frontmatter: { title, published, featuredImage, slug },
            }) => (
              <PostItem
                key={slug}
                title={title}
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
      </div>
    </Container>
  )
}

export default AllPost
