import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Pages/home'
import Profile from '../Pages/profile'
import './App.scss'

const App = () => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
  </Switch>
)

export default App
