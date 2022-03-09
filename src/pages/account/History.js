import React, { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'
import {Redirect} from "react-router-dom";

const History = ({ status, setPage }) => {
  useEffect(() => {
    setPage('history')
  }, [])

  if (status === 'experts') {
    return <Redirect to='/404'/>
  }

  return (
    <Account>
      <>
        {/* {status === 'experts' && <div>Страница реквизитов эксперта</div>} */}
        {status === 'customers' && <div>Страница истории путешествий клиента</div>}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(History)
