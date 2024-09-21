import React from 'react'
import { Link } from 'react-router-dom'


export default function Start() {
  return (
    <div>
      <Link className="btn btn-primary mx-1" to="/login" role="button">login</Link>
          <Link className="btn btn-primary mx-1" to="/signup" role="button">signUp</Link>
          </div>
    
  )
}
