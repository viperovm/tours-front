import React, {useState, useEffect} from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import Select from 'react-dropdown-select';
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import {connect} from "react-redux";
import {
  getCities,
  tourToServer,
} from "../../../redux/actions/toursActions";
import useDebounce from "../../../hooks/useDebounce";
import axios from "axios";
import {GET_CITIES_FAIL, GET_CITIES_SUCCESS} from "../../../redux/types";

const CitySelectInput = ({action, name, label, val, options, multiple, margin, basic_type, required, tour,
                       tourToServer, labelField='name'}) => {

  const [data, setData] = useState([])
  const [optionsArray, setOptionsArray] = useState([])

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

  // function searchCharacters(search) {
  //   return fetch(
  //     `http://x3mart.ru/api/cities/?search=${search}`,
  //     {
  //       method: 'GET'
  //     }
  //   )
  //     .then(r => r.json())
  //     .then(r => r.data.results)
  //     .catch(error => {
  //       console.error(error);
  //       return [];
  //     });
  // }

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchCharacters = async (search) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get(`http://x3mart.ru/api/cities/?search=${search}`, config)
      setResults(res.data)
      setIsSearching(false);
    } catch (err) {
      console.log(err)
    }
  }

  const onSearch = ({ props, state, methods }) => {
    setSearchTerm(state.search)
  };

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm)
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );

  const customNoDataRenderer = ({ props, state, methods }) => {

    return (
      <>
        <div className='custom-select-dropdown'>
          {props.options.length === 0 && !isSearching && <div className='select-empty-list'>
            Нет данных. Начните набирать название города для поиска.
          </div>}

          {
            isSearching &&
            <div className='select-searching'>
              <CircularProgress/>
            </div>
          }
          {
            props.options &&
            <div>
              <ul>
                {props.options.map(item => <li className={'select-list'} onClick={() => methods.addItem(item)}>{item.full_name}</li>)}
              </ul>
            </div>
          }
        </div>
      </>
    )

  };


  return (
    <Select
      required={required}
      style={{margin: margin, padding: '10px 20px'}}
      className='custom-select-style'
      placeholder={'Выбрать'}
      searchable={true}
      clearable
      multi={multiple}
      options={results}
      onChange={handleSelect}
      values={data}
      labelField={'full_name'}
      valueField={'id'}
      create={!multiple && true}
      onCreateNew={handleAddNew}
      createNewLabel="Добавить {search}"
      searchFn={onSearch}
      noDataRenderer={customNoDataRenderer}
      // dropdownRenderer={customDropdownRenderer}
      // inputRenderer={({ props, state, methods, inputRef }) => <component ref={inputRef}/>}
    />
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  tourToServer,
})(CitySelectInput)
