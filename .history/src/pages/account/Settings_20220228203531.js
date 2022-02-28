import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import Router from 'next/router'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const Settings = ({ status, setPage }) => {
  useEffect(() => {
    setPage('settings')
  }, [])

  if (status === 'customers') {
    history.push('/does-not-exist')
  }

  return (
    <Account>
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
