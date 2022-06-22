import React from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {clearSearchRegion, getSearchData, setSearchIsRussia, setSearchRegion} from "../../redux/actions/toursActions";

const FilterButton = ({setSearchIsRussia, getSearchData, setSearchRegion, clearSearchRegion, data, current_search_region}) => {

  const handleClick = () => {
    if(data.name === 'Россия') {
      clearSearchRegion()
      setSearchIsRussia(true)
      getSearchData(data.countries[0].country_regions)
      setSearchRegion(data)
    } else {
      clearSearchRegion()
      setSearchIsRussia(false)
      getSearchData(data.countries)
      setSearchRegion(data)
    }
  }

  return (
    <>
      <button className={`${styles.filter_button} ${current_search_region?.id === data.id ? styles.active : ''}`} onClick={handleClick}>
        {data.name}
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  current_search_region: state.tours.current_search_region
})
const mapDispatchToProps = {
  setSearchIsRussia,
  getSearchData,
  setSearchRegion,
  clearSearchRegion
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton)