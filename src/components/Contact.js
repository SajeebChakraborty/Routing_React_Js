import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {

  const navigate = useNavigate()

  return (
    <div>

      <h1>Contact Page</h1>
    <p>This a contact page</p>

    <button onClick={()=> {navigate("/")}}>Go to back home page</button>

    </div>
  )
}
