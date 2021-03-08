import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

const CardWrapper = styled.div`
  height: 100%;
  margin-bottom: 50px;
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  color: rgb(236, 0, 0);
  font-weight: 600;
`
const CardHeaderTitle = styled.div`
  font-size: 22px;
  line-height: 30px;
`

const CardHeaderDate = styled.div`
  display: block;
  padding: 10px 15px;
  color: #fff;
  background-color: rgb(236, 0, 0);
  border: none;
  margin-right: 75px;
  width: 150px;
  margin-top: 20px;
  text-decoration: none;
  text-align: center;
  border: 1px solid transparent;
  :hover {
    border: 1px solid rgb(236, 0, 0);
    color: rgb(236, 0, 0);
    background-color: #fff;
  }
`

const CardMain = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  font-size: 15px;
`
const CardMainPhoto = styled.div`
  margin-bottom: 10px;
`

const CardMainPhotoItem = styled(Image)`
  width: 80%;
  display: grid;
  object-fit: cover;
  align-items: right;
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`

const ButtonMore = styled.div`
  display: block;
  padding: 10px 15px;
  color: #fff;
  background-color: rgb(236, 0, 0);
  border: none;
  margin-right: 75px;
  width: 150px;
  margin-top: 20px;
  text-decoration: none;
  float: right;
  text-align: center;
  border: 1px solid transparent;
  :hover  {
    border: 1px solid rgb(236, 0, 0);
    color: rgb(236, 0, 0);
    background-color: #fff;
    text-decoration: none;  }
`

const CardMainContent = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  text-align: justify;
  hyphens: auto;
  word-wrap: break-word;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`

const PostItem = ({ title, image, published, excerpt, slug }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardHeaderDate>{published}</CardHeaderDate>
        <CardHeaderTitle>{title}</CardHeaderTitle>
      </CardHeader>
      <CardMain>
        <CardMainPhoto>
          <CardMainPhotoItem fluid={image} />
        </CardMainPhoto>
        <CardMainContent>{excerpt}</CardMainContent>
      </CardMain>
      <CardFooter>
        <ButtonMore as={Link} to={`/${slug}`}>
          Czytaj więcej
        </ButtonMore>
      </CardFooter>
    </CardWrapper>
  )
}

export default PostItem
