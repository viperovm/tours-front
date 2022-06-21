import React from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';

const FilterButton = ({data, action, active}) => {

  const handleClick = () => {
    if(data.name === 'Россия') {
      action(data.id, data.countries[0].country_regions, true)
    } else {
      action(data.id, data.countries, false)
    }
  }

  return (
    <>
      <button className={`${styles.filter_button} ${active === data.id ? styles.active : ''}`} onClick={handleClick}>
        {data.name}
      </button>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton)