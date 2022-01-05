import * as React from 'react'
import { Link } from 'gatsby'

export default function Home (props) {
  return (
    <>
      <h1>Rendering Modes Starter</h1>
      <ul>
        <li>
          <Link to='/aviation'>SSR page</Link>
        </li>
      </ul>
    </>
  )
}
