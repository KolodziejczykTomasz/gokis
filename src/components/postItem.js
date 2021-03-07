import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: auto;
  padding: 10px 10px;
  margin-right: 15px;
  margin-bottom: 25px;
  -moz-box-shadow: 1px 1px 1px 0px #444;
  -webkit-box-shadow: 1px 1px 1px 0px #444;
  box-shadow: 1px 1px 1px 0px #444;
  color: black;
  text-decoration: none;
  :hover {
    color: black;
    text-decoration: none;
    -moz-box-shadow: 1px 1px 3px 0px #444;
    -webkit-box-shadow: 1px 1px 3px 0px #444;
    box-shadow: 1px 1px 3px 0px #444;
  }
`

const CardTitle = styled.div`
display: block;
width: 100%;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`

const StyledImage = styled(Image)`
  width: 60%;
  max-width: 500px;
  max-height: 400px;
  margin: 50px auto 70px auto;
  -moz-box-shadow: 2px 2px 6px 0px #444;
  -webkit-box-shadow: 2px 2px 6px 0px #444;
  box-shadow: 2px 2px 6px 0px #444;
`

const CardExcerpt = styled.div`
  margin: 10px 10px 100px 10px;
`

const CardFotter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 0 5px 5px 5px;
  align-content: center;
`

const PostItem = ({ title, image, published, excerpt, slug }) => {
  return (
    <CardBody as={Link} to={`/${slug}`}>
      <CardTitle>
        {title} <hr />
        <StyledImage fluid={image} />
      </CardTitle>
      <CardExcerpt>{excerpt}</CardExcerpt>
      <CardFotter>
        <hr />
        <small>Data publikacji: {published}</small>
      </CardFotter>
    </CardBody>
  )
}

export default PostItem
