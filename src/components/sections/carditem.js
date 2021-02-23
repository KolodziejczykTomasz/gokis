import React from "react"
import { Card } from "react-bootstrap"


const CardItem = ({ newsItem: { data, title, excerpt, url } }) => (
  <>
    <Card style={{ width: "18rem", height: "auto", minHeight: "730px",marginRight: "15px" }}>
      <Card.Body>
        <Card.Title>
          {title} <hr />
          <Card.Img variant="top" src={url} />
          <p>
            <small>Data publikacji: {data}</small>
          </p>
        </Card.Title>
        <Card.Text>{excerpt}</Card.Text>
      </Card.Body>
    </Card>
  </>
)

export default CardItem
