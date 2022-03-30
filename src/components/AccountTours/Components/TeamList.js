import React, { useEffect, useState } from 'react'
import TourCard from "./TourCard"
import { connect } from "react-redux"
import img1 from '../../../pages/account/Team/img/1.png'
import img2 from '../../../pages/account/Team/img/2.png'
import img3 from '../../../pages/account/Team/img/3.png'
import img4 from '../../../pages/account/Team/img/4.png'

import {
  getTours
} from '../../../redux/actions/toursActions'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import TeamCard from "./TeamCard";

const data = [
  {
    id: 1,
    image: img1,
    name: 'Максим Орлов',
    text: 'Любитель адреналина, рассветов и закатов. Между собой мы его зовём "ГурманДЭнис" :) Он знает , где вас вкусно накормить в любо ... ',
  },
  {
    id: 2,
    image: img2,
    name: 'Мария Антонова',
    text: 'Отправляясь в путешествие, мы хотим получше узнать наш мир, а оказывается мы узнаём лучше самих себя. Открывая новые страны, мы открываем ...',
  },
  {
    id: 3,
    image: img3,
    name: 'Егор Летов',
    text: 'Трэвел для меня - это новые впечатления и эмоции, расширение границ сознания и погружение в новую культуру, местами преодоление себя ...',
  },
  {
    id: 4,
    image: img4,
    name: 'Анастасия Петрова',
    text: 'Путешествия для меня – это способ заглянуть за привычный уклад дом-работа-дом. И узнать, что там целый мир непознанных культур и сногс ...',
  },
]

const TeamList = ({ tours, getTours }) => {
  useEffect(() => {
    getTours()
  }, [])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(tours.length>0 && loading){
      setLoading(false)
    }
  }, [tours, loading])

  const handleAction = () => {
    setLoading(true)
  }

  return (
    <>
      <div
        className={`tours-wrapper`}
      >
        {!loading && data.map((item, index) => <TeamCard key={index} team={item} action={handleAction} />)}
        {loading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  tours: state.tours.tours,
})

export default connect(mapStateToProps, { getTours })(TeamList)