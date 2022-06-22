import React from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {setSearchData} from "../../redux/actions/toursActions";

const FilterData = ({setSearchData, current_search_data, search_data=[]}) => {

  const handleClick = (data) => {
    setSearchData(data)
  }

  return (
    <>
      {search_data.length > 0 && <div className={styles.filter_selectable_data_wrapper}>
        {search_data?.map((item, index) => <div key={index} onClick={() => handleClick(item)}
                                                className={`${styles.selectable_data} ${current_search_data?.some(val => val.id === item.id) ? styles.active_data : ''}`}>{item.name}</div>)}
      </div>}
    </>
  );
};

const mapStateToProps = state => ({
  search_data: state.tours.search_data,
  current_search_data: state.tours.current_search_data
})
const mapDispatchToProps = {
  setSearchData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterData)