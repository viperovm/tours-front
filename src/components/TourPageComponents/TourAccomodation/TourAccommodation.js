import React from "react";
import styles from './TourAccommodation.module.css';

const TourAccommodation = ({property_types=[], accomodation=[], images=[]}) => {

  return (
    <>
      <div className={styles.tour_accommodation_container}>
        <h3>Тип размещения</h3>
          <ul>
            {property_types.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        <h3>Фото мест проживания</h3>
        <div className={styles.gallery_wrapper}>
          {images.map((item, index) => (
            <div key={index} className={styles.gallery_image} style={{backgroundImage: 'url(' + item.tmb_image + ')'}}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default TourAccommodation
