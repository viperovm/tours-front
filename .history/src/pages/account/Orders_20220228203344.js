import React, { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

import { useHistory } from 'react-router-dom'

const Orders = ({ status, setPage }) => {
  useEffect(() => {
    setPage('orders')
  }, [])

  const history = useHistory()

  if (status === 'customers') {
    Router.push('/does-not-exist')
  }

  if (isAuthenticated) {
    history.push('/account')
  }

  useEffect(() => {
    if (status === 'customers') {
      Router.push('/does-not-exist')
    }
  }, [status])

  return (
    <Account>
      <>
        {status === 'experts' && <div>Страница заказов эксперта</div>}
        {/* {status === 'customers' && <div>Страница профиля клиента</div>} */}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
})

export default connect(mapStateToProps, { setPage })(Orders)
