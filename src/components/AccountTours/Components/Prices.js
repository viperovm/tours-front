import React, {useEffect, useState} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'

import {connect} from 'react-redux'
import {
  updateTour,
  getCurrencies,
  setSecondaryNav,
  tourToServer,
  getTour,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import ExtraServicesComponent from "./ExtraServicesComponent";
import TextArea from "../FormFields/TextArea";
import Button from "./Button";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import PopUp from "../../PopUp/PopUp";


const Prices = ({
                  tour,
                  secondary_nav,
                  setSecondaryNav,
                  updateTour,
                  getCurrencies,
                  currencies,
                  tourToServer,
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
    getCurrencies()
    window.scrollTo(0, 0)
    return () => setUrl('')
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    tourToServer(tour, tour.id)
    setSubmitted(true)
  }

  const handleInput = (name, value) => {
    updateTour({...tour, [name]: value})
  }

  useEffect(() => {
    if (tour) {
      if (tour.price &&
        tour.currency &&
        tour.prepay_amount &&
        tour.prepay_in_prc &&
        tour.tour_included_services &&
        tour.tour_excluded_services &&
        tour.air_tickets &&
        tour.cancellation_terms) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'prices') {
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
            if (item.value === 'prices') {
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
      <ToursEditLayout secondary_item='prices' secondary_name='Цены' tour_id={match.params.id}>
        {activePopUp && <PopUp status={'cancel'} title={'Упс... Что-то пошло не так'}
                               text={'Попробуйте заново внести всю информацию на странице и нажать "Продолжить"'} button={'Ок'} action={() => {
          setActivePopUp(false)
          setSubmitted(false)
        }}/>}
        <div className='my-tours-section-heading'>
          <h4>Цены</h4>
        </div>

        <form onSubmit={handleSubmit}>

          <DoubleWrapper ratio='2-3'>
            <Input
              required={true}
              action={handleInput}
              name='price'
              label='Стоимость*'
              value={tour && tour.price}
              error={error}
            />
            <SelectInput
              required={true}
              action={handleInput}
              name='currency'
              label='Валюта тура*'
              val={tour && tour.currency}
              options={currencies}
            />
          </DoubleWrapper>

          <SingleWrapper label='Комментарий к стоимости' comment=''>
            <Input
              action={handleInput}
              name='price_comment'
              label='Комментарий к стоимости'
              value={tour && tour.price_comment}
              error={error}
            />
          </SingleWrapper>

          <DoubleWrapper ratio='2-3'>
            <Input
              action={handleInput}
              name='discount'
              label='Размер скидки'
              value={tour && tour.discount}
              error={error}
            />
            <SelectInput
              action={handleInput}
              name='discount_in_prc'
              label='Номинал'
              val={tour && tour.discount_in_prc}
              options={[
                {id: 0, name: 'Число'},
                {id: 1, name: '%'},
              ]}
            />
          </DoubleWrapper>

          <DoubleWrapper ratio='1-2'>
            <Input
              action={handleInput}
              name='discount_starts'
              label='Скидка действует с:'
              value={tour && tour.discount_starts}
              type='date'
              error={error}
            />
            <Input
              action={handleInput}
              name='discount_finish'
              label='Скидка действует до:'
              value={tour && tour.discount_finish}
              type='date'
              error={error}
            />
          </DoubleWrapper>

          <DoubleWrapper ratio='2-3'>
            <Input
              required={true}
              action={handleInput}
              name='prepay_amount'
              label='Предоплата*'
              value={tour && tour.prepay_amount}
              error={error}
            />
            <SelectInput
              required={true}
              action={handleInput}
              name='prepay_in_prc'
              label='Номинал*'
              val={tour && tour.prepay_in_prc}
              options={[
                {id: 0, name: 'Число'},
                {id: 1, name: '%'},
              ]}
            />
          </DoubleWrapper>

          {tour && !tour.postpay_days_before_start && (
            <CheckboxInput
              action={handleInput}
              name='postpay_on_start_day'
              label='Постоплата в день старта'
              comment=''
              value={tour && tour.postpay_on_start_day}
            />
          )}

          {tour && !tour.postpay_on_start_day && (
            <SingleWrapper label='Вносится за дней до старта ' comment=''>
              <Input
                action={handleInput}
                name='postpay_days_before_start'
                label='Вносится за дней до старта'
                value={tour && tour.postpay_days_before_start}
              />
            </SingleWrapper>
          )}

          <ExtraServicesComponent/>

          <SingleWrapper label='В стоимость включено*' comment='Вводить через точку с запятой.'>
            <TextArea
              required={true}
              action={handleInput}
              name='tour_included_services'
              label=''
              value={tour && tour.tour_included_services}
              rows='7'
            />
          </SingleWrapper>

          <SingleWrapper label='В стоимость не включено*' comment='Вводить через точку с запятой.'>
            <TextArea
              required={true}
              action={handleInput}
              name='tour_excluded_services'
              label=''
              value={tour && tour.tour_excluded_services}
              rows='7'
            />
          </SingleWrapper>

          <SingleWrapper label='Авиабилеты*' comment=''>
            <TextArea
              required={true}
              action={handleInput}
              name='air_tickets'
              label=''
              value={tour && tour.air_tickets}
              rows='7'
            />
          </SingleWrapper>

          <CheckboxInput
            action={handleInput}
            name='flight_included'
            label='В стоимость включен перелёт'
            comment=''
            value={tour && tour.flight_included}
          />

          <SingleWrapper
            label='Укажите свои условия отмены:*'
            comment='Расскажите клиентам, какая у вас политика возвратов. Какая сумма вернется пользователю в случае отмены по инициативе путешественника? Обратите внимание, что сервисный сбор платит тревел-эксперт и он является фактически понесенными расходами.'
          >
            <TextArea
              required={true}
              action={handleInput}
              name='cancellation_terms'
              label=''
              value={tour && tour.cancellation_terms}
              rows='7'
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
              action={() => setUrl(`/account/tours/${match.params.id}/edit/review`)}
            />
            <Button
              text={'Продолжить'}
              color={'button-success'}
              type='submit'
              action={() => setUrl(`/account/tours/${match.params.id}/edit/gallery`)}

            />
          </div>

        </form>


      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tours.secondary_nav,
  currencies: state.tours.currencies,
  tour: state.tours.current_tour,
  res_status: state.tours.res_status,
  error: state.tours.error,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
  getCurrencies,
  tourToServer,
  getTour,
})(Prices)
