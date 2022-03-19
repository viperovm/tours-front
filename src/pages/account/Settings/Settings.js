import React, {useEffect, useState} from 'react'
import Account from '../../../layouts/account/account'

import {connect} from 'react-redux'
import {setPage, update_user, update_avatar, delete_avatar} from '../../../redux/actions/authActions'
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

const Settings = ({
                    user, status, setPage, update_user, getLanguages, languages, update_avatar,
                    delete_avatar,
                  }) => {
  useEffect(() => {
    setPage('profile')
    getLanguages()
  }, [])

  const [profile, setProfile] = useState({})
  const [avatar, setAvatar] = useState('')
  const [action, setAction] = useState(false)

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
              <span className="confirmed-green">Email подтвержден и скрыт от других пользователей</span>
            </div>) : (<div className="verified-note">
              Email не подтвержден! <span>Подвердить?</span>
            </div>)}
          </ProfileInputWrapper>
        </ProfileInputDoubleWrapper>

        <Button
          color={'button-primary'}
          text='подключить мессенджеры'
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
        <ProfileInputDoubleWrapper>
          <ProfileInputWrapper label='Язык уведомлений'>
            <SelectInput
              name='notification_languages'
              label='Выберите языки'
              action={handleChange}
              options={languages}
              val={profile.notification_languages}
            />
          </ProfileInputWrapper>
          <ProfileInputWrapper>
          </ProfileInputWrapper>
        </ProfileInputDoubleWrapper>
        <Button
          color={'button-primary'}
          text='Подключить текущее устройство'
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
  user: state.auth.user, status: state.auth.status, languages: state.tours.languages,
})

export default connect(mapStateToProps, {
  setPage, update_user, getLanguages, update_avatar,
  delete_avatar,
})(Settings)
