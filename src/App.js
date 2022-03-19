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
import Tours from './pages/account/Tours/MyTours'
import Chat from './pages/account/Chat'
import Profile from './pages/account/Profile/Profile'
import Orders from './pages/account/Orders'
import Settings from './pages/account/Settings/Settings'
import Props from './pages/account/Props'
import Requests from './pages/account/Requests'
import Team from './pages/account/Team'
import TourPage from './pages/TourPage/TourPage'

import Common from './components/AccountTours/Components/Common'
import Prices from './components/AccountTours/Components/Prices'
import Cancellation from './components/AccountTours/Components/Cancellation'
import Details from './components/AccountTours/Components/Details'
import Days from './components/AccountTours/Components/Days'
import Leader from './components/AccountTours/Components/Leader'
import Conditions from './components/AccountTours/Components/Conditions'
import ExtraServices from './components/AccountTours/Components/ExtraServices'
import Important from './components/AccountTours/Components/Important'
import Photos from './components/AccountTours/Components/Photos'

import Page404 from './pages/404'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/account' component={Dashboard} />
          <Route exact path='/account/chat' component={Chat} />
          <Route exact path='/account/profile' component={Profile} />
          <Route exact path='/account/orders' component={Orders} />
          <Route exact path='/account/settings' component={Settings} />
          <Route exact path='/account/props' component={Props} />
          <Route exact path='/account/requests' component={Requests} />
          <Route exact path='/account/team' component={Team} />
          <Route exact path='/account/tours/list' component={Tours} />
          <Route exact path='/account/tours/edit/common' component={Common} />
          <Route exact path='/account/tours/edit/prices' component={Prices} />
          <Route exact path='/account/tours/edit/options' component={Cancellation} />
          <Route exact path='/account/tours/edit/details' component={Details} />
          <Route exact path='/account/tours/edit/day' component={Days} />
          <Route exact path='/account/tours/edit/leader' component={Leader} />
          <Route exact path='/account/tours/edit/conditions' component={Conditions} />
          <Route exact path='/account/tours/edit/services' component={ExtraServices} />
          <Route exact path='/account/tours/edit/important' component={Important} />
          <Route exact path='/account/tours/edit/photos' component={Photos} />
          <Route exact path='/account/tours/edit/preview' component={TourPage} />
          <Route path='*' component={Page404} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
