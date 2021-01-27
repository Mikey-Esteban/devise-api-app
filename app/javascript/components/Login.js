import React from 'react'
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

const Login = (props) => {
  return (
    <Wrapper>
      <form onSubmit={props.handleLogin}>

        <Field>
          <label htmlFor="email">Email</label>
          <input onChange={props.handleChange} value={props.user.email || ''} type="email" name="email" placeholder="enter email here" required/>
        </Field>

        <Field>
          <label htmlFor="password">Password</label>
          <input onChange={props.handleChange} value={props.user.password || ''} type="password" name="password" placeholder="enter password here" required/>
        </Field>

        <Field>
          <input type="submit" value="Log in!" />
        </Field>
      </form>
    </Wrapper>
  )
}

export default Login
