import { useState, useEffect } from 'react'
import {
  deleteTour,
  addTour,
  openSecondaryMenu,
  setEditing,
  clearCurrentTour,
  tourToServer,
} from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'
import Account from '../../../layouts/account/account'
import { setPage,  } from '../../../redux/actions/authActions'
import AddTour from '../../../components/AccountTours/Containers/AddTour'
import ToursList from '../../../components/AccountTours/Components/ToursList'

import CircularProgress from '@mui/material/CircularProgress'

const Tours = ({
  tour,
  addTour,
  deleteTour,
  openSecondaryMenu,
  setEditing,
  editing,
  clearCurrentTour,
  tourToServer,
}) => {
  // const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState('Название тура')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (tour && tour.name) {
      setTitle(tour.name)
    } else {
      setTitle('Название тура')
    }
  }, [tour])

  const handleTourDelete = () => {
    setEditing(false)
    deleteTour(tour.id)
  }

  // const handleCompleted = () => {
  //   deleteTour()
  //   setEditing(false)
  // }

  const handleModeration = () => {
    setLoading(true)
    tourToServer({ ...tour, on_moderation: true, is_draft: false }, tour.id)
    setTimeout(() => {
      clearCurrentTour()
      setEditing(false)
    }, 1000)
    setLoading(false)
  }

  const handleSave = () => {
    setLoading(true)
    tourToServer({tour}, tour.id)
    setTimeout(() => {
      clearCurrentTour()
      setEditing(false)
    }, 1000)
    setLoading(false)
  }

  const handleDraft = () => {
    setLoading(true)
    tourToServer({ ...tour, on_moderation: false, is_draft: true }, tour.id)
    setTimeout(() => {
      clearCurrentTour()
      setEditing(false)
    }, 1000)
    setLoading(false)
  }

  useEffect(() => {
    openSecondaryMenu(editing)
  }, [editing])

  const handleEditingButton = () => {
    if (tour && tour.id) {
      setEditing(true)
    } else {
      deleteTour()
      addTour()
      setEditing(true)
    }
  }

  const List = () => {
    if (loading) {
      return <CircularProgress />
    } else {
      return <ToursList />
    }
  }

  return (
    <>
      <Account>
        <main>
          <div className='my-tours-heading'>
            <h2>{editing ? title : 'Мои туры'}</h2>
          </div>
          {!editing && (
            <div className='tours-list-add-button-wrapper'>
              <div className='tours-list-add-button-text'>
                Вам доступно безлимитное добавление туров и путешествий, более 2
                000 000 человек ждут их.
              </div>
              <div className='tours-list-add-button-button'>
                <button onClick={handleEditingButton}>
                  {tour && tour.id
                    ? 'Продолжить редактирование'
                    : 'Добавить путешествие'}
                </button>
              </div>
            </div>
          )}
          <div className='control-buttons'>
            <div className='control-buttons-set'>
              {editing ? (
                <>
                  <button onClick={handleTourDelete}>Удалить</button>
                  <button>Создать копию</button>
                  <button>Предпросмотр</button>
                </>
              ) : (
                <>
                  <button>Опубликовано</button>
                  <button>На модерации</button>
                  <button>Черновики</button>
                </>
              )}
            </div>
            <div className='control-buttons-set'>
              {editing && (
                <>
                  <button onClick={handleDraft}>В черновик</button>
                  <button onClick={handleModeration}>На модерацию</button>
                  <button className='button-green' onClick={handleSave}>
                    Сохранить
                  </button>
                </>
              )}
            </div>
          </div>
          {editing ? <AddTour /> : <List />}
        </main>
      </Account>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  status: state.auth.status,
  tour: state.tours.current_tour,
  editing: state.tours.editing,
})

export default connect(mapStateToProps, {
  setPage,
  addTour,
  deleteTour,
  openSecondaryMenu,
  setEditing,
  clearCurrentTour,
  tourToServer,
})(Tours)
