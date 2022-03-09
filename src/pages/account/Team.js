import React, { useEffect } from 'react'
import Account from '../../layouts/account/account'

import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const MyTeam = ({ status, setPage }) => {
  useEffect(() => {
    setPage('team')
  }, [])

  if (status === 'customers') {
    return <Redirect to='/404'/>
  }

  return (
    <Account menu_item='team' title='Моя команда'>
      <>
        {status === 'experts' && <div>Страница команды эксперта</div>}
        {/* {status === 'customers' && <div>Страница профиля клиента</div>} */}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(MyTeam)
