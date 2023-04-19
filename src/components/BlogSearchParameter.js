import React from 'react'

import { useSearchParams } from 'react-router-dom'

export default function BlogSearchParameter() {

  const[searchParams, setSearchParams] = useSearchParams()

  return (
    <div>
      <h1>{searchParams.get("id")}</h1>
    </div>
  )
}
