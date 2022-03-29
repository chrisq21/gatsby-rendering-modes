import * as React from 'react'

export default function Home() {
  return (
    <>
      <h1>Server Side Rendering Examples</h1>
      <h2>API Requests From Server (FlightAware API)</h2>
      <ul>
        <li>
          <a href='/airports'>Airports</a>
          <p>Fetch data for 10 airports from server then render.</p>
        </li>
        <li>
          <a href={`/flights?airport=CA84`} key='CA84'>Torrey Pines Gliderport Flights (CA84)</a>
          <p>Fetch CA84 flight data from server then render.</p>
        </li>
        <li>
          <a href={`/flights?airport=ATL`} key='ATL'>Atlanta Airport Flights (ATL)</a>
          <p>Fetch ATL flight data from server then render.</p>
        </li>
      </ul>
      <h2>Run Simple Logic on Server (no requests)</h2>
      <ul>
        <li>
          <a href='/random'>Random Number</a>
          <p>Determine a random number on the server then render.</p>
        </li>
        <li>
          <a href='/delay'>Delay</a>
          <p>Wait for 5 seconds then render.</p>
        </li>
      </ul>
    </>
  )
}
