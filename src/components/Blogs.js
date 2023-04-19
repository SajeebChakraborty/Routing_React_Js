import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

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


export default function Blogs() {

  const[blogs, setBlogs] = React.useState(blogsData);

  console.log(blogs);

  return (
    <div>

      <h1>Blogs Page</h1>
     
      <section>
        {blogs.map((blog) => {
            const {id,title,content} = blog;
            return (
                <article >
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <Link to={title}>Learn More</Link>
                </article>
            )
        })}

       

      </section>
      
    </div>
  )
}
