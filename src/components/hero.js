
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import Image from "gatsby-image"

import styled from "styled-components"

const Section = styled.div`
  display: block;
`

const Wrapper = styled.div`
  display: block;
  height: auto;
  max-height: 920px;
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
  bottom: 40%;
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
  z-index: 999;
  padding: 20px 20px;
  bottom: 0%;
  margin-bottom: -10px;
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

export const Hero = ({ activecolor }) => {
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
  const { node, name } = allFile.edges[index]
  return (
    <Section>
      <Wrapper>
        <div>
          <Photo
            fluid={node.childImageSharp.fluid}
            key={node.id}
            alt={node.name}
          />
          <HeroText
            style={{
              color: activecolor === true ? "black" : "white",
              backgroundColor: activecolor === true ? "yellow" : "#818190",
            }}
          >
            <Title>Gminny Ośrodek Kultury i Sportu w Pilniku</Title>
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
    </Section>
  )
}
