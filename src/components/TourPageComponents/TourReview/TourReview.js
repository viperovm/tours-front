import React from "react";
import styles from './TourReview.module.css';

const TourReview = ({text, activities=[]}) => {

  const returnText = (text) => {
    return {__html: text}
  }

  return (
    <>
      <div className={styles.tour_review_container}>
      <h3>Обзор тура</h3>
        <div dangerouslySetInnerHTML={{__html: text}} className={styles.tour_review_text}/>

      <h4>Чем мы займемся в туре</h4>
        {activities.map((item, index) => (
          <div key={index} className={styles.activity_wrapper}>
            <div dangerouslySetInnerHTML={{__html: item.description}} className={styles.activity_text}/>
            {item && item.image && <div className={styles.activity_image} style={{backgroundImage: 'url(' + item.image.image + ')'}}/>}
          </div>
        ))}
      </div>

    </>)
}

export default TourReview
