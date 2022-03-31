import React, { useState, useEffect, useRef } from 'react'
import menu from '../../../assets/img/menu-dots.svg'

import { connect } from 'react-redux'
import Modal from "./Modal";
import {useHistory} from "react-router-dom";
import {deleteTeamMember, getTeamMember} from "../../../redux/actions/profileActions";

const TeamCard = ({
                    member,
                    deleteTeamMember,
                    getTeamMember,
                  }) => {
  const history = useHistory()

  const myRef = useRef()

  const [active, setActive] = useState(false)
  const [more, setMore] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [about, setAbout] = useState('')

  useEffect(() => {
    if(member && member.about && member.about.length>120) {
      setMore(true)
      setAbout(member.about.substring(0,120) + '...')
    } else {
      setAbout(member.about)
    }
  })

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setActive(false)
    }
  }

  const handleMemberEdit = () => {
    getTeamMember(member.id)
    history.push('/account/team/edit')
  }

  const handleMenu = () => {
    setActive(true)
  }
  const handleDelete = () => {
    deleteTeamMember(member.id)
    // location.reload()
  }

  return (
    <>
      <div className='team-card'>
        <div className="team-image-wrapper">
          <div
            className='team-image'
            style={{ backgroundImage: 'url(' + member.avatar + ')' }}
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
                onClick={handleMemberEdit}
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
            onClick={handleMemberEdit}
            // style={{ cursor: 'pointer' }}
          >
            {member.full_name}
          </div>
          <div className='team-text'>
            {showMore ? member.about : about}
          </div>
          {more && <div className='team-more' onClick={() => setShowMore(!showMore)}>
            {showMore ? 'скрыть' : 'подробнее...'}
          </div>}
        </div>
      </div>
      {/*</div>*/}
    </>
  )
}

export default connect(null, { getTeamMember, deleteTeamMember })(
  TeamCard
)
