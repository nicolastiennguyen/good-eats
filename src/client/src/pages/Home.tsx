import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Button, Col, Row } from "react-bootstrap"
import Business from '../components/Business'

export function Home() {
  const [businesses, setBusinesses] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [search, setSearch] = useState('')

  const randomizeIndex = () => {
    let temp = Math.floor(Math.random() * 50);
    setRandomIndex(temp);
  }

  const renderBusiness = (randomNumber) => {
    return <Business {...businesses[randomNumber]}/>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer Gbp5j1Jg21WTUzhuq-P3U5PjDAeXOgChj7q7cshsZkSW_mqueLARN62xNq2Opf8h7jYz8LQ4sgXv8QDOr6h9n72nV8kKOnB-w8jMBHegau_gU4_goqDS8n7lzDYzY3Yx`,
      },
      params: {
        location: `${search}`,
        limit: 50
      },
    })
    .then((response: AxiosResponse) => {
      setBusinesses(response.data.businesses)
    })
    .catch(err => {
      console.log('error: fetching businesses', err);
      alert(`No results for "${search}" \nSuggestions for improving your results:\n\u2022 Try a larger search area\n\u2022 Try a different location\n\u2022 Check the spelling or try alternate spellings\n\u2022 Try a more general search, e.g."pizza" instead of "pepperoni"`)
    })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const saveBusiness = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/businesses', {
      id: `${businesses[randomIndex].id}`,
      name: `${businesses[randomIndex].name}`,
      image_url: `${businesses[randomIndex].image_url}`,
      url: `${businesses[randomIndex].url}`,
      rating: `${businesses[randomIndex].rating}`,
      price: `${businesses[randomIndex].price}`,
      location: `${businesses[randomIndex].location.display_address[0]} ${businesses[randomIndex].location.display_address[1]}`
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => console.log('successfully posted'))
    .catch((err) => console.log('error posting: ', err))
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
      .catch(err => {
        console.log('error: fetching businesses', err)
      })
      randomizeIndex()
  }, [])

  return (
    <div>
      <h1>Welcome to Good Eats!</h1>
      <h5 className="m-3">Don't know what to eat? Here's an option:</h5>
      <div>
        {renderBusiness(randomIndex)}
      </div>
      <div className="d-flex justify-content-center">
        <Button className="m-3 btn-lg" onClick={saveBusiness}>Looks great! Let me save this.</Button>
        <Button onClick={() => {randomizeIndex()}} className="m-3 btn-lg">Not feelin' this. Try again.</Button>
      </div>
      <form onSubmit={handleSubmit} className="m-3 h6">
        <span>
          <label>
            Not in the area? Change your location:
            <input type="text" placeholder="ex: NYC, 96815" onChange={handleChange} className="m-1"/>
          </label>
        </span>
        <Button type="submit" className="m-1 btn-sm">Submit</Button>
      </form>
    </div>
  )
}