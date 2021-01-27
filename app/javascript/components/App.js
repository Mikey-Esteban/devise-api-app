import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Home from './Home'
// import Signup from './Signup'
import Blogs from './Blogs/Blogs'

const App = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/signup" component={Signup} /> */}
      <Route exact path="/" component={Blogs} />
    </Switch>
  )
}

export default App
