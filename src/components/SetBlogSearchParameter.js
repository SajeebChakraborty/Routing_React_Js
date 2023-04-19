import React from 'react'
import { useState } from 'react'

import { useSearchParams } from 'react-router-dom'

export default function SetBlogSearchParameter() {

  const[searchParams, setSearchParams] = useSearchParams()

  const[name, setName] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()
    setSearchParams({name: name})

    }


  return (
    <div>

      <form onSubmit={handleSubmit}>

        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

        <button type="submit">Submit</button>


      </form>

  
    </div>
  )
}
