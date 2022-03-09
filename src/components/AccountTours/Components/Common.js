import React, {useState, useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import NameInput from '../FormFields/NameInput'
import FileInput from '../FormFields/FileInput'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'

import {connect} from 'react-redux'
import {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setSecondaryNav,
  setName,
  tourToServer,
} from '../../../redux/actions/toursActions'
// import {
//   setActiveSections,
// } from '../../../redux/actions/tourSectionActions'
import Modal from './Modal'
import StartPlace from './StartPlace'
import FinishPlace from './FinishPlace'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, Redirect} from "react-router-dom";

const Common = ({
                  action,
                  tour,
                  toursTypes,
                  secondary_nav,
                  setSecondaryNav,
                  updateTour,
                  updateTourWallpaper,
                  tour_name,
                  setName,
                  tourToServer,
                  getTourTypes,
                }) => {

  useEffect(() => {
    getTourTypes()
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

  const handleNameInput = () => {
    let new_data = {...tour, name: tour_name}
    tourToServer(new_data, tour.id)
  }

  const handleButtonSubmit = () => {
    tourToServer(tour, tour.id)
    return <Redirect to='/account/tours/edit/prices'/>
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ToursEditLayout secondary_item='common' secondary_name='Общее'>
        <div className='my-tours-section-heading'>
          <h4>Общее</h4>
        </div>
        <SingleWrapper label='Название тура' comment='Максимум 50 символов'>
          <NameInput
            action={handleInput}
            // action2={handleNameInput}
            name='name'
            value={tour_name ? tour_name : tour && tour.name}
          />
        </SingleWrapper>
        <SingleWrapper label='Обложка тура' comment=''>
          <FileInput
            action={handleWallpaperInput}
            name='wallpaper'
            max={1}
            value={tour && tour.tmb_wallpaper}
          />
        </SingleWrapper>

        <SingleWrapper label='Основной тип тура' comment=''>
          <SelectInput
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
            action={handleInput}
            name='additional_types'
            label='Дополнительные типы тура'
            comment=''
            val={tour && tour.additional_types}
            options={toursTypes}
            multiple
          />
        </SingleWrapper>

        <StartPlace
          action={handleInput}
          start_region={tour && tour.start_region}
          start_country={tour && tour.start_country}
          start_russian_region={tour && tour.start_russian_region}
          start_city={tour && tour.start_city}
        />
        <FinishPlace
          action={handleInput}
          finish_region={tour && tour.finish_region}
          finish_country={tour && tour.finish_country}
          finish_russian_region={tour && tour.finish_russian_region}
          finish_city={tour && tour.finish_city}
        />


        <SingleWrapper label='Время начала (местное):' comment=''>
          <Input
            action={handleInput}
            name='start_time'
            value={tour && tour.start_time}
            type='time'
          />
        </SingleWrapper>

        <SingleWrapper label='Время окончания тура (местное)' comment=''>
          <Input
            action={handleInput}
            name='finish_time'
            value={tour && tour.finish_time}
            type='time'
          />
        </SingleWrapper>

        <CheckboxInput
          action={handleInput}
          name='direct_link'
          label='Доступ к туру только по прямой ссылке'
          comment='Выбор этой опции уберет ваш тур из выдачи на сайте. Подходит для заказов на индивидуальные программы '
          value={tour && tour.direct_link}
        />
        <Link
          className={`add-tour-button button-success`}
          to='/account/tours/edit/prices'
          onClick={handleButtonSubmit}>
          Продолжить
        </Link>
        {/*<Button active={true} action={handleButtonSubmit}/>*/}
        {/* <Button active={completed} action={handleButtonSubmit} /> */}

      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  regions: state.tours.regions,
  countries: state.tours.countries,
  russian_regions: state.tours.russian_regions,
  cities: state.tours.cities,
  secondary_nav: state.tours.secondary_nav,
  // tourName: state.tourSection.tour_name,
  tour: state.tours.current_tour,
  tour_name: state.tours.tour_name,
})

export default connect(mapStateToProps, {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer
})(Common)
