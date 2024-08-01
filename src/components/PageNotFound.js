import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <h2>You are loking for page but page is not Available.</h2>
        <br></br>
        <Link to="*">Click to here login page</Link>
    </div>
  )
}

export default PageNotFound