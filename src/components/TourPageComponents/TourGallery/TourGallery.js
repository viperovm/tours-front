import React from "react";
import styles from './TourGallery.module.css';

const TourGallery = ({gallery = []}) => {

  return (
    <>
      <div className={styles.tour_gallery_container}>
        <h3>Галерея</h3>
        <div className={styles.gallery_wrapper}>
          {gallery.map(item => (
            <div className={styles.gallery_image} style={{backgroundImage: 'url(' + item.tmb_image + ')'}}/>

          ))}
        </div>
      </div>

    </>)
}

export default TourGallery
