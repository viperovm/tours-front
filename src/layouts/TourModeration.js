import Footer from "../wrappers/footer/Footer";
import Header from "../wrappers/header/Header";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import Modal from "../components/AccountTours/Components/Modal";
import PopUp from "../components/PopUp/PopUp";
import {getTourReview} from "../redux/actions/toursActions";
import axios from "axios";

const TourModeration = ({ children, page, background = 'transparent', tour_id }) => {

  const [decline, setDecline] = useState('')
  const [active, setActive] = useState(false)

  const handleModal = () => {
    setActive(true)
  }

  const handleDeclineInput = (e) => {
    setDecline(e.target.value)
  }

  const handleDecline = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }
    const body = JSON.stringify({reason: decline})
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/decline/
`,body , config)
      window.location.replace(`${process.env.REACT_APP_API_URL}/admin/tours/moderatedtour/`)
    } catch (e) {
      console.error(e)
    }
  }

  const handleApprove = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }
    const body = null
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/approve/ 
`,body , config)
      window.location.replace(`${process.env.REACT_APP_API_URL}/admin/tours/moderatedtour/`)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <section>
        {active && <PopUp
          status={'danger'}
          title={'Напишите причину отказа'}
          // text={'Информация будет удалена навсегда.'}
          button={'Отправить'}
          button2={'Отменить'}
          with_field={true}
          action={handleDecline}
          input_action={handleDeclineInput}
          input_value={decline}
          second_action={() => setActive(false)}
          />}
        <div className='wrapper'>
          <div className='global-h2-heading' style={{marginTop: '50px'}}>
            <h2>Просмотр тура</h2>
          </div>
          <div className='control-buttons'>
            <div className='control-buttons-set'>
            </div>
            <div className='control-buttons-set'>
              <button className='button-green' onClick={handleApprove}>
                Принять
              </button>
              <button className='button-red' onClick={handleModal}>
                Отклонить
              </button>
            </div>
          </div>

        </div>
        <main style={{backgroundColor: background, zIndex: '0'}}>
          {children}
        </main>

        <div className='wrapper'>
          <div className='control-buttons bottom'>
            <div className='control-buttons-set'>
            </div>
            <div className='control-buttons-set'>
              <button className='button-green' onClick={handleApprove}>
                Принять
              </button>
              <button className='button-red' onClick={handleModal}>
                Отклонить
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

const mapDispatchToProps = {getTourReview,}

export default connect(null, mapDispatchToProps)(TourModeration)
