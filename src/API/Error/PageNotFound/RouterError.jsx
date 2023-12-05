import React from 'react'
import { Link } from 'react-router-dom'

export default function RouterError() {
  return (
      <div className='w-100 mx-5 mt-5'>
        <h1>Page not found</h1>
          <p className='h4'>something went wrong</p>
          <Link to='/' className='btn btn-dark'>
              Go to home page
          </Link>
      </div>
  )
}
