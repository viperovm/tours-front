import { useEffect } from 'react'
import Account from '../../layouts/account/account'

import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { setPage } from '../../redux/actions/authActions'

const MyTeam = ({ status, setPage }) => {
  useEffect(() => {
    setPage('team')
  }, [])

  const history = useHistory()

  if (status === 'customers') {
    history.push('/does-not-exist')
  }

  return (
    <Account>
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
