import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const Requests = ({ status, setPage }) => {

  const history = useHistory()

  if (status === 'customers') {
    history.push('/does-not-exist')
  }

  useEffect(() => {
    setPage('requests')
  }, [])

  return (
    <Account>
      <>
        {status === 'experts' && (
          <div>Страница Запросов на проверку эксперта</div>
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

export default connect(mapStateToProps, { setPage })(Requests)
