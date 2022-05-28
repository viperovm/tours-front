import React, {useEffect, Suspense, lazy, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch, useHistory, Redirect
} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store'

import { YMaps } from 'react-yandex-maps';

import './index.css'

const Home = lazy(() => import("./pages/Home"));

// import Home from './pages/Home'
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Dashboard = lazy(() => import('./pages/account/Dashboard'))
const Tours = lazy(() => import('./pages/Tours'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Blog = lazy(() => import('./pages/Blog'))
const SingleBlog = lazy(() => import('./pages/Blog/SingleBlog'))
const Tour = lazy(() => import('./pages/Tour'))
const MyTours = lazy(() => import('./pages/account/Tours/MyTours'))
const Chat = lazy(() => import('./pages/account/Chat'))
const Support = lazy(() => import('./pages/account/Support'))
const Profile = lazy(() => import('./pages/account/Profile/Profile'))
const Orders = lazy(() => import('./pages/account/Orders'))
const Settings = lazy(() => import('./pages/account/Settings/Settings'))
const Props = lazy(() => import('./pages/account/Props/Props'))
const Requests = lazy(() => import('./pages/account/Requests/Requests'))
const Team = lazy(() => import('./pages/account/Team'))
const TeamEdit = lazy(() => import('./pages/account/Team/TeamEdit'))
const TourPage = lazy(() => import('./pages/TourPage/TourPage'))

const Main = lazy(() => import('./components/AccountTours/Components/Main'))
const Review = lazy(() => import('./components/AccountTours/Components/Review'))
const Prices = lazy(() => import('./components/AccountTours/Components/Prices'))
const Gallery = lazy(() => import('./components/AccountTours/Components/Gallery'))
const TourRoute = lazy(() => import('./components/AccountTours/Components/Route'))
const Accommodation = lazy(() => import('./components/AccountTours/Components/Accommodation'))

const Details = lazy(() => import('./components/AccountTours/Components/Details'))
const Important = lazy(() => import('./components/AccountTours/Components/Important'))
const EmailActivate = lazy(() => import('./pages/account/EmailActivate/EmailActivate'))

import Page404 from './pages/404'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={
          <Box sx={{display: 'flex', width: '100%', height: '500px', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress/>
          </Box>
        }>
          {/*<Switch>*/}
          {/*  <Route exact path='/' component={Home} />*/}
          {/*  <Route exact path='/tours' component={Tours} />*/}
          {/*  <Route exact path='/reviews' component={Reviews} />*/}
          {/*  <Route exact path='/blog' component={Blog} />*/}
          {/*  <Route exact path='/blog/:id' component={SingleBlog} />*/}
          {/*  <Route exact path='/tours/:id' component={Tour} />*/}
          {/*  <Route path='/login' component={Login} />*/}
          {/*  <Route path='/register' component={Register} />*/}
          {/*  <Route path='/legal-documents/:slug' component={PrivacyPolicy} />*/}
          {/*  <Route exact path='/account' component={Dashboard} />*/}
          {/*  <Route exact path='/account/chat' component={Chat} />*/}
          {/*  <Route exact path='/account/profile' component={Profile} />*/}
          {/*  <Route exact path='/account/orders' component={Orders} />*/}
          {/*  <Route exact path='/account/settings' component={Settings} />*/}
          {/*  <Route exact path='/account/props' component={Props} />*/}
          {/*  <Route exact path='/account/requests' component={Requests} />*/}
          {/*  <Route exact path='/account/team' component={Team} />*/}
          {/*  <Route exact path='/account/team/:id/edit' component={TeamEdit} />*/}
          {/*  <Route exact path='/account/tours/list' component={MyTours} />*/}

          {/*  <Route exact path='/account/tours/:id/edit/main' component={Main} />*/}
          {/*  <Route exact path='/account/tours/:id/edit/review' component={Review} />*/}
          {/*  <Route exact path='/account/tours/:id/edit/prices' component={Prices} />*/}
          {/*  <Route exact path='/account/tours/:id/edit/gallery' component={Gallery} />*/}
          {/*  <Route exact path='/account/tours/:id/edit/route' component={TourRoute} />*/}
          {/*  <Route exact path='/account/tours/:id/edit/accommodation' component={Accommodation} />*/}
          {/*  <Route exact path='/account/tours/:id/edit/details' component={Details} />*/}
          {/*  <Route exact path='/account/tours/:id/edit/important' component={Important} />*/}

          {/*  <Route exact path='/account/tours/:id/edit/preview' component={TourPage} />*/}
          {/*  <Route exact path='/activate/:uid/:token' component={EmailActivate} />*/}
          {/*  <Route path='*' component={Page404} />*/}
          {/*</Switch>*/}
          <YMaps query={{ apikey: '7276fdc3-5ca1-4286-bdd3-76d17cce9e38' }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/tours' component={Tours} />
              <Route exact path='/reviews' component={Reviews} />
              <Route exact path='/article' component={Blog} />
              <Route exact path='/article/:slug' component={SingleBlog} />
              <Route exact path='/tours/:id' component={Tour} />
              <Route path='/login/:redirect?' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/legal-documents/:slug' component={PrivacyPolicy} />
              <Route exact path='/account' component={Dashboard} />
              <Route exact path='/account/chat' component={Chat} />
              <Route exact path='/account/support' component={Support} />
              <Route exact path='/account/profile' component={Profile} />
              <Route exact path='/account/orders' component={Orders} />
              <Route exact path='/account/settings' component={Settings} />
              <Route exact path='/account/props' component={Props} />
              <Route exact path='/account/requests' component={Requests} />
              <Route exact path='/account/team' component={Team} />
              <Route exact path='/account/team/:id/edit' component={TeamEdit} />
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
          </YMaps>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
