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
  setSecondaryNav, getTourLeaders
} from '../../../redux/actions/toursActions'

import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, Redirect} from "react-router-dom";
import TextEditor from "../FormFields/TextEditor";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

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
                getTourLeaders
                }) => {

  useEffect(() => {
    getTourTypes()
    getTourLeaders()
  }, [])

  const [loading, setLoading] = useState(false)

  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  const handleWallpaperInput = value => {
    updateTourWallpaper(value, tour.id)
  }

  const handleButtonSubmit = () => {
    tourToServer(tour, tour.id)
    return <Redirect to='/account/tours/edit/review'/>
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
    window.scrollTo(0, 0)
  }, [])


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
      <ToursEditLayout secondary_item='main' secondary_name='Основное'>
        <div className='my-tours-section-heading'>
          <h4>Основное</h4>
        </div>
        <SingleWrapper label='Название тура' comment='Максимум 50 символов'>
          <NameInput
            required={true}
            action={handleInput}
            name='name'
            value={tour_name ? tour_name : tour && tour.name}
          />
        </SingleWrapper>
        <SingleWrapper label='Обложка тура' comment=''>
          <FileInput
            required={true}
            action={handleWallpaperInput}
            name='wallpaper'
            max={1}
            value={tour && tour.tmb_wallpaper}
          />
        </SingleWrapper>
        <DoubleWrapper ratio='1-2'>
          <Input
            required={true}
            action={handleInput}
            name='vacants_number'
            label='Осталось мест'
            value={tour && tour.vacants_number}
          />
          <Input
            required={true}
            action={handleInput}
            name='members_number'
            label='Всего мест'
            value={tour && tour.members_number}
          />
        </DoubleWrapper>

        <SingleWrapper label='Основной тип тура' comment=''>
          <SelectInput
            required={true}
            action={handleInput}
            name='basic_type'
            label='Основной тип тура'
            val={tour && tour.basic_type}
            options={toursTypes}
          />
        </SingleWrapper>

        <SingleWrapper
          label='Дополнительные типы тура'
          comment='Основной тип тура отображается в карточке тура в каталоге. Все возможные типы туров вы можете посмотреть здесь'
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
          label='Выберите гида из списка, либо укажите его данные ниже'
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
        >
          <SelectInput
            required={true}
            action={handleInput}
            name='team_member'
            label='Выберите гида из списка, либо укажите его данные ниже'
            val={tour && tour.team_member}
            options={tour_leaders ? tour_leaders : []}
            labelField='full_name'
          />
        </SingleWrapper>
        <SingleWrapper label='Имя гида' comment=''>
          <Input
            action={handleInput}
            name='first_name'
            value={tour && tour.guest_guide && tour.guest_guide.first_name}
            // multiple
          />
        </SingleWrapper>
        <SingleWrapper label='Информация о гиде' comment=''>
          <TextEditor
            action={handleInput}
            name='about'
            value={tour && tour.guest_guide && tour.guest_guide.about}
          />
        </SingleWrapper>

        <SingleWrapper label='Фотография гида' comment=''>
          {!loading && (<FileInput
            action={handleImageInput}
            name='avatar'
            max={1}
            value={tour && tour.guest_guide && tour.guest_guide.avatar}
          />)}
          {loading && (<div className='fake-file-input loader-spinner'>
            <Box sx={{display: 'flex'}}>
              <CircularProgress/>
            </Box>
          </div>)}
        </SingleWrapper>

        <CheckboxInput
          action={handleInput}
          name='direct_link'
          label='Доступ к туру только по прямой ссылке'
          comment='Выбор этой опции уберет ваш тур из выдачи на сайте. Подходит для заказов на индивидуальные программы '
          value={tour && tour.direct_link}
        />
        <SingleWrapper label='Ссылка на тур:' comment=''>
          <Input
            action={handleInput}
            name='tour_url'
            value={tour && tour.tour_url}
          />
        </SingleWrapper>
        <Link
          className={`add-tour-button button-success`}
          to='/account/tours/edit/review'
          onClick={handleButtonSubmit}>
          Продолжить
        </Link>

      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tours.secondary_nav,
  toursTypes: state.tours.tour_types,
  tour: state.tours.current_tour,
  tour_name: state.tours.tour_name,
  tour_leaders: state.tours.tour_leaders
})

export default connect(mapStateToProps, {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  setSecondaryNav,
  getTourLeaders
})(Main)
