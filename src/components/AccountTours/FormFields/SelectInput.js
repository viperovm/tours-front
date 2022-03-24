import React, {useState, useEffect} from 'react'

import Select from 'react-dropdown-select';
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import {connect} from "react-redux";
import {
  tourToServer,
} from "../../../redux/actions/toursActions";

const SelectInput = ({action, name, label, val, options, multiple, margin, basic_type, required, tour,
                       tourToServer}) => {

  const [data, setData] = useState([])
  const [optionsArray, setOptionsArray] = useState([])

  console.log(data)
  console.log(val)
  console.log(basic_type)

  const handleSelect = (values) => {
    if(!multiple){
      action(name, values[0])
    } else {
      action(name, values)
    }
  }

  const handleAddNew = (values) => {
    tourToServer({
      ...tour,
      [name]: values.name
    }, tour.id)
  }

  useEffect(() => {
    if(basic_type) {
      setOptionsArray(options.filter(item => item.id !== basic_type.id))
    } else {
      setOptionsArray(options)
    }
  }, [options, basic_type])

  useEffect(() => {
    if (Array.isArray(val) && val.length > 0 && basic_type) {
      setData(val.filter(item => item.id !== basic_type.id))
    } else if (Array.isArray(val) && val.length > 0) {
      setData(val)
    } else if (val && !Array.isArray(val) && isNotEmptyObject(val)) {
      let arr = []
      arr.push(val)
      setData(arr)
    }
  }, [val, basic_type])

  return (
    <Select
      required={required}
      style={{margin: margin, padding: '10px 20px'}}
      className='custom-select-style'
      placeholder={'Выбрать'}
      searchable
      clearable
      multi={multiple}
      options={optionsArray}
      onChange={handleSelect}
      values={data}
      labelField={'name'}
      valueField={'id'}
      create={!multiple && true}
      onCreateNew={handleAddNew}
      createNewLabel="Добавить {search}"
    />
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  tourToServer,
})(SelectInput)
