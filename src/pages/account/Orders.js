import React, { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

import { Redirect } from 'react-router-dom'

const Orders = ({ status, setPage }) => {
  useEffect(() => {
    setPage('orders')
  }, [])

  if (status === 'customers') {
    return <Redirect to='/404'/>
  }

  return (
    <Account menu_item='orders' title='Заказы'>
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
