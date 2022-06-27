import React, {useEffect, useState} from 'react';
import styles from './SearchPopUp.module.css';
import {connect} from 'react-redux';
import SearchPopUp from "./SearchPopUp";
import {getToursByFilters, setFilters, setRangeFilters, setRatingFilters} from "../../../redux/actions/toursActions";
import MultiRangeSlider from "../MultiRangeSlider";
import RatingComponent from "../RatingComponent";

const SearchData = ({setFilters, filter, current_filters, getToursByFilters, setRangeFilters, setRatingFilters}) => {

  const {
    title,
    type,
    data,
    filter_type,
  } = filter


  const [cols, setCols] = useState(0)

  const [currentData, setCurrentData] = useState([])

  if(type === 'price') {
    console.log(filter)
    console.log(currentData)
  }


  useEffect(() => {
    if(current_filters) {
      setCurrentData(current_filters.some(item => item.type === type) ? current_filters.filter(item => item.type === type)[0].data : [] )
    }
  }, [current_filters])

  useEffect(() => {
    if(filter_type === 'range' || filter_type === 'rating' || filter_type === 'radio') {
      setCols(1)
    } else if(Array.isArray(data) && filter_type !== 'range' && filter_type !== 'rating' && filter_type !== 'radio') {
      if(data?.length <= 14) {
        setCols(2)
      } else if(data?.length <= 21) {
        setCols(3)
      } else if(data?.length <= 28) {
        setCols(4)
      } else if(data?.length <= 35) {
        setCols(5)
      } else {
        setCols(6)
      }
    }
  }, [data])

  const handleClick = id => {
    setFilters(type, id)
  }

  const handleRangeChange = (min, max) => {
    const data = [min, max]
    console.log(data)
    setRangeFilters(type, data)
  }

  const handleRatingChange = (num) => {
    setRatingFilters(type, num)
  }

  return (
    <>
        <SearchPopUp title={title} type={type} active_button={currentData.length > 0}>
          <div className={styles.search_type_wrapper} style={{columns: cols}}>
            {filter_type !== 'range' && Array.isArray(data) && data?.map(
              (item, index) =>
                <div key={index} className={`${styles.search_type_element} ${currentData.includes(item.id) ? styles.active : ''}`} onClick={() => handleClick(item.id)}>
                  {item.name}
                </div>
            )}

            {filter_type === 'range' && data && <MultiRangeSlider
              value_min={currentData.length > 0 ? currentData[0] : data[0]}
              value_max={currentData.length > 0 ? currentData[1] : data[1]}
              min={data[0]}
              max={data[1]}
              onChange={handleRangeChange}
            />}

            {(filter_type === 'rating' || filter_type === 'radio') &&
              <RatingComponent type={type} data={data} onChange={handleRatingChange}/>
            }
          </div>
        </SearchPopUp>
    </>
  );
};

const mapStateToProps = state => ({
  current_filters: state.tours.current_filters
})
const mapDispatchToProps = {
  setFilters,
  getToursByFilters,
  setRangeFilters,
  setRatingFilters,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchData)

