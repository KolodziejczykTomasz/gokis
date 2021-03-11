import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

const CardBody = styled.div`
  display: grid;
  position: relative;
  width: 350px;
  height: 650px;
  padding: 10px 10px;
  margin-right: 15px;
  margin-bottom: 25px;
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
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
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`

const StyledImage = styled(Image)`
  width: auto;
  max-height: 250px;
  margin: 30px auto 0 auto;
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

const ButtonMore = styled.div`
  display: block;
  padding: 10px 15px 10px 15px;
  color: #fff;
  background-color: rgb(236, 0, 0);
  border: none;
  margin-right: 0;
  width: 150px;  
  text-decoration: none;
  float: right;
  text-align: center;
  border: 1px solid transparent;

  & :hover {
    border: 1px solid rgb(236, 0, 0);
    color: rgb(236, 0, 0);
    background-color: #fff;
    text-decoration: none;
  }
`


const CardItem = ({ title, image, published, excerpt, slug }) => {
  return (
    <CardBody >
      <CardTitle>
        {title} <hr />
        <StyledImage fluid={image} />
      </CardTitle>
      <CardExcerpt>{excerpt}</CardExcerpt>      
      <CardFotter>
        <hr />
        <small>Data publikacji: {published}</small><ButtonMore as={Link} to={`/${slug}`}>Więcej</ButtonMore>
      </CardFotter>
    </CardBody>
  )
}

export default CardItem
