import React, {useEffect} from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {getSearchFilters, getToursByFilters} from "../../redux/actions/toursActions";
import SearchData from "./SearchPopUp/SearchData";

const SearchButtonsSection = ({action, getSearchFilters, filters, current_filters, getToursByFilters}) => {

  useEffect(()=> {
    const handleRequest = (data) => {
      action()
      getToursByFilters(data)
    }
    if(current_filters) {
      console.log(current_filters)
      let search_str = current_filters.filter(item => !item.hasOwnProperty('field')).map(item => {
        console.log(item)
        console.log(item.type)

        return `${item.type}=${Array.isArray(item.data) && item.data.length > 1 ? item.data.join(',') : item.data}`
      })
      console.log(search_str)
      let field = current_filters.filter(item => item.hasOwnProperty('field'))[0]
      handleRequest(search_str.join('&') + '&field=' + field?.field)
    }
  }, [current_filters])

  useEffect(() => {
    getSearchFilters()
  }, [])


  return (
    <>
      {filters?.map((item, index) => <SearchData key={index} filter={item}/>)}
    </>
  );
};

const mapStateToProps = state => ({
  current_filters: state.tours.current_filters
})
const mapDispatchToProps = {
  getSearchFilters,
  getToursByFilters,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchButtonsSection)