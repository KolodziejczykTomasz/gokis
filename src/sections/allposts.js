import React from "react"
import BreakeSection from "../components/breakeSection"
import PostItem from "../components/postItem"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  background-color: ${({ activeColor, value }) => {
    if (activeColor === true) return "yellow"
    return "white"
  }};
`

const ArticlesWrapper = styled.div`
  background-color: ${({ activeColor, value }) => {
    if (activeColor === true) return "yellow"
    return "white"
  }};
  margin-bottom: 75px;
`

const AllPost = ({ data, plusSize, minusSize, activeColor }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Container
      plusSize={plusSize}
      minusSize={minusSize}
      activeColor={activeColor}
    >
      <div id="news" style={{ marginTop: "100px" }}>
        <BreakeSection>Wszystkie aktualności</BreakeSection>
        <ArticlesWrapper
          plusSize={plusSize}
          minusSize={minusSize}
          activeColor={activeColor}
          style={{
            fontSize: `${16 + plusSize - minusSize}px`,
            backgroundColor: activeColor === true ? "yellow" : "white",
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
                plusSize={plusSize}
                minusSize={minusSize}
                activeColor={activeColor}
              />
            )
          )}
        </ArticlesWrapper>
      </div>
    </Container>
  )
}

export default AllPost
