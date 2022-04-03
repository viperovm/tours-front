import React, { useEffect, useState } from 'react'
import Account from '../../../layouts/account/account'

import { connect } from 'react-redux'
import {setPage, update_user} from '../../../redux/actions/authActions'
import {getLanguages} from '../../../redux/actions/toursActions'
import {Link} from "react-router-dom";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import ProfileInputWrapper from "../../../components/AccountProfile/Wrappers/ProfileInputWrapper";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import Button from "../../../components/AccountTours/Components/Button";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";

const MyProfile = ({ user, status, setPage, update_user, getLanguages, languages }) => {
  useEffect(() => {
    setPage('profile')
    getLanguages()
  }, [])

  const [profile, setProfile] = useState({})

  useEffect(() => {
    if(user) {
      setProfile({
        ...profile,
        country: user.country,
        city: user.city,
        languages: user.languages,
        visited_countries: user.visited_countries,
        about: user.about,
      })
    }
  }, [user])

  console.log(profile)

  const handleChange = (name, value) => {
    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    update_user({
      ...profile,
    })
  }

  return (
    <Account title='Мой профиль' menu_item='profile'>
      <>
        {status === 'experts' && (
          <main>
            <div className='global-h2-heading'>
              <h2>Мой профиль</h2>
            </div>
            <div className='tours-list-add-button-wrapper'>
              <div className='tours-list-add-button-text'>
                Проверенным экспертам туристы доверяют на 75% больше чем остальным. Получите статус бесплатно!
              </div>
              <div className='tours-list-add-button-button blue'>
                <Link
                  to='#'
                  // to='/account/tours/edit/common'
                  // onClick={handleEditingButton}
                >
                  Получить статус
                </Link>
              </div>
            </div>
            <div className="profile-page-body">
              <aside className="user-profile-aside">
                <div className="user-profile-avatar" style={{backgroundImage: 'url(' + user.avatar + ')'}}/>
                <div className="user-profile-aside-text">
                  Пожалуйста, не публикуйте названия компаний, контакты, бренды и ссылки.
                  Публикации с подобной информацией могут быть удалены в одностороннем порядке.
                </div>
              </aside>
              <div className="profile-page-content">
                <SingleWrapper label='Страна' width={'100%'} margin={'0'}>
                  <Input
                    name='country'
                    label='Укажите страну в которой вы живете'
                    value={profile.country}
                    action={handleChange}
                  />
                </SingleWrapper>
                <SingleWrapper label='Город' width={'100%'} margin={'0'}>
                  <Input
                    name='city'
                    label='Укажите город в котором вы живете'
                    value={profile.city}
                    action={handleChange}
                  />
                </SingleWrapper>
                <SingleWrapper label='Язык' full={true} margin={'0'}>
                  <SelectInput
                    name='languages'
                    label='Выберите языки'
                    action={handleChange}
                    options={languages}
                    val={profile.languages}
                    multiple={true}
                  />
                </SingleWrapper>
                <SingleWrapper label='Где вы были?' width={'100%'} margin={'0'}>
                  <Input
                    name='visited_countries'
                    label='Укажите колличечство стран, в которых вы были'
                    value={profile.visited_countries}
                    action={handleChange}
                  />
                </SingleWrapper>
                <ProfileInputWrapper label='Это всем интересно'>
                  <TextArea
                    name='about'
                    label='Расскажите о себе'
                    rows='7'
                    value={profile.about}
                    action={handleChange}
                  />
                </ProfileInputWrapper>
                <Button
                  text='Сохранить'
                  action={handleSubmit}
                />

              </div>
            </div>
          </main>
        )}
        {status === 'customers' && <div>Страница профиля клиента</div>}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
  languages: state.tours.languages,
})

export default connect(mapStateToProps, { setPage, update_user, getLanguages })(MyProfile)
