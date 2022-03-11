import React, {useState} from "react";
import styles from './TourDays.module.css';
import down from './down.svg'
import up from './up.svg'

const TourDays = ({days=[]}) => {

  const [active, setActive] = useState(0)

  return (
    <>
      <div className={styles.tour_days_container}>
        {days.map((item, index) => (
          <div key={index} className={styles.day_container}>
            {item && item.image && item.image.length>0 && <div className={styles.day_image} style={{
              backgroundImage: 'url(' + item.image[0].image + ')' ,
              display: index === active ? 'block' : 'none'
            }}/>}
            <div className={styles.day_title_container} onClick={()=>setActive(index)}>
              <div className={styles.day_title}>День {index + 1}. {item.day_title} ({item.location})</div>
              <div className={styles.day_arrow}>
                <img src={index === active ? up : down} alt="chevron"/>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: item.description}} className={styles.day_description} style={{display: index === active ? 'block' : 'none'}}/>
          </div>
        ))}
      </div>

    </>)
}

export default TourDays
