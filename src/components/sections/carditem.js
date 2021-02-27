import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const CardBody = styled.div`
  display: grid;
  position: relative;
  width: 350px;
  height: 650px;
  padding: 10px 10px;
  margin-right: 15px;
  margin-bottom: 25px;
  -moz-box-shadow: 1px 1px 3px 0px #444;
  -webkit-box-shadow: 1px 1px 3px 0px #444;
  box-shadow: 1px 1px 3px 0px #444;
`

const CardTitle = styled.div`
  font-size: 22px;
`

const StyledImage = styled(Image)`
  width: 95%;
  height: auto;
  margin: 30px auto 0 auto;
  object-fit: cover;
  -moz-box-shadow: 2px 2px 6px 0px #444;
  -webkit-box-shadow: 2px 2px 6px 0px #444;
  box-shadow: 2px 2px 6px 0px #444;
`

const CardExcerpt = styled.div`
  margin: 10px 10px 40px 10px;
`

const CardFotter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 0 5px 5px 5px;
  align-content: center;
`

const CardItem = ({ title, image, published, excerpt }) => {
  return (
    <CardBody>
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

export default CardItem
