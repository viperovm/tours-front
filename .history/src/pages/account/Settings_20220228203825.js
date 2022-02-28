import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const Settings = ({ status, setPage }) => {
  const history = useHistory()
  

  if (status === 'customers') {
    history.push('/does-not-exist')
  }

  useEffect(() => {
    setPage('settings')
  }, [])

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
