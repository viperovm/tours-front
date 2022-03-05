import React, { useEffect, useState } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import TextEditor from '../FormFields/TextEditor'
import Button from './Button'

import {
  addExtraService,
  updateExtraService,
  setDayImage,
} from '../../../redux/actions/toursActions'
import { connect } from 'react-redux'

const Day = ({ id, day, action, tour, addExtraService, updateExtraService, setDayImage }) => {
  

  const handleInput = (name, value) => {
    updateExtraService(id, name, value)
  }
 
  return (
    <>
      <SingleWrapper label='Дополнительно (необязательно)' comment=''>
        <TextEditor
          action={handleInput}
          name='extra_text'
          value={day && day.extra_text}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Стоимость услуги (необязательно)' comment=''>
        <Input
          action={handleInput}
          name='extra_service_price'
          value={day && day.extra_service_price}
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

export default connect(mapStateToProps, { addExtraService, updateExtraService, setDayImage })(Day)
