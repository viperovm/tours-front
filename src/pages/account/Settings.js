import React, { useEffect } from 'react'
import Account from '../../layouts/account/account'

import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const Settings = ({ status, setPage }) => {

  if (status === 'customers') {
    return <Redirect to='/404'/>
  }

  useEffect(() => {
    setPage('settings')
  }, [])

  return (
    <Account menu_item='settings' title='Настройка'>
      <>
        {status === 'experts' && (
          <div>Страница настройки эксперта</div>
        )}
        {/* {status === 'customers' && <div>Страница профиля клиента</div>} */}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Settings)
