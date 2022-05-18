import React, {useEffect, useState} from 'react';
import styles from './Blog.module.css';
import star from './images/star.svg'

const BlogCard = ({data, big = false, index}) => {

  const [margin, setMargin] = useState(false)

  console.log(margin)
  console.log(index)

  useEffect(() => {
    if(
      index === 0 ||
      index === 2 ||
      index === 3 ||
      index === 5
    ) {
      setMargin(true)
    } else {
      setMargin(false)
    }
  }, [index])

  const {
    blog_title,
    blog_image,
    blog_text,
    user_avatar,
    user_name,
    user_rating,
    user_reviews,
    blog_date,
    reading_time,
  } = data

  return (
    <>
      <div className={`${styles.card_wrapper} ${big ? styles.big : ''} ${margin ? styles.margin : ''}`}>
        <div className={styles.card_image} style={{backgroundImage: `url(${blog_image})`}}>
          {big &&
            <div className={styles.card_title}>
              {blog_title}
            </div>
          }
        </div>
        <div className={styles.card_text_wrapper}>
          {!big &&
            <div className={styles.card_title}>
              {blog_title}
            </div>
          }
          <div className={styles.card_text}>
            {blog_text}
          </div>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.card_user}>
            <div className={styles.card_avatar} style={{backgroundImage: `url(${user_avatar})`}}/>
            <div className={styles.card_data}>
              <div className={styles.card_user_name}>{user_name}</div>
              <div className={styles.card_user_rating}><img src={star} alt="star"/> {user_rating} <span>({user_reviews})</span></div>
            </div>
          </div>
          <div className={styles.date_time}>
            <div>{`Читать ≈ ${reading_time} мин`}</div>
            <div>{blog_date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;