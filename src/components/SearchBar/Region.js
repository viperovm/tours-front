import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {Calendar as Cal} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SearchBar.css'
import {getSearchRegions} from "../../redux/actions/toursActions";
import FilterButtons from "./FilterButtons";
import FilterCountries from "./FilterCountries";
import FilterCities from "./FilterCities";

const Region = ({getSearchRegions, search_regions}) => {

  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])
  const [isRussia, setIsRussia] = useState(false)

  useEffect(() => {
    getSearchRegions()
  }, [])

  const handleRegionAction = (data, is_russia) => {

    setIsRussia(is_russia)
    if(is_russia) {
      setCities(data)
    } else {
      setCountries(data)
    }
  }

  return (
    <>
      <div className={styles.traveler_region}>
        <FilterButtons regions={search_regions} action={handleRegionAction}/>
        {countries && <FilterCountries data={countries} action={handleRegionAction}/>}
        {cities && <FilterCities data={cities} action={handleRegionAction}/>}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  search_regions: state.tours.search_regions
})
const mapDispatchToProps = {
  getSearchRegions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Region)