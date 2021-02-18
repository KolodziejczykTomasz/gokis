import React from "react"
import { Card, Button } from "react-bootstrap"
import { FacebookProvider, EmbeddedPost } from "react-facebook"

const CardItem = () => (
  <>
    <Card style={{ width: "18rem" }}>
      <FacebookProvider appId="241343664305984">
        <EmbeddedPost
          href="https://www.facebook.com/Gminny-Ośrodek-Kultury-i-Sportu-w-Pilniku-401376726727548/videos/2F401376726727548/"
          width="287"
        />
      </FacebookProvider>
      <Card.Body>
        <Card.Title>Koncert Walentynkowy </Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Zobacz więcej</Button>
      </Card.Body>
    </Card>
  </>
)

export default CardItem
