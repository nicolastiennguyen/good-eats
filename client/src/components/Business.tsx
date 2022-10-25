import React from 'react'
import { Card } from 'react-bootstrap'

type BusinessProps = {
  id: number,
  name: string,
  image_url: string,
  url: string,
  rating: number,
  price: string,
  location: location
}

type location = {
  address1: string,
  address2: string,
  address3: string,
  city: string,
  zip_code: string,
  country: string,
  state: string,
  display_address: display_address
}

type display_address = {
  address1: string
  address2: string
}

export default function Business({ id, name, image_url, url, rating, price, location }: BusinessProps) {
  return (
    <Card className="h-100">
      <Card.Img className="center-block" variant="top" src={image_url} alt="restaurant-img" onClick={() => window.location.href=url} height="500px" style={{ objectFit: "cover", cursor: "pointer" }} />
      <Card.Body>
        <Card.Title>
          <div className="fs-3">{name}</div>
          <div className="d-flex">
          <div className="ms-1 text-muted">{
              location ? location.display_address ? `${location.display_address[0]} ${location.display_address[1]}` : `${location}` : null
          }</div>
          </div>
          <div className="ms-1 text-muted">Rating: {rating}/5</div>
          <div className="ms-1 text-muted">{price}</div>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}