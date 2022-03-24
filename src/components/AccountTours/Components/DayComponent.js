import React, { useEffect, useState } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import TextEditor from '../FormFields/TextEditor'
import Button from './Button'

import {
  addDay,
  updateDay,
  setDayImage,
} from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'

const Day = ({ id, day, action, tour, addDay, updateDay, setDayImage }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [previews, setPreviews] = useState([])

  console.log(previews)

  useEffect(() => {
    let arr = []
    if (day && day.image && Array.isArray(day.image) && day.image.length > 0) {
      day.image.map(item => {
        if (!day.image.includes(item.tmb_image)) {
          arr.push(item.tmb_image)
        }
      })
      setPreviews(arr)
      setLoading(true)
    }
  }, [day])

  useEffect(() => {
    if (day && day.image) {
      setLoading(false)
    }
  }, [day])

  const handleInput = (name, value) => {
    updateDay(id, name, value)
  }
  const handleImageInput = value => {
    setLoading(true)
    setDayImage(value, id, tour.id)
  }

  console.log(day)
  console.log(tour)


  return (
    <>
      <SingleWrapper
        label={`День ${id}`}
        comment={
          <div>
            <p>
              Заполните описание каждого дня путешествия в отдельной ячейке.
            </p>
            <p>
              Количество дней в описании должно совпадать с количеством дней в
              туре.
            </p>
            <p>
              Исключение составляют путешествия следующих типов: арт,
              горнолыжный, йога, мама и малыш, серфинг, фитнес.
            </p>
          </div>
        }
      >
        <Input
          required={true}
          action={handleInput}
          name='day_title'
          value={day && day.day_title}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Локация' comment=''>
        <Input
          action={handleInput}
          name='location'
          value={day && day.location}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Описание дня' comment=''>
        <TextEditor
          required={true}
          action={handleInput}
          name='description'
          value={day && day.description}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Добавить фото'
        comment='Вы можете добавить до 3 фото для каждого дня'
      >
        <ObjectFileInput
          required={true}
          action={handleImageInput}
          name='day_photo'
          type='file'
          max={3}
          value={previews}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, { addDay, updateDay, setDayImage })(Day)
