import React from "react";
import styles from './TourRoute.module.css';

import dateFormat, { masks } from 'dateformat'

const TourRoute = ({start_date, start_city, start_time, finish_date, finish_city, finish_time,}) => {

  console.log(start_date)
  console.log(new Date(start_date))

  return (
    <>
      <div className={styles.tour_route_container}>
        <h3>Маршрут</h3>
        <div className={styles.tour_route_map}>
          Карта
        </div>
        <div className={styles.tour_route_data_container}>
          <div className={styles.tour_route_data}>
            <div className={styles.tour_route_data_title}>Старт:</div>
            <div className={styles.tour_route_data_data}>{dateFormat(new Date(start_date), 'dd.mm.yyyy')}, {start_city}, {start_time} по местному времени</div>
          </div>
          <div className={styles.tour_route_data}>
            <div className={styles.tour_route_data_title}>Финиш:</div>
            <div className={styles.tour_route_data_data}>{dateFormat(new Date(finish_date), 'dd.mm.yyyy')}, {finish_city}, {finish_time} по местному времени</div>
          </div>
        </div>
      </div>

    </>)
}

export default TourRoute