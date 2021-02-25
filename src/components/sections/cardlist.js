import React from "react"
import { graphql } from "gatsby"
import CardItem from "./carditem"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`

const CardList = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Wrapper>
      {nodes.map(
        ({
          frontmatter: { title, slug, featuredImage, published },
          excerpt,
        }) => (
          <CardItem
            title={title}
            slug={slug}
            excerpt={excerpt}
            published={published}
            featuredImage={featuredImage.childImageSharp.fluid}
          />
        )
      )}
    </Wrapper>
  )
}
export default CardList

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          published
          slug
          title
          featuredImage {
            childImageSharp {
              fluid(maxHeight: 200, maxWidth: 200) {
                src
                srcSet
                tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 150)
      }
    }
  }
`

