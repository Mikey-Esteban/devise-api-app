import React, { useState, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import Login from './Login'

const Wrapper = styled.div`
  margin: 100px auto;
  width: 600px;
`
const LinkWrapper = styled.div`
  margin-top: 50px;

  a {
    border: 1px solid #fca311 ; /* orange*/
    border-radius: 4px;
    padding: 10px 20px;

    color: #fca311;
    text-decoration: none;

    transition: all ease-in-out 150ms;
  }

  a:hover {
    color: #fff;
    background: #fca311;
  }
`

const Home = () => {

  const [ user, setUser ] = useState({})
  const [ redirect, setRedirect ] = useState(false)

  const handleChange = e => {
    console.log('name:', e.target.name, 'value:', e.target.value);
    setUser({...user, [e.target.name]:e.target.value})
  }

  const handleLogin = e => {
    e.preventDefault()

    // axios post log in request
    axios.post('/login', {user: user})
      .then( resp => {
        debugger
        setRedirect(true)
      })
      .catch( resp => console.log(resp) )
  }

  if (redirect) {
    return <Redirect to='/blogs'/>;
  }

  return (
    <Wrapper>
      <div>Hello World!</div>
      <Login handleLogin={handleLogin} handleChange={handleChange} user={user} />
      <LinkWrapper>
        <Link to={`/signup`}>Sign up!</Link>
      </LinkWrapper>
    </Wrapper>
  )
}

export default Home
