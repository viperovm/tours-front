import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/account/Dashboard'
import Tours from './pages/account/Tours/Tours'
import Chat from './pages/account/Dashboard'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/account' component={Dashboard} />
          <Route exact path='/account/tours' component={Tours} />
          <Route exact path='/account' component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
