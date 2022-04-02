import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import ToursList from "../../../components/AccountTours/Components/ToursList";
import {Link, Redirect} from 'react-router-dom'
import Account from "../../../layouts/account/account";
import {addTour} from "../../../redux/actions/toursActions";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";

const MyTours = ({isAuthenticated, addTour, tour}) => {

  const [buttonText, setButtonText] = useState('Добавить путешествие')

  useEffect(() => {
    if(tour.id) {
      console.log(1)
      setButtonText('Продолжить редактирование')
    } else {
      console.log(2)
      setButtonText('Добавить путешествие')
    }
  }, [tour])

  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }

  const handleEditingButton = () => {
    if (tour && !isNotEmptyObject(tour)) {
      addTour()
    }
  }

  return (
    <>
      <Account title='Мои туры' menu_item='tours/list'>
        <main>
          <div className='global-h2-heading'>
            <h2>Мои туры</h2>
          </div>
          <div className='tours-list-add-button-wrapper'>
            <div className='tours-list-add-button-text'>
              Вам доступно безлимитное добавление туров и путешествий, более 2
              000 000 человек ждут их.
            </div>
            <div className='tours-list-add-button-button green'>
              <Link to='/account/tours/edit/main' onClick={handleEditingButton}>
                {buttonText}
              </Link>
            </div>
          </div>
          <div className='control-buttons'>
            <div className='control-buttons-set'>
              <button>Опубликовано</button>
              <button>На модерации</button>
              <button>Черновики</button>
            </div>

          </div>
          <ToursList/>
        </main>
      </Account>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  addTour,
})(MyTours)
