import React from "react"
import { Card, Button } from "react-bootstrap"


const CardItem = () => (
  <>
    <Card style={{ width: "18rem" }}>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=742318166511449&autoLogAppEvents=1"
        nonce="Y1IpYF5K"
      ></script>
      <div
        id="home"
        class="fb-video container-darker"
        data-href="https://www.facebook.com/<?php echo $streamer->facebook; ?>/live"
        data-show-text="false"
        data-width="1150"
        data-autoplay="true"
      ></div>
      <Card.Body>
        <Card.Title>Koncert Walentynkowy </Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Zobacz więcej</Button>
      </Card.Body>
    </Card>
  </>
)

export default CardItem
