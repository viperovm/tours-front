import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import FilterButton from "./FilterButton";
import {getSearchRegions} from "../../redux/actions/toursActions";

const FilterButtons = ({regions, action}) => {

  const [currentRegion, setCurrentRegion] = useState(null)
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])
  const [isRussia, setIsRussia] = useState(false)

  const handleRegionSet = (id, data, is_russia) => {
    if(currentRegion === id) {
      setCurrentRegion(null)
      setCountries([])
      setCities([])
      setIsRussia(false)
    } else {
      setCurrentRegion(id)
      if(is_russia) {
        setIsRussia(true)
        setCities(data)
      } else {
        setIsRussia(false)
        setCountries(data)
      }
    }
  }

  useEffect(() => {
    if(countries || cities || isRussia) {
      if(isRussia) {
        action(cities, isRussia)
      } else {
        action(countries, isRussia)
      }
    }
  }, [countries, cities, isRussia])

  return (
    <>
      <div className={styles.filter_buttons_wrapper}>
        {regions.map((item, index) => <FilterButton key={index} data={item} action={handleRegionSet} active={currentRegion}/>)}
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButtons)