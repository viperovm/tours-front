import React, {useEffect, useState} from 'react';
import styles from './Team.module.css';
import Input from "../../../components/AccountTours/FormFields/Input";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import Button from "../../../components/AccountTours/Components/Button";
import Account from "../../../layouts/account/account";
import { connect } from 'react-redux'
import {setPage, update_user} from "../../../redux/actions/authActions";
import {getLanguages} from "../../../redux/actions/toursActions";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import FileInput from "../../../components/AccountTours/FormFields/FileInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";
import {addTeamMemberAvatar, updateTeamMember} from "../../../redux/actions/profileActions";
import CircularProgress from '@mui/material/CircularProgress'

const TeamEdit = ({user, status, getLanguages, languages, member, updateTeamMember, addTeamMemberAvatar}) => {

  useEffect(() => {
    getLanguages()
  }, [])

  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(user) {
      setProfile({
        ...profile,
        first_name: member.first_name,
        midle_name: member.midle_name,
        last_name: member.last_name,
        email: member.email,
        languages: member.languages,
        about: member.about,
      })
    }
  }, [member])

  useEffect(() => {
    if(loading && member && member.avatar) {
      setLoading(false)
    }
  }, [loading, member])

  const handleChange = (name, value) => {
    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const handleAvatarChange = (image) => {
    setLoading(true)
    addTeamMemberAvatar(image, member.id)
  }

  const handleSubmit = () => {
    updateTeamMember({
      ...profile,
    }, member.id)
  }

  return (
    <Account subtitle='Моя команда' title='Добавить члена команды' menu_item='team'>
      <>
        {status === 'experts' && !loading && (
          <main>
            <div className='global-h2-heading'>
              <h2>Добавить члена команды</h2>
            </div>
            <SingleWrapper full={true} margin={0}>
              <FileInput
                name='avatar'
                action={handleAvatarChange}
                value={member && member.avatar}
                max={1}
                type={'team_member'}
              />
            </SingleWrapper>
            <DoubleWrapper full={true} margin={0}>
              <Input
                label={'Имя'}
                name='first_name'
                action={handleChange}
                value={profile.first_name}
              />
              <Input
                label={'Фамилия'}
                name='last_name'
                action={handleChange}
                value={profile.last_name}
              />
            </DoubleWrapper>
            <DoubleWrapper full={true} margin={0}>
              <Input
                label={'Отчество'}
                name='midle_name'
                action={handleChange}
                value={profile.midle_name}
              />
              <Input
                label={'Email'}
                name='email'
                action={handleChange}
                value={profile.email}
                type='email'
              />
            </DoubleWrapper>
            <SingleWrapper full={true} margin={0} label={'Расскажите о гиде*'}>
              <TextArea
                name='about'
                label='Расскажите о гиде'
                action={handleChange}
                value={profile.about}
              />
            </SingleWrapper>
            <SingleWrapper margin={0} label={'Язык гида'} width={'50%'}>
              <SelectInput
                name='languages'
                label='Выберите языки'
                action={handleChange}
                options={languages}
                val={profile.languages}
                multiple={true}
              />
            </SingleWrapper>
            <Button text={'Добавить'} width={'50%'} action={handleSubmit}/>
          </main>
        )}
        {loading && <CircularProgress/>}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
  languages: state.tours.languages,
  member: state.profile.member,
})

export default connect(mapStateToProps, { getLanguages, updateTeamMember, addTeamMemberAvatar })(TeamEdit)