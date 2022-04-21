import React from 'react';
import styles from './Tours.module.css';
import heart from './heart.svg'

const Tour = ({tour}) => {
  return (
    <>
      <div className={styles.tour_card}>
        <div className={styles.tour_image}>
          <div className={styles.tour_favourite}>
            <img src={heart} alt="favourite"/>
          </div>
          <div className={styles.tour_badges}>
            {tour && tour.badges && tour.badges.map(item => (
              <div className={styles.tour_badge + ' ' + styles[item.color]}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.tour_data}>
          <div className={styles.tour_name_section}>
            <div className={styles.tour_country}></div>
            <div className={styles.tour_name}></div>
          </div>
          <div className={styles.tour_data_section}>
            <div className={styles.tour_leader_section}>
              <div className={styles.leader_avatar}></div>
              <div className={styles.tour_leader_name_section}>
                <div className={styles.leader_name}></div>
                <div className={styles.leader_rating}></div>

              </div>
            </div>
            <div className={styles.tour_price_section}>
              <div className={styles.tour_duration}></div>
              <div className={styles.tour_price}></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Tour;