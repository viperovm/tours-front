import React, {useEffect, useState} from 'react'
import Account from '../../../layouts/account/account'

import {connect} from 'react-redux'
import {setPage, update_user, update_avatar, delete_avatar, email_confirm_request, clear_confirm_status} from '../../../redux/actions/authActions'
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

const Settings = ({
                    user, status, setPage, update_user, getLanguages, languages, update_avatar, email_confirm_request,
                    delete_avatar, request_status, clear_confirm_status,
                  }) => {
  useEffect(() => {
    setPage('profile')
    getLanguages()
  }, [])

  const [profile, setProfile] = useState({})
  const [avatar, setAvatar] = useState('')
  const [action, setAction] = useState(false)

  const [requestActive, setRequestActive] = useState(false)
  const [requestSuccess, setRequestSuccess] = useState(true)

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
    update_user({
      ...profile,
    })
  }

  return (<Account title='Настройки' menu_item='settings'>
    <>
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
        <ProfileInputWrapper label=''>
          <FileInput
            max={1}
            action={handleImageChange}
            name='avatar'
            value={avatar}
            type='file'
          />
        </ProfileInputWrapper>
        <ProfileInputDoubleWrapper>
          <ProfileInputWrapper label='Имя'>
            <Input
              label={'Имя'}
              action={handleChange}
              name='first_name'
              value={profile.first_name}
            />
          </ProfileInputWrapper>
          <ProfileInputWrapper label='Фамилия'>
            <Input
              label={'Фамилия'}
              action={handleChange}
              name='last_name'
              value={profile.last_name}
            />
          </ProfileInputWrapper>
        </ProfileInputDoubleWrapper>

        <ProfileInputDoubleWrapper>
          <ProfileInputWrapper label='Номер телефона'>
            <Input
              label={'Номер телефона'}
              action={handleChange}
              name='phone'
              value={profile.phone}
            />
            {profile.phone_confirmed ? (<div className="verified-note">
                <span className="confirmed-green">Телефон подтвержден и скрыт от других пользователей</span>
              </div>

            ) : (<div className="verified-note">
              Телефон не подтвержден! <span>Подвердить?</span>
            </div>)}
          </ProfileInputWrapper>
          <ProfileInputWrapper label='Email'>
            <Input
              label={'Email'}
              action={handleChange}
              name='email'
              value={profile.email}
            />
            {profile.email_confirmed ? (<div className="verified-note">
              <span className="confirmed-green">Email подтвержден</span>
            </div>) : (<div className="verified-note">
              Email не подтвержден! <span onClick={handleEmailConfirm} style={{cursor: 'pointer'}}>Подвердить?</span>
            </div>)}
          </ProfileInputWrapper>
        </ProfileInputDoubleWrapper>

        <Button
          color={'button-primary'}
          text='подключить мессенджеры'
          width={'404px'}
          // action={handleSubmit}
        />

        <ProfileInputWrapper label='Видео'>
          <Input
            label={'Ссылка на видео'}
            action={handleChange}
            name='video'
            value={profile.video}
          />
        </ProfileInputWrapper>

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

        <ProfileInputDoubleWrapper>
          <ProfileInputWrapper label='Новый пароль'>
            <Input
              type='password'
              label={'Новый пароль'}
              action={handleChange}
              name='password'
              value={profile.password}
            />
          </ProfileInputWrapper>
          <ProfileInputWrapper label='Подтверждение пароля'>
            <Input
              type='password'
              label={'Подтверждение пароля'}
              action={handleChange}
              name='re_password'
              value={profile.re_password}
            />
          </ProfileInputWrapper>
        </ProfileInputDoubleWrapper>

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
})

export default connect(mapStateToProps, {
  setPage, update_user, getLanguages, update_avatar, email_confirm_request,
  delete_avatar, clear_confirm_status,
})(Settings)
