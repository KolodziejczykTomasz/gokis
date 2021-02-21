import React from "react"
import { Carousel } from "react-bootstrap"
import Hero1 from "../assets/images/hero/hero1.jpg"
import Hero2 from "../assets/images/hero/hero2.jpg"
import Hero4 from "../assets/images/hero/hero4.jpg"

import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const SlideItem = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 700px;
`

const CaptionBackground = styled.div`
  background-color: rgba(0,  0,  0,  0.5);
  width: 100%;
  padding: 25px 0;
`

const Hero = () => (
  <Carousel>
    <Carousel.Item interval={1500}>
      <SlideItem src={Hero1} alt="First slide" />
      <Carousel.Caption>
        <CaptionBackground>
          <h1>Gminny Ośrodek Kultury i Sportu w Pilniku</h1>
          <h2>-ZAPRASZAMY-</h2>
        </CaptionBackground>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <SlideItem src={Hero2} alt="Third slide" />
      <Carousel.Caption>
        <CaptionBackground>
          <h1>Gminny Ośrodek Kultury i Sportu w Pilniku</h1>
          <h2>-ZAPRASZAMY-</h2>
        </CaptionBackground>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <SlideItem src={Hero4} alt="Third slide" />
      <Carousel.Caption>
        <CaptionBackground>
          <h1>Gminny Ośrodek Kultury i Sportu w Pilniku</h1>
          <h2>-ZAPRASZAMY-</h2>
        </CaptionBackground>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Hero
