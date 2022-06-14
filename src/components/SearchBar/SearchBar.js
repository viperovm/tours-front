import React, {useState} from 'react'
import styles from './SearchBar.module.css'
import {connect} from 'react-redux'
import search from './img/search.svg'
import calendar from './img/calendar.svg'
import mappin from './img/mappin.svg'
import Calendar from "./Calendar";
import Button from "../AccountTours/Components/Button";
import {properDate} from "../../functions";

const SearchBar = () => {

  const [activeCalendar, setActiveCalendar] = useState(false)
  const [activeRegion, setActiveRegion] = useState(false)
  const [searchDates, setSearchDates] = useState([])
  const [searchRegion, setSearchRegion] = useState([])

  const handleSearchDates = (arr) => {
    setSearchDates(arr)
  }

  const handleCalendar = () => {
    if(activeRegion) {
      setActiveRegion(false)
    }
    setActiveCalendar(activeCalendar => !activeCalendar)
  }

  const handleRegion = () => {
    if(activeCalendar) {
      setActiveCalendar(false)
    }
    setActiveRegion(activeRegion => !activeRegion)
  }

  console.log(searchDates.map(item => properDate(item)))

  return (
    <>
        <div className={styles.search_bar_wrapper}>
            <div className={styles.search_bar_country}>
              <div className={styles.search_bar_country_input} onClick={handleRegion}>
                <img src={mappin} alt="Map pin"/>
                <span className={`${styles.search_bar_country_input_text} ${activeRegion ? styles.active : ''}`}>
                  {activeRegion || searchRegion.length > 0 ? 'Куда:' : 'Страна, регион или город'}
                  {searchRegion.length > 0 ? ' ' + searchRegion.map(item => properDate(item)).join(' - ') : ''}
                </span>
              </div>

            </div>
            <div className={styles.search_bar_date}>
              <div className={styles.search_bar_date_input} onClick={handleCalendar}>
                <img src={calendar} alt="Calendar"/>
                <span className={`${styles.search_bar_date_input_text} ${activeCalendar ? styles.active : ''}`}>
                  {activeCalendar || searchDates.length > 0 ? 'Когда:' : 'Выберите даты'}
                  {searchDates.length > 0 ? ' ' + searchDates.map(item => properDate(item)).join(' - ') : ''}
                </span>
              </div>
              {activeCalendar && (
                <div className={styles.search_bar_date_active}>
                  <Calendar data={searchDates} action={handleSearchDates}/>
                  <Button width={'100%'} color={'button-primary'} text={'Применить'}/>
                  <div className={styles.search_bar_date_active_footer} onClick={() => handleSearchDates([])}>
                    <div>Сбросить выбор</div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.search_bar_button}>
              <img src={search} alt="Search"/>
              <span>Подобрать тур</span>
            </div>
        </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)