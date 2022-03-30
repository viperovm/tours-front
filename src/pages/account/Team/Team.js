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

const Team = ({user, status}) => {

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
    <Account title='Моя команда' menu_item='team'>
      <>
        {status === 'experts' && (
          <main>
            <div className='global-h2-heading'>
              <h2>Моя команда</h2>
            </div>
            <div className='tours-list-add-button-wrapper'>
              <div className='tours-list-add-button-text'>
                Добавьте членов вашей команды, которые проводят туры вместе с вами.
              </div>
              <div className='tours-list-add-button-button blue'>
                <Link
                  // to='#'
                  to='/account/team/edit'
                  // onClick={handleEditingButton}
                >
                  Добавить
                </Link>
              </div>
            </div>
            <div className="team-subtitle">
              Члены команды
            </div>
            <TeamList/>
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

export default connect(mapStateToProps, { setPage, update_user, getLanguages })(Team)