import React, {useEffect, useState} from 'react';
import styles from './Team.module.css';
import {Link} from "react-router-dom";
import ProfileInputWrapper from "../../../components/AccountProfile/Wrappers/ProfileInputWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import Button from "../../../components/AccountTours/Components/Button";
import Account from "../../../layouts/account/account";
import { connect } from 'react-redux'
import {setPage, update_user} from "../../../redux/actions/authActions";
import {getLanguages} from "../../../redux/actions/toursActions";
import TeamList from "../../../components/AccountTours/Components/TeamList";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import FileInput from "../../../components/AccountTours/FormFields/FileInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";

const TeamEdit = ({user, status}) => {

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
    <Account subtitle='Моя команда' title='Добавить члена команды' menu_item='team'>
      <>
        {status === 'experts' && (
          <main>
            <div className='global-h2-heading'>
              <h2>Добавить члена команды</h2>
            </div>

            <SingleWrapper full={true} margin={0}>
              <FileInput/>
            </SingleWrapper>
            <DoubleWrapper full={true} margin={0}>
              <Input label={'Имя'}/>
              <Input label={'Фамилия'}/>
            </DoubleWrapper>
            <DoubleWrapper full={true} margin={0}>
              <Input label={'Отчество'}/>
              <Input label={'Email'}/>
            </DoubleWrapper>
            <SingleWrapper full={true} margin={0} label={'Расскажите о гиде*'}>
              <TextArea/>
            </SingleWrapper>
            <div className="team-subtitle">
              Язык гида
            </div>
            <CheckboxInput label={'Русский'} green={true}/>
            <CheckboxInput label={'Английский'} green={true}/>
            <Button text={'Добавить'} width={'50%'}/>
          </main>
        )}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
  languages: state.tours.languages,
})

export default connect(mapStateToProps, { setPage, update_user, getLanguages })(TeamEdit)