import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Dashboard from './pages/account/Dashboard'
import Tours from './pages/Tours'
import Tour from './pages/Tour'
import MyTours from './pages/account/Tours/MyTours'
import Chat from './pages/account/Chat'
import Profile from './pages/account/Profile/Profile'
import Orders from './pages/account/Orders'
import Settings from './pages/account/Settings/Settings'
import Props from './pages/account/Props/Props'
import Requests from './pages/account/Requests/Requests'
import Team from './pages/account/Team'
import TeamEdit from './pages/account/Team/TeamEdit'
import TourPage from './pages/TourPage/TourPage'

import Main from './components/AccountTours/Components/Main'
import Review from './components/AccountTours/Components/Review'
import Prices from './components/AccountTours/Components/Prices'
import Gallery from './components/AccountTours/Components/Gallery'
import TourRoute from './components/AccountTours/Components/Route'
import Accommodation from './components/AccountTours/Components/Accommodation'

import Details from './components/AccountTours/Components/Details'
import Important from './components/AccountTours/Components/Important'
import EmailActivate from './pages/account/EmailActivate/EmailActivate'

import Page404 from './pages/404'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tours' component={Tours} />
          <Route exact path='/tours/:id' component={Tour} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/privacy' component={PrivacyPolicy} />
          <Route exact path='/account' component={Dashboard} />
          <Route exact path='/account/chat' component={Chat} />
          <Route exact path='/account/profile' component={Profile} />
          <Route exact path='/account/orders' component={Orders} />
          <Route exact path='/account/settings' component={Settings} />
          <Route exact path='/account/props' component={Props} />
          <Route exact path='/account/requests' component={Requests} />
          <Route exact path='/account/team' component={Team} />
          <Route exact path='/account/team/edit' component={TeamEdit} />
          <Route exact path='/account/tours/list' component={MyTours} />

          <Route exact path='/account/tours/:id/edit/main' component={Main} />
          <Route exact path='/account/tours/:id/edit/review' component={Review} />
          <Route exact path='/account/tours/:id/edit/prices' component={Prices} />
          <Route exact path='/account/tours/:id/edit/gallery' component={Gallery} />
          <Route exact path='/account/tours/:id/edit/route' component={TourRoute} />
          <Route exact path='/account/tours/:id/edit/accommodation' component={Accommodation} />
          <Route exact path='/account/tours/:id/edit/details' component={Details} />
          <Route exact path='/account/tours/:id/edit/important' component={Important} />

          <Route exact path='/account/tours/:id/edit/preview' component={TourPage} />
          <Route exact path='/activate/:uid/:token' component={EmailActivate} />
          <Route path='*' component={Page404} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
