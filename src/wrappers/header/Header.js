import React, {useState, useEffect, useCallback, useMemo} from 'react'
import Logo from '../../components/logo/Logo'
import {Link} from 'react-router-dom'
import { load_user } from '../../redux/actions/authActions'

import { connect } from 'react-redux'
import UserSmallAvatar from '../../components/UserSmallAvatar/UserSmallAvatar'
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {
  set_users_offline,
  set_users_online,
  update_chat_room,
  update_chat_rooms,
} from "../../redux/actions/chatActions";

const Header = ({ isAuthenticated, load_user, user, page, set_users_online, set_users_offline, update_chat_rooms, update_chat_room }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [active, setActive] = useState('')

  let client = null

  client = useMemo(() => {
    if(isAuthenticated) {
      return new W3CWebSocket(`wss://traveler.market/ws/notification/?token=${localStorage.getItem('access')}`)
    } else if(!isAuthenticated && client){
      client.close()
      // return null
    } else {
      client?.close()
      return null
    }
  }, [isAuthenticated, client])

  useEffect(() => {
    if (client) {
      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };

      client.onclose = () => {
        console.log('WebSocket Client Disconnected');
      };

      client.onerror = (e) => {
        console.error(e);
        console.log('Connection Error');
      };

      client.onmessage = (e) => {
        const dataFromServer = JSON.parse(e.data);
        // console.log('got reply!');
        if (dataFromServer) {
          if(dataFromServer.is_online) {
            set_users_online(dataFromServer.is_online)
          } else if(dataFromServer.is_offline) {
            set_users_offline(dataFromServer.is_offline)
          } else if(dataFromServer.new_chat) {
            update_chat_rooms(dataFromServer.new_chat)
          } else if(dataFromServer.new_message) {
            update_chat_room(dataFromServer.new_message)
          }
        }
      };
    }
  }, [client])

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
              <Link to={isAuthenticated ? '/account/support' : '/login/support'} className={`buttons_block_travel ${active === 'support' ? 'active' : ''}`} onClick={() => setActive('support')}>Поддержка</Link>
              {/*<div className={`buttons_block_travel ${active === 'support' ? 'active' : ''}`} onClick={() => setActive('поддержка')}>Поддержка</div>*/}
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

export default connect(mapStateToProps, { load_user, set_users_online, set_users_offline, update_chat_rooms, update_chat_room })(Header)
