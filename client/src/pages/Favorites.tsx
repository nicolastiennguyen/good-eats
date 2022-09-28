import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Col, Row } from 'react-bootstrap'
import Business from '../components/Business'
import { Restaurant } from '../utilities/interfaces'

export function Favorites() {

  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios
      .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer Gbp5j1Jg21WTUzhuq-P3U5PjDAeXOgChj7q7cshsZkSW_mqueLARN62xNq2Opf8h7jYz8LQ4sgXv8QDOr6h9n72nV8kKOnB-w8jMBHegau_gU4_goqDS8n7lzDYzY3Yx`,
        },
        params: {
          location: "SF"
        },
      })
      .then((response: AxiosResponse) => {
        setBusinesses(response.data.businesses)
        // console.log('Response: ', response.data.businesses);
        // let { businesses } = response.data
        // console.log('destructured: ', businesses)
      })
      .catch(err => console.log('error: fetching businesses', err))
  }, [])

  return (
    <>
      <h1>Favorites</h1>
      <p>Description: This could be selected favorites from the website owner</p>
      <Row xs={1} md = {2} lg={3} className="g-3">
        {businesses.map(business => (
          <Col key={business.id}>
            <Business {...business}/>
          </Col>
        ))}
      </Row>
    </>
  )
}
