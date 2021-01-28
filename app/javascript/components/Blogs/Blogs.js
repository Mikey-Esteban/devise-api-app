import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Blogs = () => {

  const [ blogs, setBlogs ] = useState([])

  useEffect( () => {
    // axios headers for authorization
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': localStorage.getItem('token')
      }
    }
    
    axios.get('/api/v1/blogs', options)
      .then( resp => {
        debugger
        setBlogs(resp.data.data)
      })
      .catch( resp => console.log(resp) )
  }, [blogs.length])

  const list = blogs.map( item => <li key={item.attributes.slug}>{item.attributes.title}</li> )

  return (
    <Fragment>
      <div>MyComponent</div>
      <ul>{list}</ul>
    </Fragment>
  )
}

export default Blogs
