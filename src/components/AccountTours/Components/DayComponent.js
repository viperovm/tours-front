import React, { useEffect, useState } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import FileInput from '../FormFields/FileInput'
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

  useEffect(() => {
    if (day && day.image && day.image > 0) {
      let arr = day.image.map(item => arr.push(item.tmb_image))
      setPreviews(arr)
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
    setDayImage(value, id)
  }

  // const handleInput = (name, value) => {
  //   setData({
  //     ...data,
  //     [name]: value,
  //   })
  // }

  // useEffect(() => {
  //   setData({
  //     ...data,
  //     day_id: id,
  //   })
  // }, [])

  // useEffect(() => {
  //   action(data, id)
  // }, [data])

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

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
        <FileInput
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
