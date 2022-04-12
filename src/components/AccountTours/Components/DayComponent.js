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
  deleteDayImage,
} from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Day = ({ id, day, action, tour, addDay, updateDay, setDayImage, deleteDayImage, error }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [previews, setPreviews] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    if(previews.length === 0 && day && day.image && Array.isArray(day.image) && day.image.length > 0) {
      setPreviews(day.image)
      setLoading(true)
    }
  }, [previews])


  useEffect(() => {
    if (day && day.image && Array.isArray(day.image) && day.image.length > 0) {
      setPreviews(day.image)
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
    setLoading(false)
  }

  const handleImageDelete = (image) => {
    setLoading(true)
    deleteDayImage(day.id, image.id)
    setPreviews(previews.filter(item => item.id !== image.id))
    setLoading(false)
  }

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
          action={handleInput}
          name='day_title'
          value={day && day.day_title}
          error={error}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Локация' comment=''>
        <Input
          action={handleInput}
          name='location'
          value={day && day.location}
          error={error}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Описание дня' comment=''>
        <TextEditor
          action={handleInput}
          name='description'
          value={day && day.description}
          error={error}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Добавить фото'
        comment='Вы можете добавить до 3 фото для каждого дня'
      >
        {!loading && <ObjectFileInput
          required={day && !day.image}
          action={handleImageInput}
          name='day_photo'
          type='file'
          max={3}
          value={previews}
          delete_action={handleImageDelete}
          error={error}
        />}
        {loading && (
          <CircularProgress/>
        )}
      </SingleWrapper>

    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  error: state.tours.error,
})

export default connect(mapStateToProps, { addDay, updateDay, setDayImage, deleteDayImage })(Day)
