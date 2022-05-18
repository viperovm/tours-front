import React, {useState} from 'react'
import styles from './Reviews.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import {Link} from "react-router-dom";
import ButtonsSet from "../Tours/ButtonsSet";
import Title from "../Tours/Title";
import ToursSet from "../Tours/ToursSet";
import SearchSection from "../Tours/SearchSection";
import TextSection from "../Tours/TextSection";
import MainLayout from "../../layouts/MainLayout";

const ReviewCard = ({data, action}) => {

  const [active, setActive] = useState(false)

  const {
    user_avatar,
    user_name,
    user_date,
    review_image,
    review_title,
    review,
    review_date,
    review_rating,
  } = data

  const getText = (text, limit) => {
    text = text.trim();
    if(active){
      return text
    } else if(text.length > limit) {
      return text.slice(0, limit) + '...';
    } else {
      return text
    }
  }

  return (
    <>
      <div className={styles.review_card_wrapper}>
        <div className={styles.user_section}>
          <div className={styles.user_avatar} style={{backgroundImage: `url(${user_avatar})`}}/>
          <div className={styles.user_name_section}>
            <div className={styles.user_name}>
              {user_name}
            </div>
            <div className={styles.user_sub_name}>
              {`На Traveler.market с ${user_date}`}
            </div>
          </div>

        </div>
        <div className={styles.review_section}>
          <div className={styles.review_image} style={{backgroundImage: `url(${review_image})`}}/>
          <div className={styles.review_text_section}>
            <div className={styles.review_title}>{review_title}</div>
            <div className={styles.review_text}>{getText(review, 660)}{review.length > 660 ? <span className={styles.review_read_more} onClick={() => setActive(!active)}>{active ? ' скрыть' : ' показать'}</span> : ''}</div>
            <div className={styles.review_date}>{`Отзыв добавлен ${review_date}`}</div>
          </div>
        </div>
        <div className={styles.review_rating_wrapper}>
          <div className={styles.review_rating}>{review_rating}</div>
          <div className={styles.review_sub_rating}>rating</div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard)