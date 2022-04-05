import React, {useState, useEffect} from 'react'

import Select from 'react-dropdown-select';
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import {connect} from "react-redux";
import {
  tourToServer,
} from "../../../redux/actions/toursActions";

const SelectInput = ({action, name, label, val, options, multiple, margin, basic_type, required, tour,
                       tourToServer, labelField='name', currency, prc=false}) => {

  const [data, setData] = useState([])
  const [optionsArray, setOptionsArray] = useState([])

  useEffect(() => {
    if(prc && currency) {
      setOptionsArray([{id: 0, name: currency}, {id: 1, name: '%'}])
    }
  }, [prc, currency])

  useEffect(() => {
    if(prc && optionsArray) {
      let arr = []
      if(val === true) {
        arr.push(optionsArray[1])
      } else if(val === false) {
        arr.push(optionsArray[0])
      }
      setData(arr)
    }
  }, [prc, optionsArray, val])

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
    } else if(prc) {
    } else {
      setOptionsArray(options)
    }
  }, [options, basic_type, prc, val])

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
    <>
      {!prc && <Select
        required={required}
        style={{margin: margin, padding: '10px 20px'}}
        className='custom-select-style'
        placeholder={'Выбрать'}
        searchable
        // clearable
        multi={multiple}
        options={optionsArray}
        onChange={handleSelect}
        values={data}
        labelField={labelField}
        valueField={'id'}
        create={!multiple && true}
        onCreateNew={handleAddNew}
        createNewLabel="Добавить {search}"
      />}
      {prc && optionsArray.length> 0 && <Select
        required={required}
        style={{margin: margin, padding: '10px 20px'}}
        className='custom-select-style'
        placeholder={'Выбрать'}
        // clearable
        options={optionsArray}
        onChange={handleSelect}
        values={data}
        labelField={'name'}
        valueField={'id'}
      />}
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  tourToServer,
})(SelectInput)
