import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import Image from "gatsby-image"

import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  max-height: 500px;
  width: 100%;
  position: relative;
`
const Photo = styled(Image)`
  display: block;
  position: relative;
`
const Menu = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  z-index: 999;
  bottom: 40px;
`

const WrapperButtonLeft = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
`

const WrapperButtonRight = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
`
const ButtonLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 44px;
  color: black;
  background: white;
  border-radius: 50%;
  z-index: 999;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`

const ButtonRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 44px;
  color: black;
  background: white;
  border-radius: 50%;
  z-index: 999;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`

const HeroText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 80%;
  left: 10%;
  right: 10%;
  z-index: 999;
  bottom: 30px;
  background-color: rgba(0,  0,  0,  0.7);
  color: white;
`

const Title = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 48px;
`


const SubTitle = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 28px;
`

export const Hero = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "hero" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  return (
    <Wrapper>
      <div>
        <Photo
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
        />
        <HeroText>
          <Title >Gminny Ośrodek Kultury i Sportu w Pilniku</Title>
          <SubTitle>-ZAPRASZAMY-</SubTitle>
        </HeroText>
      </div>
      <Menu>
        <WrapperButtonLeft>
          <ButtonLeft onClick={() => handlePrevious()}>
            <FaAngleLeft />
          </ButtonLeft>
        </WrapperButtonLeft>
        <WrapperButtonRight>
          <ButtonRight onClick={() => handleNext()}>
            <FaAngleRight />
          </ButtonRight>
        </WrapperButtonRight>
      </Menu>
    </Wrapper>
  )
}
