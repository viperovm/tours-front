import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import {login, checkAuthenticated, clear_errors} from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Input from "../components/AccountTours/FormFields/Input";
import PopUp from "../components/PopUp/PopUp";


const Login = ({ isAuthenticated, login, checkAuthenticated, error, clear_errors,
                 reg_status }) => {


  const [data, setData] = useState({})
  const [check, setCheck] = useState(true)

  console.log('error: ', error)

  if (isAuthenticated) {
    // setData({})
    return <Redirect to="/account" />
  }

  const handleCheckbox = () => {
    setCheck(!check)
  }

  const handleData = (name, value) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleAction = e => {
    e.preventDefault()
    clear_errors()
    login(data)
    // setData({})
  }

  return (
    <MainLayout>
      <>
        {/*{activePopUp && <PopUp status={'ok'} title={'Вы успешно зарегистрировались'}*/}
        {/*                       text={'Для авторизации на сайте перейдите в раздел "Вход"'} button={'Ок'} action={() => setActivePopUp(false)}/>}*/}
        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span>Главная</span> - <span>Типы туров</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper wrapper_center'>
            <div className='login_page_block'>
              <div className='login_block_left'>
                <div className='info_block_text_login'>
                  <div className='info_block_text_left'>Войти на сайт</div>
                  <div className='info_block_text_right'>Забыли пароль?</div>
                </div>
                <div className='auth_form'>
                  <form onSubmit={handleAction}>
                    <Input
                      required={true}
                      action={handleData}
                      name='email'
                      label='Адрес эл. почты'
                      icon={'email'}
                      type='email'
                      value={data.email}
                      margin={'0 0 25px 0'}
                      error={error}
                    />
                    <Input
                      required={true}
                      action={handleData}
                      name='password'
                      label='Пароль'
                      icon={'password'}
                      type='password'
                      value={data.password}
                      margin={'0 0 25px 0'}
                      error={error}
                    />



                    <input
                      type='checkbox'
                      checked={check}
                      className='remember_checkbox'
                      name='remember_me'
                      onChange={handleCheckbox}
                      //   value='yes'
                    />
                    <label htmlFor='remember_me'>Запомнить меня</label>

                    <button
                      className='enter_site enter_site_registration'
                      type='submit'
                    >
                      ВОЙТИ
                    </button>
                  </form>
                </div>

                <div className='title_social'>или войдите через соц. сети</div>
                <div className='social_links_block'>
                  <div className='social_links_block_item apple'></div>
                  <div className='social_links_block_item vk'></div>
                  <div className='social_links_block_item fb'></div>
                  <div className='social_links_block_item google'></div>
                </div>
                <div className='social_links_block_info'>
                  Если вы впервые на сайте, заполните, пожалуйста,
                  регистрационную форму:{' '}
                  <Link to='/register'>
                    Зарегистрироваться
                  </Link>
                </div>
              </div>
              <div className='login_block_right'>
                Маркетплейс авторских туров
              </div>
            </div>
          </div>
        </section>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  reg_status: state.auth.reg_status
})

export default connect(mapStateToProps, { login, checkAuthenticated, clear_errors })(Login)
