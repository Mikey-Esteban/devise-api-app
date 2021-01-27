import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Blogs = () => {

  const [ blogs, setBlogs ] = useState([])

  useEffect( () => {
    // api call
    axios.get('/api/v1/blogs')
      .then( resp => setBlogs(resp.data.data) )
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
