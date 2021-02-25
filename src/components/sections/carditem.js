import React from "react"
import { Card } from "react-bootstrap"

const CardItem = (title, featuredImage, published, excerpt) => (
  <>
    <Card
      style={{
        width: "18rem",
        height: "auto",
        minHeight: "730px",
        marginRight: "15px",
      }}
    >
      <Card.Body>
        <Card.Title>
          {title} <hr />
          <Card.Img variant="top" src={featuredImage} />
          <p>
            <small>Data publikacji: {published}</small>
          </p>
        </Card.Title>
        <Card.Text>{excerpt}</Card.Text>
      </Card.Body>
    </Card>
  </>
)

export default CardItem
