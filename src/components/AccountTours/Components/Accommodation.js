import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import SelectInput from '../FormFields/SelectInput'

import { connect } from 'react-redux'
import {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
  getTourPropertyTypes,
  getTourAccomodations,
  tourToServer,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import Button from "./Button";


const Accommodation = ({ getTourTypes,
                         setSecondaryNav,
                         updateTour,
                         getLanguages,
                         setPropertyImage,
                         addActivity,
                         getTourPropertyTypes,
                         getTourAccomodations,
                         tourToServer,
                         toursTypes,
                         tour_property_types,
                         tour_accomodations,
                         languages,
                         secondary_nav,
                         tour,
                       }) => {

  const history = useHistory()

  const [url, setUrl] = useState('')
  const [previews, setPreviews] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTourPropertyTypes()
    getTourAccomodations()
    window.scrollTo(0, 0)
    return () => setUrl('')
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    tourToServer(tour, tour.id)
    history.push(url)
  }

  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  const handleImageLoad = image => {
    setPropertyImage(image, tour.id)
  }

  useEffect(() => {


    if (tour) {
      if (Array.isArray(tour.tour_images) && tour.tour_images.length > 0) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'gallery') {
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
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'gallery') {
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

  useEffect(() => {

    let arr = []
    if (
      tour &&
      tour.tour_property_images &&
      tour.tour_property_images.length > 0
    ) {
      tour.tour_property_images.map(item => {
        if (!tour.tour_property_images.includes(item.tmb_image)) {
          arr.push(item.tmb_image)
        }
      })
      setPreviews(arr)
      setLoading(true)
    }

    if (tour && tour.tour_property_images) {
      setLoading(false)
    }

    if (tour) {
      if (
        tour.tour_property_types &&
        tour.hotel_name &&
        tour.accomodation &&
        Array.isArray(tour.tour_property_images) && tour.tour_property_images.length > 0
      ) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'accommodation') {
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
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'accommodation') {
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
    <ToursEditLayout secondary_item='accommodation' secondary_name='Проживание'>
        <div className='my-tours-section-heading'>
          <h4>Проживание</h4>
        </div>
      <form onSubmit={handleSubmit}>
        <SingleWrapper label='Где планируется проживание*' comment=''>
          <SelectInput
            required={true}
            action={handleInput}
            name='tour_property_types'
            label='Где планируется проживание'
            val={tour && tour.tour_property_types}
            options={tour_property_types}
            multiple={true}
          />
        </SingleWrapper>
        <SingleWrapper
          label='Название отеля*'
          comment='Вводите, если уверены в 100% гарантии размещения '
        >
          <Input
            required={true}
            action={handleInput}
            name='hotel_name'
            value={tour && tour.hotel_name}
            options={toursTypes}
          />
        </SingleWrapper>
        <SingleWrapper label='Размещение*' comment=''>
          <SelectInput
            required={true}
            action={handleInput}
            name='accomodation'
            label='Размещение'
            val={tour && tour.accomodation}
            options={tour_accomodations}
            multiple={true}
          />
        </SingleWrapper>

        <SingleWrapper
          label='Добавить фото мест проживания в путешествии*'
          comment=''
        >
          <ObjectFileInput
            position={'accommodation'}
            tour={tour}
            required={!previews}
            action={handleImageLoad}
            name='tour_property_images'
            value={tour && tour.tour_property_images}
            type='file'
          />
        </SingleWrapper>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '66%',
          }}
        >
          <Button
            text={'Назад'}
            color={'button-primary'}
            type='submit'
            action={() => setUrl('/account/tours/edit/route')}
          />
          <Button
            text={'Продолжить'}
            color={'button-success'}
            type='submit'
            action={() => setUrl('/account/tours/edit/details')}
          />
        </div>
      </form>
    </ToursEditLayout>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  tour_property_types: state.tours.tour_property_types,
  tour_accomodations: state.tours.tour_accomodations,
  languages: state.tours.languages,
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
  getTourPropertyTypes,
  getTourAccomodations,
  tourToServer,
})(Accommodation)
