import React, {useEffect, useState} from 'react';
import styles from './SearchPopUp.module.css';
import {connect} from 'react-redux';
import SearchPopUp from "./SearchPopUp";
import {getToursByFilters, setFilters} from "../../../redux/actions/toursActions";

const SearchData = ({setFilters, filter, current_filters, getToursByFilters}) => {

  const {
    title,
    type,
    data,
  } = filter

  console.log(current_filters)

  const [cols, setCols] = useState(0)

  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    if(current_filters) {
      setCurrentData(current_filters.some(item => item.type === type) ? current_filters.filter(item => item.type === type)[0].data : [] )
    }
  }, [current_filters])

  useEffect(() => {
    if(Array.isArray(data)) {
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

  console.log(data)

  return (
    <>
        <SearchPopUp title={title} type={type} active_button={currentData.length > 0}>
          <div className={styles.search_type_wrapper} style={{columns: cols}}>
            {Array.isArray(data) && data?.map(
              (item, index) =>
                <div key={index} className={`${styles.search_type_element} ${currentData.includes(item.id) ? styles.active : ''}`} onClick={() => handleClick(item.id)}>
                  {item.name}
                </div>
            )}
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchData)

