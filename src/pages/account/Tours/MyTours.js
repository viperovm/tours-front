import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import ToursList from "../../../components/AccountTours/Components/ToursList";
import {Link, Redirect, useHistory} from 'react-router-dom'
import Account from "../../../layouts/account/account";
import {addTour, getTours} from "../../../redux/actions/toursActions";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const MyTours = ({isAuthenticated, addTour, tour, tours, getTours, }) => {

  const [loading, setLoading] = useState(false)

  const [buttonText, setButtonText] = useState('Добавить путешествие')

  const [edit, setEdit] = useState(false)

  const [filter, setFilter] = useState('all')

  const [toursList, setToursList] = useState(null)

  useEffect(() => {
    getTours()
  }, [])

  useEffect(() => {
    if(tours && filter === 'all') {
      setToursList(tours)
    } else if(tours && filter === 'is_active') {
      setToursList(tours.filter(item => item.is_active))
    } else if(tours && filter === 'on_moderation') {
      setToursList(tours.filter(item => item.on_moderation))
    } else if(tours && filter === 'is_draft') {
      setToursList(tours.filter(item => item.is_draft))
    } else if(tours && filter === 'is_archive') {
      setToursList(tours.filter(item => item.is_archive))
    }
  }, [tours, filter])

  const history = useHistory()

  useEffect(() => {
    if(isNotEmptyObject(tour) && edit) {
      setEdit(false)
      history.push(`/account/tours/${tour.id}/edit/main`)
    }
  }, [tour])

  useEffect(() => {
    if(tour.id) {
      setButtonText('Продолжить редактирование')
    } else {
      setButtonText('Добавить путешествие')
    }
  }, [tour])

  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }

  const handleEditingButton = () => {
    setEdit(true)
    addTour()
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
            <div className='tours-list-add-button-button green' onClick={handleEditingButton}>
              <div>
                {buttonText}
              </div>
            </div>
          </div>
          <div className='control-buttons'>
            <div className='control-buttons-set'>
              <button className={filter === 'all' && 'active'} onClick={() => setFilter('all')}>Все</button>
              <button className={filter === 'is_active' && 'active'} onClick={() => setFilter('is_active')}>Опубликовано</button>
              <button className={filter === 'on_moderation' && 'active'} onClick={() => setFilter('on_moderation')}>На модерации</button>
              <button className={filter === 'is_draft' && 'active'} onClick={() => setFilter('is_draft')}>Черновики</button>
              <button className={filter === 'is_archive' && 'active'} onClick={() => setFilter('is_archive')}>В архиве</button>
            </div>

          </div>
          {toursList && <ToursList tours={toursList}/>}
        </main>
      </Account>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  tour: state.tours.current_tour,
  tours: state.tours.tours,
})

export default connect(mapStateToProps, {
  addTour,
  getTours
})(MyTours)
