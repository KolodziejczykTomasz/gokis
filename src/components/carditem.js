import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaRegCalendarAlt } from "react-icons/fa"

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 350px;
  height: 680px;
  padding: 10px 10px;
  margin-right: 15px;
  margin-bottom: 25px;
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  color: black;
  text-decoration: none;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
  color: ${({ activecolor }) => (activecolor ? "black" : "white")};
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
  text-align: left;
  height: 60px;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
  color: ${({ activecolor }) => (activecolor ? "black" : "white")};
`

const CardDate = styled.div`
  margin-top: 15px;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const CardImage = styled.div`
  background-color: red;
  height: 250px;
`

const StyledImage = styled(Image)`
  display: flex;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  -moz-box-shadow: 2px 2px 6px 0px #444;
  -webkit-box-shadow: 2px 2px 6px 0px #444;
  box-shadow: 2px 2px 6px 0px #444;
  transition: 0.1s;
  :hover {
    transform: scale(1.1);
  }
`

const CardExcerpt = styled.div`
  margin: 60px 10px 60px 10px;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
  word-break: break-word;
`

const CardFotter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 0 5px 5px 5px;
  align-content: center;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const ButtonMore = styled.div`
  display: block;
  padding: 10px 15px 10px 15px;
  color: #fff;
  background-color: rgb(236, 0, 0);
  border: none;
  margin-right: 10px;
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

const CardItem = ({
  title,
  altText,
  image,
  published,
  excerpt,
  slug,
  plussize,
  minussize,
  activecolor,
}) => {
  return (
    <CardBody
      plussize={plussize}
      minussize={minussize}
      activecolor={activecolor}
      style={{ fontSize: `${16 + plussize - minussize}px` }}
    >
      <CardTitle activecolor={activecolor}>{title}</CardTitle>
      <CardDate
        plussize={plussize}
        minussize={minussize}
        activecolor={activecolor}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        <FaRegCalendarAlt
          activecolor={activecolor}
          style={{ marginRight: "5px", marginTop: "-3px" }}
        />
        {published}
      </CardDate>
      <hr />
      <CardImage>
        <StyledImage fluid={image} alt={altText} />
      </CardImage>
      <CardExcerpt
        plussize={plussize}
        minussize={minussize}
        activecolor={activecolor}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        {excerpt}
      </CardExcerpt>
      <CardFotter activecolor={activecolor}>
        <hr />

        <ButtonMore
          plussize={plussize}
          minussize={minussize}
          activecolor={activecolor}
          style={{ fontSize: `${16 + plussize - minussize}px` }}
          as={Link}
          aria-label="Więcej"
          to={`/${slug}`}
        >
          Więcej
        </ButtonMore>
      </CardFotter>
    </CardBody>
  )
}

export default CardItem
