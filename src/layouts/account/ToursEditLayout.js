import React, {useState, useEffect} from 'react'
import MainLayout from '../MainLayout'
import MetaTags from 'react-meta-tags'
import {Link, useHistory, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import SideBar from '../../components/sideBar/SideBar'

import {load_user} from '../../redux/actions/authActions'
import {openSecondaryMenu, addTour, deleteTour, tourToServer, clearCurrentTour} from "../../redux/actions/toursActions";

import CircularProgress from '@mui/material/CircularProgress'
import Modal from "../../components/AccountTours/Components/Modal";

import isNotEmptyObject from "../../helpers/isNotEmptyObject";

const ToursEditLayout = ({
                           tour,
                           menu_item,
                           secondary_item,
                           secondary_name,
                           completed,
                           isAuthenticated,
                           children,
                           openSecondaryMenu,
                           addTour,
                           deleteTour,
                           tourToServer,
                           clearCurrentTour,
                         }) => {

  const history = useHistory()

  const [title, setTitle] = useState('Название тура')

  const [loading, setLoading] = useState(false)

  if (!isAuthenticated) {
    return <Redirect to='/login'/>
  }

  // useEffect(() => {
  //   if (!isNotEmptyObject(tour)) {
  //     console.log(tour)
  //     addTour()
  //   }
  // }, [tour])

  useEffect(() => {
    openSecondaryMenu(true)
    return () => openSecondaryMenu(false)
  }, [])

  useEffect(() => {
    if (tour && tour.name) {
      setTitle(tour.name)
    } else {
      setTitle('Название тура')
    }
  }, [tour])

  const handleTourCopy = () => {
    history.push('/account/tours/list')
    location.reload()
  }

  const handleTourDelete = () => {
    deleteTour(tour.id)
    history.push('/account/tours/list')
    location.reload()
  }

  useEffect(() => {
    if (!tour && loading) {
      setLoading(false)
    }
  }, [tour, loading])

  const handleModeration = () => {
    tourToServer({...tour, on_moderation: true, is_draft: false}, tour.id)
    clearCurrentTour()
    history.push('/account/tours/list')
    location.reload()
  }

  const handleSave = () => {
    tourToServer(tour, tour.id)
    clearCurrentTour()
    history.push('/account/tours/list')
    location.reload()
  }

  const handleDraft = () => {
    tourToServer({...tour, on_moderation: false, is_draft: true}, tour.id)
    clearCurrentTour()
    history.push('/account/tours/list')
    location.reload()
  }


  return (
    <MainLayout>
      <>
        <MetaTags>
          <title>Редактирование тура - {secondary_name}</title>
          <meta name='description' content=''/>
          <link rel='icon' href='/favicon.ico'/>
        </MetaTags>

        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span><Link to='/'>Главная</Link></span> - <span><Link
              to='/account'>Личный кабинет</Link></span> - <span><Link
              to='/account/tours/edit/common'>Редактирование тура</Link></span> - <span>{secondary_name}</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <div className='account_block'>
              <SideBar menu_item='tours/list' secondary_item={secondary_item}/>


              <main>
                <div className='my-tours-heading'>
                  <h2>{title}</h2>
                </div>

                <div className='control-buttons'>
                  <div className='control-buttons-set'>
                    <button onClick={handleTourDelete}>Удалить</button>
                    <button><Modal tour_id={tour.id} button_name='Создать копию' action={handleTourCopy}/></button>
                    <button>Предпросмотр</button>
                  </div>

                  {/*<div className='control-buttons-set'>*/}
                  {/*  <button onClick={handleTourDelete}>Удалить</button>*/}
                  {/*  <button><Modal tour_id={tour.id} button_name='Создать копию' action={handleSave}/></button>*/}
                  {/*  <button>Предпросмотр</button>*/}
                  {/*</div>*/}
                  <div className='control-buttons-set'>
                    <button onClick={handleDraft}>В черновик</button>
                    <button onClick={handleModeration}>На модерацию</button>
                    <button className='button-green' onClick={handleSave}>
                      Сохранить
                    </button>
                  </div>
                </div>
                {children}
              </main>


            </div>
          </div>
        </section>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {
  openSecondaryMenu,
  addTour,
  deleteTour,
  tourToServer,
  clearCurrentTour
})(ToursEditLayout)
