import * as React from 'react'
import { Link } from 'gatsby'

export default function Delay() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <h1>Delayed Page</h1>
    </>
  )
}


export async function getServerData() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return {
    props: {
    },
  }
}
