import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'


const blogsData = [

    {
        id: 1,
        title: 'Blog1',
        content: 'Blog 1 content'
    },

    {
        id: 2,
        title: 'Blog2',
        content: 'Blog 2 content'
    },
    {
        id: 3,
        title: 'Blog3',
        content: 'Blog 3 content'
    },
    {
        id: 4,
        title: 'Blog4',
        content: 'Blog 4 content'
    },
    {
        id: 5,
        title: 'Blog5',
        content: 'Blog 5 content'
    }

    
];



export default function Blog() {

    
const [body,setBody] = useState("")
 
const {title} = useParams()

useEffect(() => {
    const blog = blogsData.find((blog) => blog.title === title)
    setBody(blog.content)
    }, [title])

  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  )
}
