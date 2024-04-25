import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <h1>Homepage</h1>
      <Link to='/case-study'>Case Study</Link> <br />
      <Link to='/component-gallery'>Component Gallery</Link>
    </>
  )
}

export default HomePage
