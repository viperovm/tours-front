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
  getTour,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import Button from "./Button";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import PopUp from "../../PopUp/PopUp";


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
                         getTour,
                         match,
                         res_status,
                         error,
                       }) => {

  const history = useHistory()

  const [url, setUrl] = useState('')
  const [previews, setPreviews] = useState([])
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
    getTourPropertyTypes()
    getTourAccomodations()
    window.scrollTo(0, 0)
    return () => setUrl('')
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    tourToServer({
      ...tour,
      section: 'accommodation',
    }, tour.id)
    setSubmitted(true)
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
    <ToursEditLayout secondary_item='accommodation' secondary_name='Проживание' tour_id={match.params.id}>
      {activePopUp && <PopUp status={'cancel'} title={'Упс... Что-то пошло не так'}
                             text={'Попробуйте заново внести всю информацию на странице и нажать "Продолжить"'} button={'Ок'} action={() => {
        setActivePopUp(false)
        setSubmitted(false)
      }}/>}
        <div className='my-tours-section-heading'>
          <h4>Проживание</h4>
        </div>
      <form onSubmit={handleSubmit}>
        <SingleWrapper label='Где планируется проживание' comment=''>
          <SelectInput
            action={handleInput}
            name='tour_property_types'
            label='Где планируется проживание'
            val={tour && tour.tour_property_types}
            options={tour_property_types}
            multiple={true}
            error={error}
          />
        </SingleWrapper>
        <SingleWrapper
          label='Название отеля'
          comment='Вводите, если уверены в 100% гарантии размещения '
        >
          <Input
            action={handleInput}
            name='hotel_name'
            value={tour && tour.hotel_name}
            options={toursTypes}
            error={error}
          />
        </SingleWrapper>
        <SingleWrapper label='Размещение' comment=''>
          <SelectInput
            action={handleInput}
            name='accomodation'
            label='Размещение'
            val={tour && tour.accomodation}
            options={tour_accomodations}
            multiple={true}
            error={error}
          />
        </SingleWrapper>

        <SingleWrapper
          label='Добавить фото мест проживания в путешествии'
          comment=''
        >
          <ObjectFileInput
            position={'accommodation'}
            tour={tour}
            action={handleImageLoad}
            name='tour_property_images'
            value={tour && tour.tour_property_images}
            type='file'
            error={error}
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
            action={() => setUrl(`/account/tours/${match.params.id}/edit/route`)}
          />
          <Button
            text={'Продолжить'}
            color={'button-success'}
            type='submit'
            action={() => setUrl(`/account/tours/${match.params.id}/edit/details`)}
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
  res_status: state.tours.res_status,
  error: state.tours.error,
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
  getTour,
})(Accommodation)
