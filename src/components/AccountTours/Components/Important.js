import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import TextEditor from '../FormFields/TextEditor'
import Button from './Button'

import { connect } from 'react-redux'
import {
  getTourTypes,
  getTourPropertyTypes,
  getTourAccomodations,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
  setSecondaryNav,
  tourToServer,
  clearCurrentTour,
  getTour,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";

const ExtraServices = ({
                         tour,
                         secondary_nav,
                         setSecondaryNav,
                         updateTour,
                         tourToServer,
                         clearCurrentTour,
                         getTour,
                         match,
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
    } else if(submitted && res_status >= 400 && res_status < 600) {
      setActivePopUp(true)
    }
  }, [submitted, res_status])

  const handleRedirect = () => {
    setSubmitted(false)
    if(url && url === '/account/tours/list') {
      clearCurrentTour()
    }
    history.push(url)
  }

  useEffect(() => {
    const loadTour = async () => {
      setLoading(true)
      await getTour(match.params.id)
      setLoading(false)
    }
    if (!isNotEmptyObject(tour)) {
      loadTour()
    }
  }, [tour])

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => setUrl('')
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if(url && url === '/account/tours/list') {
      tourToServer({
        ...tour,
        on_moderation: true,
      }, tour.id)
    } else if(url!==''){
      tourToServer(tour, tour.id)
    }
    handleRedirect()
  }

  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  useEffect(() => {
    if (tour) {
      if (tour.take_with) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'day') {
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
            if (item.value === 'day') {
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
      <ToursEditLayout secondary_item='important' secondary_name='Важно знать' tour_id={match.params.id}>
        <div className='my-tours-section-heading'>
          <h4>Важно знать</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <SingleWrapper label='Требования к гостю' comment=''>
            <TextEditor
              action={handleInput}
              name='guest_requirements'
              value={tour && tour.guest_requirements}
            />
          </SingleWrapper>


          <SingleWrapper label='Что взять с собой?*' comment=''>
            <TextEditor
              required={true}
              action={handleInput}
              name='take_with'
              value={tour && tour.take_with}
            />
          </SingleWrapper>

          <SingleWrapper label='Ключевые  особенности?' comment=''>
            <TextEditor
              action={handleInput}
              name='key_features'
              value={tour && tour.key_features}
            />
          </SingleWrapper>

          <SingleWrapper label='Что нового я увижу?' comment=''>
            <TextEditor
              action={handleInput}
              name='new_to_see'
              value={tour && tour.new_to_see}
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
              action={() => setUrl(`/account/tours/${match.params.id}/edit/accommodation`)}
            />

            <Button
              text={'На модерацию'}
              color={'button-success'}
              type='submit'
              action={() => setUrl('/account/tours/list')}
            />
          </div>
        </form>
      </ToursEditLayout>
    </>
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
  clearCurrentTour,
  getTour,
})(ExtraServices)
