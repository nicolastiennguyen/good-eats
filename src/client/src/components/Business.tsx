import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

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
      <Card.Img className="center-block" variant="top" src={image_url} onClick={() => window.location.href=url} height="600px" style={{ objectFit: "cover", cursor: "pointer" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{
            location ? `${location.display_address[0]} ${location.display_address[1]}` : null
          }</span>
          <span className="ms-2 text-muted">{rating}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
        {/* <div className="mt-auto">
          {addedToFavorites ? (
            <Button className="w-100" onClick={() => (setAddedToFavorites(false))}>+ Add to Favorites</Button>
          )
          : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
              <div className="d-flex align-items-center justify-content-center">
                Added to Favorites!
              </div>
              <Button variant="danger" onClick={() => (setAddedToFavorites(true))}size="sm">Remove</Button>
            </div>}
        </div> */}
      </Card.Body>
    </Card>
  )
}