import React from 'react'
import { Card } from "react-bootstrap"

type BusinessProps = {
  name: string,
  image_url: string,
  url: string,
  rating: number,
  price: string,
}

export default function Business({ name, image_url, url, rating, price }: BusinessProps) {
  return (
    <Card>
      <Card.Img variant="top" src={image_url} height="200px" style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}