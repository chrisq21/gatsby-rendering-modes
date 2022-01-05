import * as React from 'react'
import fetch from 'node-fetch'
import { Link } from 'gatsby'

export default function Aviation(props) {
  const { airports } = props.serverData

  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <h1>Airports</h1>
      <p>Fetch flight data from the FlightAware api on the server for each airport.</p>
      <ul>
        {airports?.map((airportData) => (
          <li><a href={`/flights?airport=${airportData.code}`} key={airportData.code}>{airportData.code}</a></li>
        ))}
      </ul>
    </>
  )
}


export async function getServerData() {
  const data = await fetch(`https://aeroapi.flightaware.com/aeroapi/airports`, {
    headers: {
      'x-apikey': process.env.FLIGHT_AWARE_KEY
    }
  }).then((res) => res.json())
  console.log('request airports')
  return {
    props: {
      airports: data.airports,
    },
  }
}
