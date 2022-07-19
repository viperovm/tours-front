import React, {useState} from 'react'
import styles from './SearchBar.module.css'
import {connect} from 'react-redux'
import search from './img/search.svg'
import calendar from './img/calendar.svg'
import mappin from './img/mappin.svg'
import Calendar from "./Calendar";
import Button from "../AccountTours/Components/Button";
import {properDate} from "../../functions";
import Region from "./Region";
import {clearSearchDates, clearSearchRegion} from "../../redux/actions/toursActions";

const SearchBar = ({border, current_search_region, current_search_data, clearSearchRegion, clearSearchDates, current_search_dates}) => {

  const [activeCalendar, setActiveCalendar] = useState(false)
  const [activeRegion, setActiveRegion] = useState(false)


  const handleCalendar = () => {
    if (activeRegion) {
      setActiveRegion(false)
    }
    setActiveCalendar(activeCalendar => !activeCalendar)
  }

  const handleRegion = () => {
    if (activeCalendar) {
      setActiveCalendar(false)
    }
    setActiveRegion(activeRegion => !activeRegion)
  }

  return (
    <>
      <div className={`${styles.search_bar_wrapper} ${activeRegion ? styles.active_region : ''}`} style={{marginBottom: border ? 0 : '80px'}}>

        <div className={styles.search_field_wrapper}>
          <div className={styles.search_field}>
            <div className={styles.search_bar_country}>
              <div className={`${styles.search_bar_country_input} ${activeRegion ? styles.active_region : ''}`}
                   onClick={handleRegion}>
                <img src={mappin} alt="Map pin"/>

                { !activeRegion && current_search_region ?
                  <span className={`${styles.search_bar_country_input_text} ${styles.active}`}>
                  {current_search_region?.name}
                    {current_search_data?.length > 0 ? ' (' + current_search_data.map(item => item.name).join(', ') + ')' : ''}
                    </span>
                  :
                  <span className={`${styles.search_bar_country_input_text} ${activeRegion ? styles.active : ''}`}>
                  {activeRegion ? 'Куда: ' : 'Страна, регион или город'}
                    {current_search_region?.name ? current_search_region?.name : ''}
                    {current_search_data?.length > 0 ? ' (' + current_search_data.map(item => item.name).join(', ') + ')' : ''}
                    </span>
                }

              </div>
            </div>

            <div className={styles.search_bar_date}>
              <div className={styles.search_bar_date_input} onClick={handleCalendar}>
                <img src={calendar} alt="Calendar"/>

                { !activeCalendar && current_search_dates.length > 0 ?
                  <span className={`${styles.search_bar_date_input_text} ${styles.active}`}>
                    {current_search_dates.length > 0 ? ' ' + current_search_dates.map(item => properDate(item)).join(' - ') : ''}
                </span>
                  :
                  <span className={`${styles.search_bar_date_input_text} ${activeCalendar ? styles.active : ''}`}>
                  {activeCalendar || current_search_dates.length > 0 ? 'Когда:' : 'Выберите даты'}
                    {current_search_dates.length > 0 ? ' ' + current_search_dates.map(item => properDate(item)).join(' - ') : ''}
                </span>
                }

              </div>
              {activeCalendar && (
                <div className={styles.search_bar_date_active}>
                  <Calendar/>
                  <Button width={'100%'} color={'button-primary'} text={'Применить'} action={() => setActiveCalendar(false)}/>
                  <div className={styles.search_bar_date_active_footer} onClick={clearSearchDates}>
                    <div>Сбросить выбор</div>
                  </div>
                </div>
              )}
            </div>

          </div>
          {activeRegion && (
            <div className={styles.search_bar_region_active}>
              <Region/>
              <Button width={'100%'} color={'button-primary'} text={'Применить'} action={() => setActiveRegion(false)}/>
              <div className={styles.search_bar_date_active_footer} onClick={clearSearchRegion}>
                <div>Сбросить выбор</div>
              </div>
            </div>
          )}
        </div>

        <div className={`${styles.search_bar_button} ${border ? styles.search_bar_button_border : ''}`}>
          <img src={search} alt="Search"/>
          <span>Подобрать тур</span>
        </div>

      </div>
    </>
  )
}

const mapStateToProps = state => ({
  current_search_region: state.tours.current_search_region,
  current_search_data: state.tours.current_search_data,
  current_search_dates: state.tours.current_search_dates,
})

const mapDispatchToProps = {
  clearSearchRegion,
  clearSearchDates,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)