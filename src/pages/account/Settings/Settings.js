import React, {useEffect, useState} from 'react'
import Account from '../../../layouts/account/account'

import {connect} from 'react-redux'
import {setPage, update_user, clear_errors, update_avatar, delete_avatar, email_confirm_request, clear_confirm_status} from '../../../redux/actions/authActions'
import {getLanguages} from '../../../redux/actions/toursActions'
import {Link} from "react-router-dom";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import ProfileInputWrapper from "../../../components/AccountProfile/Wrappers/ProfileInputWrapper";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import Button from "../../../components/AccountTours/Components/Button";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import FileInput from "../../../components/AccountTours/FormFields/FileInput";
import ProfileInputDoubleWrapper from "../../../components/AccountProfile/Wrappers/ProfileInputDoubleWrapper";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";
import cross from '../../../assets/img/x.svg'
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import PopUp from "../../../components/PopUp/PopUp";

const Settings = ({
                    reg_status, user, status, setPage, update_user, getLanguages, languages, update_avatar, email_confirm_request,
                    delete_avatar, request_status, clear_confirm_status, clear_errors,
                  }) => {
  useEffect(() => {
    setPage('profile')
    getLanguages()
    return () => {
      clear_errors()
      setActivePopUp(false)
    }
  }, [])

  const [profile, setProfile] = useState({})
  const [avatar, setAvatar] = useState('')
  const [action, setAction] = useState(false)

  const [requestActive, setRequestActive] = useState(false)
  const [requestSuccess, setRequestSuccess] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)

  useEffect(() => {
    if(submitted && reg_status >= 200 && reg_status < 300) {
      setActivePopUp(true)
    }
  }, [submitted, reg_status])

  useEffect(() => {
    if(request_status !== 'error' && request_status >= 200 && request_status < 300) {
      setRequestSuccess(true)
    } else {
      setRequestSuccess(false)
    }
  }, [request_status])

  const handleModalClose = () => {
    setRequestActive(false)
    clear_confirm_status()
  }

  const handleEmailConfirm = () => {
    setRequestActive(true)
    email_confirm_request()
    setTimeout(() => handleModalClose(), 3000)
  }

  useEffect(() => {
    if (user) {
      setProfile({
        ...profile,
        video: user.video,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        old_phone: user.phone,
        old_email: user.email,
        phone_confirmed: user.phone_confirmed,
        email_confirmed: user.email_confirmed,
      })
    }
  }, [user])

  useEffect(() => {
    if (user && user.avatar) {
      setAvatar(user.avatar)
    }
  }, [user && user.avatar])

  const handleChange = (name, value) => {
    setProfile({
      ...profile, [name]: value,
    })
  }

  const handleImageChange = (image) => {
    setAction(true)
    update_avatar(image)
    setAction(false)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    update_user({
      ...profile,
    })
  }

  return (<Account title='Настройки' menu_item='settings'>
    <>
      {activePopUp && <PopUp status={'ok'} title={'Успешно обновлено'}
                             text={''} button={'Ок'} action={() => setActivePopUp(false)}/>}
      {requestActive && (
        <div className={`modal-request-confirm`}>
          {request_status && (<div className="modal-request-body">
            <div className="modal-request-close" onClick={handleModalClose}><img src={cross} alt="cross"/></div>
            {requestSuccess ? (
              <div className={`modal-request-text green`}>
                Запрос успешно отправлен
              </div>
            ) : (
              <div className={`modal-request-text red`}>
                Ошибка отправки запроса
              </div>
            )}
            {requestSuccess ? (
              <div className="modal-request-subtext">
                Проверьте вашу почту
              </div>
            ) : (
              <div className="modal-request-subtext">
                Попробуйте еще раз позже
              </div>
            )}
          </div>)}
      </div>
      )}
      {status === 'experts' && (<main>
        <div className='global-h2-heading'>
          <h2>Настройки</h2>
        </div>
        <div className='tours-list-add-button-wrapper'>
          <div className='tours-list-add-button-text'>
            Комиссия работы с сервисом, для вас составляет всего:
          </div>
        </div>
        <div className="profile-settings-subheading">
          <h4>
            Личные данные
          </h4>
        </div>
        <SingleWrapper label=''>
          <FileInput
            max={1}
            action={handleImageChange}
            name='avatar'
            value={avatar}
            type='file'
          />
        </SingleWrapper>
        <DoubleWrapper full={true}>
          <Input
            label={'Имя'}
            action={handleChange}
            name='first_name'
            value={profile.first_name}
          />
          <Input
            label={'Фамилия'}
            action={handleChange}
            name='last_name'
            value={profile.last_name}
          />
        </DoubleWrapper>

        <DoubleWrapper full={true}>
          <Input
            label={'Номер телефона'}
            action={handleChange}
            name='phone'
            value={profile.phone}
          />
          <Input
            label={'Email'}
            action={handleChange}
            name='email'
            value={profile.email}
          />
        </DoubleWrapper>
        <DoubleWrapper full={true}>
          {profile.phone_confirmed ? (<div className="verified-note">
              <span className="confirmed-green">Телефон подтвержден и скрыт от других пользователей</span>
            </div>

          ) : (<div className="verified-note">
            Телефон не подтвержден! <span>Подвердить?</span>
          </div>)}
          {profile.email_confirmed ? (<div className="verified-note">
            <span className="confirmed-green">Email подтвержден</span>
          </div>) : (<div className="verified-note">
            Email не подтвержден! <span onClick={handleEmailConfirm} style={{cursor: 'pointer'}}>Подвердить?</span>
          </div>)}
        </DoubleWrapper>

        <Button
          color={'button-primary'}
          text='подключить мессенджеры'
          width={'404px'}
          // action={handleSubmit}
        />

        <SingleWrapper label='Видео' width={'100%'} margin={'0'}>
          <Input
            label={'Ссылка на видео'}
            action={handleChange}
            name='video'
            value={profile.video}
          />
        </SingleWrapper>

        <div className="profile-settings-subheading">
          <h4>
            Настройка push-уведомлений
          </h4>
        </div>
        <SingleWrapper label='Язык уведомлений' width={'50%'} padding={'0 10px 0 0'}>
          <SelectInput
            name='notification_languages'
            label='Выберите языки'
            action={handleChange}
            options={languages}
            val={profile.notification_languages}
          />
        </SingleWrapper>
        <Button
          color={'button-primary'}
          text='Подключить текущее устройство'
          padding={'0'}
          width={'404px'}
          // action={handleSubmit}
        />

        <div className="profile-settings-checkbox">
          <CheckboxInput label={'Получать push-уведомления (Необходимо разрешить получение уведомлений в браузере)'}/>
        </div>

        <div className="profile-settings-subheading">
          <h4>
            Пароль
          </h4>
        </div>

        <ProfileInputWrapper label='Для смены учетных данных, введите в поле новый пароль и его подтверждение:'/>

        <DoubleWrapper full={true}>
          <Input
            type='password'
            label={'Новый пароль'}
            action={handleChange}
            name='password'
            value={profile.password}
          />
          <Input
            type='password'
            label={'Подтверждение пароля'}
            action={handleChange}
            name='re_password'
            value={profile.re_password}
          />
        </DoubleWrapper>

        <Button
          text='Сохранить настройки'
          action={handleSubmit}
        />
      </main>)}
      {status === 'customers' && <div>Страница настроек клиента</div>}
    </>
  </Account>)
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
  request_status: state.auth.email_confirm_request,
  languages: state.tours.languages,
  reg_status: state.auth.reg_status
})

export default connect(mapStateToProps, {
  setPage, update_user, getLanguages, update_avatar, email_confirm_request,
  delete_avatar, clear_confirm_status, clear_errors
})(Settings)
