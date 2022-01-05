import * as React from 'react'
import { Link } from 'gatsby'

export default function Random(props) {
  const { randomNum } = props.serverData
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <h1>Random Number: {randomNum}</h1>
    </>
  )
}

export async function getServerData() {
  const randomNum = Math.floor(Math.random() * 100)
  return {
    props: {
      randomNum
    },
  }
}
