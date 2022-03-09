import React, { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'
import {Redirect} from "react-router-dom";

const Bookings = ({ status, setPage }) => {
  useEffect(() => {
    setPage('bookings')
  }, [])

  if (status === 'experts') {
    return <Redirect to='/404'/>
  }

  return (
    <Account>
      <>
        {/* {status === 'experts' && <div>Страница команды эксперта</div>} */}
        {status === 'customers' && <div>Страница броней клиента</div>}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Bookings)
