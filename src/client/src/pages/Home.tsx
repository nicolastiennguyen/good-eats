import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Button, Col, Row } from "react-bootstrap"
import Business from '../components/Business'

export function Home() {
  const [businesses, setBusinesses] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const randomizeIndex = () => {
    let temp = Math.floor(Math.random() * 20);
    setRandomIndex(temp);
  }

  const renderBusiness = (randomNumber) => {
    return <Business {...businesses[randomNumber]}/>
  }

  useEffect(() => {
    axios
      .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer Gbp5j1Jg21WTUzhuq-P3U5PjDAeXOgChj7q7cshsZkSW_mqueLARN62xNq2Opf8h7jYz8LQ4sgXv8QDOr6h9n72nV8kKOnB-w8jMBHegau_gU4_goqDS8n7lzDYzY3Yx`,
        },
        params: {
          location: "SF",
          limit: 50
        },
      })
      .then((response: AxiosResponse) => {
        setBusinesses(response.data.businesses)
      })
      .catch(err => console.log('error: fetching businesses', err))
      randomizeIndex()
  }, [])

  return (
    <div>
      <h1>Welcome to Good Eats!</h1>
      <p>Don't know what to eat? Here's an option:</p>
      <div>
        {renderBusiness(randomIndex)}
      </div>
      <Button>Looks great! Let me save this.</Button>
      <Button onClick={() => {randomizeIndex()}}>Not feelin' this. Try again.</Button>
    </div>
  )
}