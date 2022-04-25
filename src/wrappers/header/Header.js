import React, {useState, useEffect} from 'react'
import Logo from '../../components/logo/Logo'
import {Link} from 'react-router-dom'
import { load_user } from '../../redux/actions/authActions'

import { connect } from 'react-redux'
import UserSmallAvatar from '../../components/UserSmallAvatar/UserSmallAvatar'

const Header = ({ isAuthenticated, load_user, user, page }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    if(isAuthenticated){
      load_user()
    }
  }, [])

  useEffect(() => {
    if(page){
      setActive(page)
    }
  }, [page])

  const toggleOpened = () => {
    setIsOpened(!isOpened)
  }
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='header_content'>
            <div className='mobile_menu' onClick={toggleOpened}></div>
            <div
              className={`mobile_menu_menu ${
                isOpened ? 'mobile_menu_visible' : 'mobile_menu_hidden'
              }`}
              id='mob_menu'
            >
              <a href=''>Подберите мне тур</a>
              <a href=''>Путешествия</a>
              <a href=''>Поддержка</a>
              <a href=''>Выбрать язык</a>
              <a href=''>Выбрать валюту</a>
              <a href=''>Избранное</a>
            </div>
            <Logo />
            <div className='buttons_block'>
              <div className='buttons_block_find_tour'>Подберите мне тур</div>
              <Link to='/tours' className={`buttons_block_travel ${active === 'tours' ? 'active' : ''}`} onClick={() => setActive('tours')}>Путешествия</Link>
              <div className={`buttons_block_travel ${active === 'поддержка' ? 'active' : ''}`} onClick={() => setActive('поддержка')}>Поддержка</div>
              <div className='buttons_block_country'>
                <img src='./img/Flag.svg' alt='' />
              </div>
              <div className='buttons_block_currency'>&#8381; (Rub)</div>
              <div className='buttons_block_liked'></div>
            </div>

            {isAuthenticated ? (
              <div className='margin-left'>
                <div className='user-account-name-wrapper'>
                  <Link to='/account'>
                    <div className='user-account-avatar'>
                      <UserSmallAvatar />
                      {/* <UserAvatar user={user} /> */}
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              <Link to='/login' className='login_block'>
                Вход
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

export default connect(mapStateToProps, { load_user })(Header)
