import React, {lazy} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch, useHistory, Redirect
} from 'react-router-dom'
import {connect} from 'react-redux'

const Home = lazy(() => import("./pages/Home"));

const RouterPages = ({match, language}) => {

  const {url} = match

  console.log(1111)

  return (
    <Router>
      <Switch>
        <Route path={`/${language}`} component={Home} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language
})

export default connect(mapStateToProps)(RouterPages)
