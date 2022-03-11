import React from "react";
import styles from './TourInfoBlocks.module.css';

const TourInfoBlocks = ({comfort, difficulty= 5, language, age}) => {

  const DifficultyDots = ({difficulty}) => {
    const arr = [1, 2, 3, 4, 5]
    return (<div className={styles.dots_container}>
      {arr.map((item, index) => {
        console.log(item, difficulty)
        let color = item <= difficulty ? "#EF8F21" : "#CFD4DE"
        return (<svg key={index} width="11" height="11" viewBox="0 0 11 11" fill={color} xmlns="http://www.w3.org/2000/svg">
          <circle cx="5.5" cy="5.5" r="5.5"/>
        </svg>)
      })}
    </div>)
  }

  return (<>
      <div className={styles.tour_info_blocks_container}>
        <div className={styles.tour_info_block}>
          <div>
            <div className={styles.tour_info_block_value}>{comfort}</div>
            <div className={styles.tour_info_block_name}>Комфорт</div>
          </div>
        </div>
        <div className={styles.tour_info_block}>
          <div>
            <div className={styles.tour_info_block_value}><DifficultyDots difficulty={difficulty}/></div>
            <div className={styles.tour_info_block_name}>Сложность</div>
          </div>
        </div>
        <div className={styles.tour_info_block}>
          <div>
            <div className={styles.tour_info_block_value} style={{backgroundImage: 'url(' + language[0] + ')', width: '27px', height: '27px', borderRadius: '50%'}}/>
            <div className={styles.tour_info_block_name}>Язык</div>
          </div>
        </div>
        <div className={styles.tour_info_block}>
          <div>
            <div className={styles.tour_info_block_value}>{age}</div>
            <div className={styles.tour_info_block_name}>Допустимый возраст</div>
          </div>
        </div>

      </div>
    </>)
}

export default TourInfoBlocks
