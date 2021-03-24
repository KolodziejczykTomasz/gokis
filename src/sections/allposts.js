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

  margin-bottom: 75px; 
`

const AllPost = ({ data, plusSize, minusSize, activeColor }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Container>
      <div id="news" style={{ marginTop: "100px" }}>
        <BreakeSection>Wszystkie aktualności</BreakeSection>
        <ArticlesWrapper>
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
              />
            )
          )}
        </ArticlesWrapper>
      </div>
    </Container>
  )
}

export default AllPost
