import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 100px auto;
  width: 600px;
`

const Field = styled.div`
  margin-top: 20px;

  label, input {
    width: 100%;
  }
`

const Signup = () => {

  const [ user, setUser ] = useState({})
  const [ redirect, setRedirect ] = useState(false)

  const handleSignup = e => {
    e.preventDefault()

    if ( checkPasswordConfirmation() === false ) {
      console.log('Ooops, your password confirmation doesnt match your password.');
    } else {
      // make axios post request to create new registration
      axios.post('signup', {user})
        .then( resp => {
          debugger
          setUser({})
          setRedirect(true)
        })
        .catch( resp => console.log(resp) )
    }
  }

  const handleChange = e => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const checkPasswordConfirmation = () => {
    return user.password === user.password_confirmation
  }

  if (redirect) {
    return <Redirect to='/blogs'/>;
  }

  return (
    <Wrapper>
      <form onSubmit={handleSignup}>
        <Field>
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} type="text" name="name" placeholder="enter name here" required/>
        </Field>

        <Field>
          <label htmlFor="username">Username</label>
          <input onChange={handleChange} type="text" name="username" placeholder="enter username here" required/>
        </Field>

        <Field>
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" name="email" placeholder="enter email here" required/>
        </Field>

        <Field>
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} type="password" name="password" placeholder="enter password here" required/>
        </Field>

        <Field>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input onChange={handleChange} type="password" name="password_confirmation" placeholder="enter password_confirmation here" required/>
        </Field>

        <Field>
          <input type="submit" value="Sign up!" />
        </Field>
      </form>
    </Wrapper>
  )
}

export default Signup
