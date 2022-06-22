import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import FilterButton from "./FilterButton";
import {getSearchRegions} from "../../redux/actions/toursActions";

const FilterButtons = ({getSearchRegions, search_regions = []}) => {

  useEffect(() => {
    getSearchRegions()
  }, [])

  return (
    <>
      <div className={styles.filter_buttons_wrapper}>
        {search_regions?.map((item, index) => <FilterButton key={index} data={item}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  search_regions: state.tours.search_regions
})
const mapDispatchToProps = {
  getSearchRegions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButtons)