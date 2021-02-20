import React from "react"
import { Carousel } from "react-bootstrap"
import Hero1 from '../assets/images/hero/hero1.jpg'
import Hero2 from "../assets/images/hero/hero2.jpg"
import Hero3 from "../assets/images/hero/hero3.jpg"
import Hero4 from "../assets/images/hero/hero4.jpg"

import "bootstrap/dist/css/bootstrap.min.css"


const Hero = () => (
  <Carousel>
    <Carousel.Item interval={1500}>
      <img className="d-block w-100" src={Hero1} alt="First slide" />
      <Carousel.Caption>
        <h1>Gminny Ośrodek Kultury i Sportu w Pilniku</h1>
        <h2>-ZAPRASZAMY-</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img className="d-block w-100" src={Hero2} alt="Third slide" />
      <Carousel.Caption>
        <h1>Gminny Ośrodek Kultury i Sportu w Pilniku</h1>
        <h2>-ZAPRASZAMY-</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={Hero3} alt="Third slide" />
      <Carousel.Caption>
        <h1>Gminny Ośrodek Kultury i Sportu w Pilniku</h1>
        <h2>-ZAPRASZAMY-</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={Hero4} alt="Third slide" />
      <Carousel.Caption>
        <h1>Gminny Ośrodek Kultury i Sportu w Pilniku</h1>
        <h2>-ZAPRASZAMY-</h2>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Hero
