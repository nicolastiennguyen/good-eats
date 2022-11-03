import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Col, Row } from 'react-bootstrap';
import Business from '../components/Business';

export function Favorites() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/yelp/SJ/30`)
      .then((response: AxiosResponse) => {
        setBusinesses(response.data.businesses);
      })
      .catch((err) => console.log('error: fetching businesses', err));
  }, []);

  return (
    <>
      <h1>Favorites</h1>
      <h5>Some of our current favorites hand-selected for you!</h5>
      <Row xs={1} md={2} lg={3} className="g-3">
        {businesses.map((business) => (
          <Col key={business.id}>
            <Business {...business} />
          </Col>
        ))}
      </Row>
    </>
  );
}
