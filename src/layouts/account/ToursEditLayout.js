import React, {useState, useEffect} from 'react'
import MainLayout from '../MainLayout'
import MetaTags from 'react-meta-tags'
import {Link, useHistory, Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import SideBar from '../../components/sideBar/SideBar'

import {load_user} from '../../redux/actions/authActions'
import {
  openSecondaryMenu,
  addTour,
  deleteTour,
  tourToServer,
  clearCurrentTour,
  setPage,
  getTour
} from "../../redux/actions/toursActions";

import Modal from "../../components/AccountTours/Components/Modal";
import PopUp from "../../components/PopUp/PopUp";

const ToursEditLayout = ({
                           preview = false,
                           tour,
                           secondary_item,
                           secondary_name,
                           isAuthenticated,
                           children,
                           openSecondaryMenu,
                           deleteTour,
                           tourToServer,
                           clearCurrentTour,
                           setPage,
                           page,
                           tour_id,
                         }) => {

  const history = useHistory()

  const [title, setTitle] = useState('Название тура')

  const [loading, setLoading] = useState(false)

  const [activePopUp, setActivePopUp] = useState(false)

  if (!isAuthenticated) {
    return <Redirect to='/login'/>
  }


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
  }

  const handleTourDelete = () => {
    deleteTour(tour.id)
    history.push('/account/tours/list')
  }

  const handleTourPreview = () => {
    if (!preview) {
      tourToServer(tour, tour.id)
      setPage(history.location)
      history.push(`/account/tours/${tour_id}/edit/preview`)
    } else {
      history.push(page)
      setPage('')
    }
  }

  useEffect(() => {
    if (!tour && loading) {
      setLoading(false)
    }
  }, [tour, loading])

  const handleModeration = async () => {
    await tourToServer({...tour, on_moderation: true, is_draft: false}, tour.id)
    clearCurrentTour()
    history.push('/account/tours/list')
  }

  const handleSave = async () => {
    await tourToServer(tour, tour.id)
    clearCurrentTour()
    history.push('/account/tours/list')
  }

  const handleDraft = async () => {
    await tourToServer({...tour, on_moderation: false, is_draft: true}, tour.id)
    clearCurrentTour()
    history.push('/account/tours/list')
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
          {activePopUp && <PopUp status={'danger'}
                                 title={'Уверены, что хотите удалить?'}
                                 text={'Информация будет удалена навсегда.'}
                                 button={'Отменить'}
                                 button2={'Удалить'}
                                 action={() => setActivePopUp(false)}
                                 second_action={handleTourDelete}/>}
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span><Link to='/'>Главная</Link></span> - <span><Link
              to='/account'>Личный кабинет</Link></span> - <span><Link
              to={`/account/tours/${tour_id}/edit/main`}>Редактирование тура</Link></span> - <span>{secondary_name}</span>
            </div>
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <div className='account_block'>
              <SideBar menu_item='tours/list' secondary_item={secondary_item} tour_id={tour_id}/>


              <main>
                <div className='global-h2-heading'>
                  <h2>{title}</h2>
                </div>

                <div className='control-buttons'>
                  <div className='control-buttons-set'>
                    <div onClick={() => setActivePopUp(true)}>Удалить</div>
                    <div><Modal tour_id={tour.id} button_name='Создать копию' action={handleTourCopy}/></div>
                    {preview ?
                      <div onClick={handleTourPreview}>Редактировать</div>
                      :
                      <div onClick={handleTourPreview}>Предпросмотр</div>}
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
  page: state.tours.page,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {
  openSecondaryMenu,
  addTour,
  deleteTour,
  tourToServer,
  clearCurrentTour,
  setPage,
  getTour,
})(ToursEditLayout)
