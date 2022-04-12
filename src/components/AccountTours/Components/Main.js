import React, {useState, useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import NameInput from '../FormFields/NameInput'
import FileInput from '../FormFields/FileInput'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'

import {connect} from 'react-redux'
import {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  setSecondaryNav, getTourLeaders,
  getTour,
} from '../../../redux/actions/toursActions'

import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, Redirect, useHistory} from "react-router-dom";
import TextEditor from "../FormFields/TextEditor";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "./Button";
import {getTeamMembers} from "../../../redux/actions/profileActions";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import PopUp from "../../PopUp/PopUp";

const Main = ({
                secondary_nav,
                setSecondaryNav,
                  tour,
                  toursTypes,
                  updateTour,
                  updateTourWallpaper,
                  tour_name,
                  tourToServer,
                  getTourTypes,
                tour_leaders,
                getTourLeaders,
                getTeamMembers,
                members,
                match,
                getTour,
                res_status,
                error,
                }) => {

  const history = useHistory()

  const [url, setUrl] = useState('')

  const [loading, setLoading] = useState(false)

  const [submitted, setSubmitted] = useState(false)

  const [activePopUp, setActivePopUp] = useState(false)

  useEffect(() => {
    if(submitted && res_status && res_status >= 200 && res_status < 300) {
      handleRedirect()
    } else if(submitted && res_status >= 400 && res_status < 500) {
      let key = Object.keys(error)[0]
      let anchor = document.getElementById(key)
      anchor && anchor.scrollIntoView({block: "center", behavior: "smooth"})
    } else if(submitted && res_status >= 500 && res_status < 600) {
      setActivePopUp(true)
    }
  }, [submitted, res_status])

  const handleRedirect = () => {
    setSubmitted(false)
    history.push(url)
  }

  useEffect(() => {
    const loadTour = async () => {
      setLoading(true)
      await getTour(match.params.id)
      setLoading(false)
    }
    if(!isNotEmptyObject(tour)) {
      loadTour()
    }
  }, [tour])

  useEffect(() => {
    window.scrollTo(0, 0)
    getTourTypes()
    getTeamMembers()
    return () => setUrl('')
  }, [])

  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  const handleWallpaperInput = value => {
    updateTourWallpaper(value, tour.id)
  }

  const handleSubmit = e => {
    e.preventDefault()
    tourToServer({
      ...tour,
      section: 'main',
    }, tour.id)
    setSubmitted(true)
  }

  const handleImageInput = value => {
    setLoading(true)
    setGuestGuideImage(value, tour.id)
  }

  useEffect(() => {
    if (tour && tour.guest_guide && tour.guest_guide.image && loading) {
      setLoading(false)
    }
  }, [tour, loading])

  useEffect(() => {
    let arr = secondary_nav
    if (tour) {
      if (tour.name &&
        tour.wallpaper &&
        tour.vacants_number &&
        tour.members_number &&
        tour.basic_type &&
        tour.team_member) {
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'main') {
              return {
                ...item,
                active: true,
              }
            } else {
              return item
            }
          })
        )
      } else {
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'main') {
              return {
                ...item,
                active: false,
              }
            } else {
              return item
            }
          })
        )
      }
    }
  }, [tour])


  return (
    <>
      <ToursEditLayout secondary_item='main' secondary_name='Основное' tour_id={match.params.id}>
      {activePopUp && <PopUp status={'cancel'} title={'Упс... Что-то пошло не так'}
                             text={'Попробуйте заново внести всю информацию на странице и нажать "Продолжить"'} button={'Ок'} action={() => {
        setActivePopUp(false)
        setSubmitted(false)
      }}/>}
        <div className='my-tours-section-heading'>
          <h4>Основное</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <SingleWrapper label='Название тура*' comment='Максимум 50 символов' tour={tour} name={'name'}>
            <NameInput
              action={handleInput}
              name='name'
              value={tour_name ? tour_name : tour && tour.name}
              error={error}
            />
          </SingleWrapper>
          <SingleWrapper label='Обложка тура*' comment='' tour={tour} name={'wallpaper'}>
            <FileInput
              action={handleWallpaperInput}
              name='wallpaper'
              max={1}
              value={tour && tour.tmb_wallpaper}
              error={error}
            />
          </SingleWrapper>
          <DoubleWrapper ratio='1-2'>
            <Input
              action={handleInput}
              name='vacants_number'
              label='Осталось мест*'
              value={tour && tour.vacants_number}
              error={error}
            />
            <Input
              action={handleInput}
              name='members_number'
              label='Всего мест*'
              value={tour && tour.members_number}
              error={error}
            />
          </DoubleWrapper>

          <SingleWrapper label='Основной тип тура*' comment='' tour={tour} name={'basic_type'}>
            <SelectInput
              action={handleInput}
              name='basic_type'
              label='Основной тип тура'
              val={tour && tour.basic_type}
              options={toursTypes}
              error={error}
            />
          </SingleWrapper>

          <SingleWrapper
            label='Дополнительные типы тура'
            comment='Основной тип тура отображается в карточке тура в каталоге. Все возможные типы туров вы можете посмотреть здесь'
            tour={tour} name={'additional_types'}
          >
            <SelectInput
              basic_type={tour && tour.basic_type}
              action={handleInput}
              name='additional_types'
              label='Дополнительные типы тура'
              comment=''
              val={tour && tour.additional_types}
              options={toursTypes}
              multiple
              error={error}
            />
          </SingleWrapper>

          <CheckboxInput
            action={handleInput}
            name='instant_booking'
            label='Возможно моментальное бронирование'
            comment='Если вы выбираете моментальное бронирование - оплата с клиента будет списываться в момент бронирования без вашего подтверждения. '
            value={tour && tour.instant_booking}
          />

          <CheckboxInput
            action={handleInput}
            name='is_guaranteed'
            label='Тур гарантирован'
            comment='
“Тур гарантирован“ означает, что он точно состоится и дополнительного подтверждения с вашей стороны не требуется. Отмена гарантированного тура после получения предоплаты влечет начисление штрафа (см. раздел VI. Изменение бронирования, отмена и возврат)
'
            value={tour && tour.is_guaranteed}
          />

          <SingleWrapper
            label='Выберите гида из списка, либо укажите его данные ниже*'
            comment={<div>
              <p>
                Путешественники очень расстраиваются, когда вместо обещанного гида
                видят другого.
              </p>
              <p>
                Путешественники очень расстраиваются, когда вместо обещанного гида
                видят другого. Пожалуйста, добавляйте актуальную информацию о том,
                кто будет сопровождать группу.
              </p>
              <p>
                Можно выбрать из выпадающего списка ИЛИ внести информацию в полях
                ниже.
              </p>
            </div>}
            tour={tour} name={'team_member'}
          >
            <SelectInput
              action={handleInput}
              name='team_member'
              label='Выберите гида из списка, либо укажите его данные ниже'
              val={tour && tour.team_member}
              options={members ? members : []}
              labelField='full_name'
              error={error}
            />
          </SingleWrapper>

          <CheckboxInput
            action={handleInput}
            name='direct_link'
            label='Доступ к туру только по прямой ссылке'
            comment='Выбор этой опции уберет ваш тур из выдачи на сайте. Подходит для заказов на индивидуальные программы '
            value={tour && tour.direct_link}
          />
          <SingleWrapper label='Ссылка на тур:' comment='' tour={tour} name={'tour_url'}>
            <Input
              action={handleInput}
              name='tour_url'
              value={tour && tour.tour_url}
              error={error}
            />
          </SingleWrapper>
        <Button
          text={'Продолжить'}
          color={'button-success'}
          type='submit'
          action={() => setUrl(`/account/tours/${match.params.id}/edit/review`)}
        />
        </form>

      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tours.secondary_nav,
  toursTypes: state.tours.tour_types,
  tour: state.tours.current_tour,
  res_status: state.tours.res_status,
  error: state.tours.error,
  tour_name: state.tours.tour_name,
  tour_leaders: state.tours.tour_leaders,
  members: state.profile.members,

})

export default connect(mapStateToProps, {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  setSecondaryNav,
  getTourLeaders,
  getTeamMembers,
  getTour,
})(Main)
