import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import CardItem from "../../components/sections/carditem"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`

const CardList = () => {
  const { edges: posts } = data.allMdx
  const data = useStaticQuery(graphql`
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
                }
              }
            }
          }
          excerpt(pruneLength: 150)
        }
      }
    }
  `)
  return (
    <div>
      {posts.map(({ node }) => {
        const { title } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
              <div>Posting By</div>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default CardList
