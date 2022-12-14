import React, { useEffect, useState } from 'react';
import Business from '../components/Business';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

export function Saved() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    fetchSaved();
  }, []);

  const fetchSaved = () => {
    axios
      .get('http://localhost:4000/businesses')
      .then((res) => setSaved(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Saved Restaurants</h1>
      <h5>Recently Saved:</h5>
      <Row xs={1} md={2} lg={3} className="g-3">
        {saved.map((business) => (
          <Col key={business.id}>
            <Business {...business} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
