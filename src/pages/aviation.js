import * as React from 'react'
import fetch from 'node-fetch'
import {Link} from 'gatsby'

export default function Aviation(props) {
  const {aviationData} = props.serverData
  console.log(aviationData)

  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <h1>Torrey Pines Gliderport</h1>
      {aviationData?.arrivals.length && <h2>Arrivals</h2>}
      {aviationData?.arrivals?.map((arrivalData) => (
        <li key={arrivalData.ident}>Flight ID: {arrivalData.ident}</li>
      ))}
      {aviationData?.departures.length && <h2>Departures</h2>}
      {aviationData?.departures?.map((departureData) => (
        <li key={departureData.ident}>Flight ID: {departureData.ident}</li>
      ))}
    </>
  )
}


export async function getServerData({params}) {
  const data = await fetch(`https://aeroapi.flightaware.com/aeroapi/airports/CA84/flights`, {
    headers: {
      'x-apikey': process.env.FLIGHT_AWARE_KEY
    }
  }).then((res) => res.json())
  console.log("data from server: ", data)
  return {
    props: {
      aviationData: data,
    },
  }
}
