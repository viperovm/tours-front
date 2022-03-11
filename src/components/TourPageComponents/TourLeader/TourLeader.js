import React, {useEffect, useState} from "react";
import styles from './TourLeader.module.css';
import star from './star.svg'

const TourLeader = ({leader}) => {

  console.log(leader)

  return (
    <>
      <h3>Тревел-эксперт</h3>
      <div className={styles.tour_leader_container}>
        <div className={styles.tour_leader_header}>
          <div className={styles.tour_leader_avatar} style={{backgroundImage: 'url(' + leader.tmb_avatar + ')'}}/>
          <div className={styles.tour_leader_about}>
            <div className={styles.tour_leader_name}>
              {leader && leader.first_name} {leader && leader.last_name}
            </div>
            <div className={styles.tour_leader_bio} dangerouslySetInnerHTML={{__html: leader.about}}/>
          </div>

        </div>
        <div className={styles.tour_leader_footer}>
          <div className={styles.tour_leader_ratings}>
            <div className={styles.tour_leader_ratings_row}>
              <div className={styles.tour_leader_ratings_name}>
                Рейтинг:
              </div>
              <div className={styles.tour_leader_ratings_value}>
                <img src={star} alt="star"/><span>
                {leader && leader.rating ? leader.rating : '0.0'}
              </span>
              </div>
            </div>
            <div className={styles.tour_leader_ratings_row}>
              <div className={styles.tour_leader_ratings_name}>
                Отзывы:
              </div>
              <div className={styles.tour_leader_ratings_value}>
                {leader && leader.reviews ? leader.reviews : 0}
              </div>
            </div>
            <div className={styles.tour_leader_ratings_row}>
              <div className={styles.tour_leader_ratings_name}>
                Активных туров:
              </div>
              <div className={styles.tour_leader_ratings_value}>
                {leader && leader.tours ? leader.tours : 0}
              </div>
            </div>
          </div>
          <button className={styles.tour_leader_button}>
            Написать эксперту
          </button>

        </div>
      </div>

    </>)
}

export default TourLeader
