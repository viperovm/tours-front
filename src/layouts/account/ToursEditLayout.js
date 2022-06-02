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
  tourToServerUpdate,
  clearCurrentTour,
  setPage,
  getTour, tourToServerError, setKey
} from "../../redux/actions/toursActions";

import Modal from "../../components/AccountTours/Components/Modal";
import PopUp from "../../components/PopUp/PopUp";
import {APPLICATION_CONFIG} from "../../data";
import {getData, tourTrimmed} from "../../functions";
import axios from "axios";

const ToursEditLayout = ({
                           preview = false,
                           tour,
                           secondary_item,
                           secondary_name,
                           isAuthenticated,
                           children,
                           openSecondaryMenu,
                           deleteTour,
                           tourToServerUpdate,
                           clearCurrentTour,
                           setPage,
                           page,
                           tour_id,
                           tourToServerError,
                           setKey,
                         }) => {

  const history = useHistory()

  const [title, setTitle] = useState('Название тура')

  const [loading, setLoading] = useState(false)

  const [activePopUp, setActivePopUp] = useState(false)
  const [onSavePopUp, setOnSavePopUp] = useState(false)
  const [onErrorPopUp, setOnErrorPopUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

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

  const handleTourDelete = async () => {
    await deleteTour(tour.id)
      .then(() => history.push('/account/tours/list'))
  }

  const handleTourPreview = () => {
    if (!preview) {
      tourToServerUpdate(tour, tour.id)
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

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    let new_tour = tourTrimmed(tour)

    const data = getData(new_tour, 'submit', '')

    const body = JSON.stringify(data)

    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/`, body, config)
        .then(() => history.push('/account/tours/list'))
        .then(() => clearCurrentTour())

    } catch (err) {
      const errStatus = err.response.status
      const errData = err.response.data
      if(errData?.message) {
        setErrorMessage(errData?.message)
      }
      if(errStatus === 403) {
        setOnErrorPopUp(true)
      }
      tourToServerError(errData)
      errStatus >= 400 && errStatus < 500 ? setKey(Object.keys(errData)[0]) : setOnErrorPopUp(true)
    }


    await tourToServerUpdate({...tour, on_moderation: true, is_draft: false}, tour.id)

  }

  const handleSave = async () => {
    // await tourToServerUpdate(tour, tour.id)
    //   .then(() => setOnSavePopUp(true))
      // .then(() => history.push('/account/tours/list'))
      // .then(() => clearCurrentTour())

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    let new_tour = tourTrimmed(tour)

    const body = JSON.stringify(new_tour)

    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour.id}/`, body, config)
      setOnSavePopUp(true)

    } catch (err) {
      console.error(err)
      const errStatus = err.response.status
      const errData = err.response.data
      tourToServerError(errData)
      errStatus >= 400 && errStatus < 500 ? setKey(Object.keys(errData)[0]) : setOnErrorPopUp(true)
    }
  }

  const handleRedirectToMenu = () => {
    history.push('/account/tours/list')
    clearCurrentTour()
  }

  const handleDraft = async () => {
    await tourToServerUpdate({...tour, on_moderation: false, is_draft: true}, tour.id)
      .then(() => history.push('/account/tours/list'))
      .then(() => clearCurrentTour())
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
          {onSavePopUp && <PopUp status={'ok'}
                                 title={'Тур успешно сохранен.'}
                                 text={'Можете продолжить редактирование или вернуться в меню.'}
                                 button={'Продолжить редактирование'}
                                 button2={'Вернуться в меню'}
                                 second_color={'button-success'}
                                 action={() => setOnSavePopUp(false)}
                                 is_saved={true}
                                 second_action={handleRedirectToMenu}/>}
          {onErrorPopUp && <PopUp status={'cancel'} title={errorMessage ? errorMessage : 'Упс... Что-то пошло не так'}
                                 text={'Попробуйте заново внести всю информацию и нажать "Продолжить"'}
                                 button={'Ок'} action={() => {
            setOnErrorPopUp(false)
          }}/>}
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
                  <div className='control-buttons-set'>
                    <button onClick={handleDraft}>В черновик</button>
                    <button onClick={handleModeration}>На модерацию</button>
                    <button className='button-green' onClick={handleSave}>
                      Сохранить
                    </button>
                  </div>
                </div>
                {tour?.decline_reasons && <div className='control-buttons' style={{flexDirection: 'column'}}>
                  <h2 style={{color: '#DF7070', marginBottom: '10px'}}>Отказ публикации тура!</h2>
                  <h3 style={{marginBottom: '10px'}}>Причины:</h3>
                  <div dangerouslySetInnerHTML={{__html: tour?.decline_reasons?.replace(/\n/g, "<br />")}}/>
                </div>}
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
  tourToServerUpdate,
  clearCurrentTour,
  setPage,
  getTour,
  tourToServerError,
  setKey,
})(ToursEditLayout)
