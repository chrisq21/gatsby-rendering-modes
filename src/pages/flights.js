import * as React from 'react'
import fetch from 'node-fetch'
import { Link } from 'gatsby'

export default function Flights(props) {
  const { airportCode, arrivals, departures } = props.serverData

  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <a href="/airports">Airports</a>
      <br />
      <h1>Airport Code: {airportCode}</h1>
      {!arrivals || arrivals.length === 0 && <h2>Arrivals: None found.</h2>}
      {arrivals?.length > 0 && <h2>Arrivals</h2>}
      {arrivals?.map((arrivalData) => (
        <li key={arrivalData.ident}>Flight ID: {arrivalData.ident}</li>
      ))}
      {!departures || departures.length === 0 && <h2>Departures: None found.</h2>}
      {departures?.length > 0 && <h2>Departures</h2>}
      {departures?.map((departureData) => (
        <li key={departureData.ident}>Flight ID: {departureData.ident}</li>
      ))}
    </>
  )
}


export async function getServerData({ query }) {
  const data = await fetch(`https://aeroapi.flightaware.com/aeroapi/airports/${query.airport}/flights`, {
    headers: {
      'x-apikey': process.env.FLIGHT_AWARE_KEY
    }
  }).then((res) => res.json())
  console.log(query.airport)
  return {
    props: {
      airportCode: query.airport,
      arrivals: data?.arrivals,
      departures: data?.departures,
    },
  }
}
