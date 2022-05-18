import React from 'react';
import styles from './Chat.module.css';
import read from './images/read.svg'
import read_not from './images/read_not.svg'

const Message = ({
                   data,
                   author,
                   my_avatar,
                 }) => {

  const {
    is_mine,
    is_read,
    time_date,
    text
  } = data

  return (
    <>
      <div className={`${styles.message_wrapper} ${is_mine ? styles.is_mine : ''}`}>
        <div className={styles.user_avatar} style={{backgroundImage: `url(${is_mine ? my_avatar : author.avatar})`}}/>
        <div className={styles.message_body}>
          <div className={styles.message_header}>
            <div className={styles.message_author_name}>{is_mine ? 'Вы' : author.name}</div>
            <div className={styles.message_date_time}>{time_date}</div>
            <div className={styles.message_status}><img src={
              is_read ? read : read_not
            } alt=""/></div>
          </div>
          <div className={styles.message_text}>{text}</div>
        </div>
      </div>
    </>
  );
};

export default Message;