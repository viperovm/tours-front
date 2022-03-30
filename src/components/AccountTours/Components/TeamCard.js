import React, { useState, useEffect, useRef } from 'react'
import cart from '../../../assets/img/shopping-cart.svg'
import view from '../../../assets/img/view.svg'
// import menu from '../../../assets/img/trash.svg'
import menu from '../../../assets/img/menu-dots.svg'
import dateFormat, { masks } from 'dateformat'

import {
  deleteTour,
  updateTour,
  setEditing,
  getTour,
} from '../../../redux/actions/toursActions'

import { connect } from 'react-redux'
import Modal from "./Modal";
import {useHistory} from "react-router-dom";

const TeamCard = ({
                    team,
                    action,
                    menu_action,
                    click_action,
                    deleteTour,
                    updateTour,
                    setEditing,
                    getTour,
                  }) => {
  const history = useHistory()
  // const label = tour.is_active
  //   ? 'Опубликовано'
  //   : tour.on_moderation
  //     ? 'На Модерации'
  //     : tour.is_draft
  //       ? 'Черновик'
  //       : ''
  // const cssClass = tour.is_active
  //   ? 'active'
  //   : tour.on_moderation
  //     ? 'moderation'
  //     : tour.is_draft
  //       ? 'draft'
  //       : ''

  const myRef = useRef()

  const [active, setActive] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setActive(false)
    }
  }

  const handleTourEdit = () => {
    getTour(tour.id)
    history.push('/account/tours/edit/main')
  }

  const handleTourCopy = () => {
    getTour(tour.id)
    setEditing(true)
  }

  const handleMenu = () => {
    setActive(true)
  }
  const handleDelete = () => {
    deleteTour(tour.id)
    location.reload()
  }

  return (
    <>
      <div className='team-card'>
        <div className="team-image-wrapper">
          <div
            className='team-image'
            style={{ backgroundImage: 'url(' + team.image + ')' }}
          >
            <div
              className='tour-menu-dots'
              style={{
                padding: '5px',
                position: 'absolute',
                top: 0,
                right: 0,
                cursor: 'pointer',
              }}
              onClick={handleMenu}
            >
              <img src={menu} alt='menu' />
            </div>
            <div
              className='tour-menu'
              ref={myRef}
              style={{
                position: 'absolute',
                top: 20,
                right: 25,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                borderRadius: 8,
                backgroundColor: '#fff',
                display: active ? 'block' : 'none',
              }}
            >
              <div
                className='tour-item-top'
                style={{
                  padding: 10,
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  lineHeight: '15px',
                  textAlign: 'right',
                  cursor: 'pointer',
                }}
                onClick={handleTourEdit}
              >
                Изменить
              </div>
              <div
                className='tour-item-bottom'
                style={{
                  padding: 10,
                  lineHeight: '15px',
                  textAlign: 'right',
                  cursor: 'pointer',
                }}
                onClick={handleDelete}
              >
                Удалить
              </div>
            </div>
        </div>
        </div>
        <div className='team-data'>
          <div
            className='team-name'
            onClick={handleTourEdit}
            // style={{ cursor: 'pointer' }}
          >
            {team.name}
          </div>
          <div className='team-text'>
            {team.text}
          </div>
          <div className='team-more'>
            подробнее
          </div>
        </div>
      </div>
      {/*</div>*/}
    </>
  )
}

export default connect(null, { deleteTour, updateTour, setEditing, getTour })(
  TeamCard
)
